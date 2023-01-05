import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Team } from './team.entity';

@Entity()
export class TeamMember extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
    })
    name: string;

    @ManyToOne(() => Team, (team) => team.teamMembers)
    team: Team
}