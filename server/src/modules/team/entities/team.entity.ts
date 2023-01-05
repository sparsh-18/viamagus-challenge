import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { TeamMember } from './teamMembers.entity';

@Entity()
export class Team extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
    })
    name: string;

    @OneToMany(() => TeamMember, teamMember => teamMember.team)
    teamMembers: TeamMember[]
}