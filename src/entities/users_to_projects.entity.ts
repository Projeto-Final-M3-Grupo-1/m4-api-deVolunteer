import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import Project from "./projects.entity";
import User from "./users.entity";

@Entity("users_to_projects")
class User_to_Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  applied_in_project: Date;

  @ManyToOne(() => User, (users) => users.id)
  user: User;

  @ManyToOne(() => Project, (projects) => projects.id)
  project: Project;
}

export default User_to_Project;
