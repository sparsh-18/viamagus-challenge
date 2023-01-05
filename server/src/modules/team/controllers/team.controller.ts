import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common'
import { CreateTeamDto } from '../dto/CreateTeam.dto'
import { TeamService } from '../services/team.service'

@Controller('team')
export class TeamController {
    
    constructor(private teamService: TeamService) {}
    
    @Get('/')
    async getAllTeam() {
        return await this.teamService.getAllTeam()
    }

    @Post('/createTeam')
    @UsePipes(ValidationPipe)
    async createTeam(@Body() teamdata: CreateTeamDto) {
        return await this.teamService.createNewTeam(teamdata)
    }
}