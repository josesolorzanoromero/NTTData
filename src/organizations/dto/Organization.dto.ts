import { IsString, IsNumber, MaxLength, MinLength } from 'class-validator';

export class OrganizationDto {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  name: string;
  @IsNumber()
  status: number;
}
