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

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  phone: number;

  @Column({ nullable: true })
  ownerName?: string;

  @Column({ nullable: true })
  profilePicture?: string;

  @Column({ nullable: true })
  github?: string;

  @Column({ nullable: true })
  linkedin?: string;

  @Column({ default: true })
  isActive: boolean;

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
