import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('games')
class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title:string;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Game }; 