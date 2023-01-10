import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Ong from "./ongs.entity";
import Project from "./projects.entity";
import User from "./users.entity";

@Entity("users_to_projects_in_ongs")
class User_to_Project_in_Ong {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (users) => users.id)
  user: User;

  @ManyToOne(() => Project, (projects) => projects.id)
  project: Project;

  @ManyToOne(() => Ong, (ongs) => ongs.id)
  ong: Ong;
}

export default User_to_Project_in_Ong;
