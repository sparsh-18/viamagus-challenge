import { IsNotEmpty, Length } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    @Length(3, 255)
    description: string;

    @IsNotEmpty()
    status: boolean;

    @IsNotEmpty()
    due_date: Date;

}