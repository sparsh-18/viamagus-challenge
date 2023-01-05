import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./createTask.dto";
import { Task } from "./tasks.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) {}

    async getAllTasks(): Promise<Task[]> {
        return await this.taskRepository.find()
    }

    async createNewTask(taskdata: CreateTaskDto) {
        return await this.taskRepository.save(taskdata);
    }

}