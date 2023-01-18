import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("technologies")
class Technology {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}
export default Technology;
