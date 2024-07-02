import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../../DBConnection/SQLDB";

interface CandidateAttributes {
  id: number;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  callTime?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  comments?: string;
}

interface CandidateCreationAttributes
  extends Optional<CandidateAttributes, "id"> {}

export class CandidateModel
  extends Model<CandidateAttributes, CandidateCreationAttributes>
  implements CandidateAttributes
{
  public id!: number;
  public firstName?: string;
  public lastName?: string;
  public email!: string;
  public phoneNumber?: string;
  public callTime?: string;
  public linkedInUrl?: string;
  public githubUrl?: string;
  public comments?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CandidateModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    callTime: {
      type: DataTypes.TIME,
    },
    linkedInUrl: {
      type: DataTypes.STRING,
    },
    githubUrl: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Candidate",
  }
);

export default CandidateModel;
