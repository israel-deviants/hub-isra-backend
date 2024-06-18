import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  num_id: number;

  @Column()
  id: string;

  @Column()
  owner: string;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  thumb: string;

  @Column({ default: false })
  fav: boolean;
}
