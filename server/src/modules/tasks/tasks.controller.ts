import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { TeamMember } from "../team/entities/teamMembers.entity"
import { TeamMemberService } from "../team/services/teamMember.service"
import { CreateTaskDto } from "./createTask.dto"
import { Task } from "./tasks.entity"
import { TaskService } from "./tasks.service"

@Controller('tasks')
export class TaskController {
    
    constructor(
        private taskService: TaskService,
        private teamMemberService: TeamMemberService
    ) {}
    
    @Get('/')
    async getAllTasks(): Promise<Task[]> {
        return await this.taskService.getAllTasks()
    }

    @Get('/assigned')
    async getAllAssignedTasks(): Promise<Task[]> {
        return await this.taskService.getAllAssignedTasks()
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createTask(@Body() taskdata: CreateTaskDto): Promise<Task> {
        return await this.taskService.createNewTask(taskdata)
    }

    @Post('/createmany')
    @UsePipes(ValidationPipe)
    async createMultiple(@Body() taskdatas: CreateTaskDto[]){
        await taskdatas.map(async data => {
            await this.taskService.createNewTask(data)
        })

        return taskdatas;
    }

    @Get('/assign/:id/:memid')
    async assignTask(
        @Param('id', ParseIntPipe) id: number,
        @Param('memid', ParseIntPipe) memid: number)
        : Promise<{task: Task; member: TeamMember;}>
    {
        
        const member = await this.teamMemberService.findMemberById(memid);
        const task = await this.taskService.findTaskById(id);
        
        await this.taskService.assign(task, member);

        return {task, member}
    }

    @Get('/changestatus/:id')
    async changeStatus(@Param('id', ParseIntPipe) id: number): Promise<Task>  {
        const task = await this.taskService.findTaskById(id);

        await this.taskService.changeStatus(task);

        return task;
    }
}