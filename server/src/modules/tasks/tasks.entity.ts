import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { TeamMember } from '../team/entities/teamMembers.entity';

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    description: string;

    @Column()
    status: boolean

    // @Column({default: 0})
    // assignee: number

    @Column()
    due_date: Date

    @ManyToOne(() => TeamMember, (assignee) => assignee.tasks)
    assignee: TeamMember
}