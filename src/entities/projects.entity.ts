import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Ong from "./ongs.entity";
import Task from "./tasks.entity";
import User from "./users.entity";
import User_to_Project from "./users_to.projects.entity";

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

  @OneToOne(() => Ong, (ong) => ong.project)
  ong: Ong;

  @OneToMany(
    () => User_to_Project,
    (user_to_project) => user_to_project.project
  )
  users: User_to_Project[];
}

export default Project;
