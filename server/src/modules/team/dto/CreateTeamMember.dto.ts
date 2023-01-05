import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberDto {
    @IsNotEmpty()
    @Length(3, 255)
    name: string;

    @IsNotEmpty()
    teamId: number;
}