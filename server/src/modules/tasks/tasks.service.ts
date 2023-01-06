import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./createTask.dto";
import { Task } from "./tasks.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamMember } from "../team/entities/teamMembers.entity";

@Injectable()
export class TaskService {
   
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) {}

    async getAllTasks(): Promise<Task[]> {
        return await this.taskRepository.find()
    }

    async getAllAssignedTasks(): Promise<Task[]> {
        return await this.taskRepository.find({
            relations: {assignee: true}
        })
    }

    async createNewTask(taskdata: CreateTaskDto): Promise<Task> {
        return await this.taskRepository.save(taskdata);
    }

    async findTaskById(id: number): Promise<Task> {
        return await this.taskRepository.findOne({where:{ id: id}})
    }

    async assign(task: Task, member: TeamMember): Promise<Task> {
        member.tasks = [...member.tasks, task];
        await member.save();
        
        return task;
    }

    async changeStatus(task: Task): Promise<Task> {
        task.status = !task.status;
        await task.save()
        return task;
    }

    async deassign(task: Task, member: TeamMember): Promise<Task> {
        // member.tasks = [...member.tasks, task];

        member.tasks = member.tasks.filter((t) => {
            return task.id !== t.id;
        })

        await member.save();
        
        return task;
    }

    async deleteTask(task: Task): Promise<Task>{
        
        return await this.taskRepository.remove(task);
    }
   
}