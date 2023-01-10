import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Task from "./tasks.entity";

@Entity("projects")
class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  projectsPicture: string;

  @Column()
  status: string;

  @OneToMany(() => Task, (tasks) => tasks.id)
  tasks: Task;
}

export default Project;
