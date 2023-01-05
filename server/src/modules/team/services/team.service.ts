import { Injectable } from "@nestjs/common";

@Injectable()
export class TeamService {
    getAllTeam() {
        return [1, 2, 3, 4]
    }
}