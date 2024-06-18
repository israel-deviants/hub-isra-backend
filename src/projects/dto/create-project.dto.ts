import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  owner: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  symbol: string;

  @IsString()
  thumb: string;

  @IsBoolean()
  fav: boolean;
}
