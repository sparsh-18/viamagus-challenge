import { Module } from '@nestjs/common';
import { TeamController } from './controllers/team.controller';
import { TeamService } from './services/team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { TeamMember } from './entities/teamMembers.entity';
import { TeamMemberService } from './services/teamMember.service';
import { TeamMemberController } from './controllers/teamMember.controller';

@Module({
    controllers:[TeamController, TeamMemberController],
    imports: [TypeOrmModule.forFeature([Team, TeamMember])],
    providers: [TeamService, TeamMemberService]
})
export class TeamModule {}
