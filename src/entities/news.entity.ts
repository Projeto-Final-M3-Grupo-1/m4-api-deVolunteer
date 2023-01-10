import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./users.entity";

@Entity("news")
class News {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  site: string;

  @Column()
  img: string;

  @ManyToOne(() => User, (users) => users.id)
  user: User;
}

export default News;
