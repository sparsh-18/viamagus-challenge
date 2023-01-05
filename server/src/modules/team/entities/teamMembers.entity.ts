import { Task } from 'src/modules/tasks/tasks.entity';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
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

    @OneToMany(() => Task, (task) => task.assignee)
    tasks: Task[]
}