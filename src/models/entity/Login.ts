import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "email", type: "varchar" })
  email: String

  @Column({ name: "password", type: "varchar" })
  password: String
}
