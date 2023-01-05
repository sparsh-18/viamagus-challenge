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

    getAllTeam() {
        return [1, 2, 3, 4]
    }

    async createNewTeam(team: CreateTeamDto) {
        return await this.teamRepository.save(team);
    }
}