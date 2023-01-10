import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

@Entity("ongs")
class Ong {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  companyName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cnpj: string;

  @Column()
  phone: number;

  @Column()
  ownerName: string;

  @Column()
  profilePicture: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}

export default Ong;
