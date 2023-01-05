import {Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe} from '@nestjs/common'
import { CreateTeamDto } from '../dto/CreateTeam.dto'
import { Team } from '../entities/team.entity'
import { TeamService } from '../services/team.service'

@Controller('team')
export class TeamController {
    
    constructor(private teamService: TeamService) {}
    
    @Get('/')
    async getAllTeam(): Promise<Team[]> {
        return await this.teamService.getAllTeam()
    }

    @Get('/:id')
    async getTeamById(@Param('id', ParseIntPipe) id: number ) : Promise<Team> {
        return await this.teamService.findTeamById(id);
    }

    @Post('/createTeam')
    @UsePipes(ValidationPipe)
    async createTeam(@Body() teamdata: CreateTeamDto) {
        return await this.teamService.createNewTeam(teamdata)
    }
}