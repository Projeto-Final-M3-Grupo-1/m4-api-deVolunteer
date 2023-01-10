import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Technology from "./technologies.entity";
import User from "./users.entity";

@Entity("users_to_technologies")
class User_to_Technology {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Technology, (technologies) => technologies.id)
  technologies: Technology;

  @ManyToOne(() => User, (users) => users.id)
  user: User;
}

export default User_to_Technology;
