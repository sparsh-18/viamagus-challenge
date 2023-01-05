import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateTeamMemberDto } from "../dto/CreateTeamMember.dto";
import { TeamMember } from "../entities/teamMembers.entity";
import { TeamService } from "../services/team.service";
import { TeamMemberService } from "../services/teamMember.service";

@Controller('team/member')
export class TeamMemberController {
    constructor(
        private teamMemberService: TeamMemberService,
        private teamService: TeamService    
    ) {}
    
    @Get('/all')
    async getAllTeamMembers(): Promise<TeamMember[]> {
        return await this.teamMemberService.getAllMembers();
    }

    @Get('/:id')
    async getTeamMemberById(@Param('id', ParseIntPipe) id: number): Promise<TeamMember> {
        return await this.teamMemberService.findMemberById(id);
    }

    @Post('/add')
    @UsePipes(ValidationPipe)
    async addTeamMember(@Body() member: CreateTeamMemberDto) {
        // return member;

        const team = await this.teamService.findTeamById(member.teamId);

        await this.teamMemberService.createMember(member, team);

        return {member, team}
    }
}