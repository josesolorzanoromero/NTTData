import { IsString, IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreateOrganizationDto {
  @IsString({ message: 'El nombre es obligatorio' })
  @MinLength(1, { message: 'El nombre debe tener almenos un caracter' })
  @MaxLength(50, { message: 'El nombre debe tener máximo 50 caracteres' })
  name: string;

  @IsNumber()
  status: number;
}
