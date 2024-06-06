import { IsNumber, IsString } from 'class-validator';

export class CreateAqoursMemberDto {
  @IsNumber()
    grade: number;

  @IsString()
    icon: string;

  @IsString()
    name: string;
}
