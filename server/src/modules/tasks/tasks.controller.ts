import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { CreateTaskDto } from "./createTask.dto"
import { TaskService } from "./tasks.service"

@Controller('tasks')
export class TaskController {
    
    constructor(private taskService: TaskService) {}
    
    @Get('/')
    async getAllTasks() {
        return await this.taskService.getAllTasks()
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createTask(@Body() taskdata: CreateTaskDto) {
        return await this.taskService.createNewTask(taskdata)
    }
}