import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./users.entity";

@Entity("tasks")
class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({ default: "pendings" })
  status: string;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}

export default Task;
