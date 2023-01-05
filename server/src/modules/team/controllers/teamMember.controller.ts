import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateTeamMemberDto } from "../dto/CreateTeamMember.dto";
import { TeamService } from "../services/team.service";
import { TeamMemberService } from "../services/teamMember.service";

@Controller('team/member')
export class TeamMemberController {
    constructor(
        private teamMemberService: TeamMemberService,
        private teamService: TeamService    
    ) {}

    @Post('/add')
    @UsePipes(ValidationPipe)
    async addTeamMember(@Body() member: CreateTeamMemberDto) {
        // return member;

        const team = await this.teamService.findTeamById(member.teamId);

        await this.teamMemberService.createMember(member, team);

        return {member, team}
    }
}