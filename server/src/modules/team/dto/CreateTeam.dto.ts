import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamDto {
    @IsNotEmpty()
    @Length(3, 255)
    name: string;
}