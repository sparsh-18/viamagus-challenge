import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamMemberDto } from "../dto/CreateTeamMember.dto";
import { Team } from "../entities/team.entity";
import { TeamMember } from "../entities/teamMembers.entity";


@Injectable()
export class TeamMemberService {

    constructor(
        @InjectRepository(TeamMember)
        private teamMemberRepository: Repository<TeamMember>
    ) {}

    async createMember(member: CreateTeamMemberDto, team: Team): Promise<TeamMember> {

        const newMember = await this.teamMemberRepository.save({
            name: member.name
        });

        team.teamMembers = [...team.teamMembers, newMember];

        await team.save();

        return newMember;

    }


    async getAllMembers(): Promise<TeamMember[]> {
        return await this.teamMemberRepository.find()
    }

    async findMemberById(id: number): Promise<TeamMember> {
        return await this.teamMemberRepository.findOne({
            where: {id: id}
        })
    }
    
}