import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Project from "./projects.entity";
import User from "./users.entity";

@Entity("tasks")
class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({ default: "pendings" })
  status: string;

  @ManyToOne(() => User, (user) => user.tasks, { nullable: true })
  user: User;
}

export default Task;
