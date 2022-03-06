import Sequelize, { Model } from "sequelize";
import connection from "../config/sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  public readonly id!: number;

  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  },
  {
    tableName: "users",
    updatedAt: "updated_at",
    createdAt: "created_at",
    sequelize: connection,
  }
);

User.addHook("beforeSave", async (user: User): Promise<void> => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 8);
  }
});

export default User;
