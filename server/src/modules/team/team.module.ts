import { Module } from '@nestjs/common';
import { TeamController } from './controllers/team.controller';
import { TeamService } from './services/team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';

@Module({
    controllers:[TeamController],
    imports: [TypeOrmModule.forFeature([Team])],
    providers: [TeamService]
})
export class TeamModule {}
