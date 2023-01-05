import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

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

    @Column({default: 0})
    assignee: number

    @Column()
    due_date: Date
}