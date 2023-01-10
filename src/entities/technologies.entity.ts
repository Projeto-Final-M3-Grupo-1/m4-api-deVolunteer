import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("technologies")
class Technology {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
export default Technology;
