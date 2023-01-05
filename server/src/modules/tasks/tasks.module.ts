import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from "./tasks.entity";
import { TaskService } from "./tasks.service";
import { TeamModule } from "../team/team.module";

@Module({
    controllers:[TaskController],
    imports: [TypeOrmModule.forFeature([Task]), TeamModule],
    providers: [TaskService]
})
export class TaskModule {}