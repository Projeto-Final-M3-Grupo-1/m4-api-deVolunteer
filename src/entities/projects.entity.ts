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
import Tasks_to_Projects from "./tasks_to_projects.entity";
import User_to_Project from "./users_to_projects.entity";

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

  @OneToOne(() => Ong, (ong) => ong.project)
  ong: Ong;

  @OneToMany(
    () => User_to_Project,
    (user_to_project) => user_to_project.project
  )
  users: User_to_Project[];

  @OneToMany(
    () => Tasks_to_Projects,
    (tasks_to_project) => tasks_to_project.project
  )
  tasks: Tasks_to_Projects[];
}

export default Project;
