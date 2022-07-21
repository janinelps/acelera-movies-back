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

  @Column({ name: "name", type: "varchar" })
  name: String

  @Column({ name: "email", type: "varchar" })
  email: String

  @Column({ name: "password", type: "varchar" })
  password: String

  @CreateDateColumn({
    name: "created_at",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMPTZ(6)",
    onUpdate: "CURRENT_TIMESTAMPTZ(6)",
  })
  createdAt: Date
}
