import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from "../dto/CreateTeam.dto";
import { Team } from "../entities/team.entity";


@Injectable()
export class TeamService {

    constructor(
        @InjectRepository(Team)
        private teamRepository: Repository<Team>
    ) {}

    async getAllTeam() {
        return await this.teamRepository.find()
    }

    async findTeamById(id: number): Promise<Team> {
        return await this.teamRepository.findOne({
            where: {id: id},
            relations: ['teamMembers']
        })
    }

    async createNewTeam(team: CreateTeamDto) {
        return await this.teamRepository.save(team);
    }
}