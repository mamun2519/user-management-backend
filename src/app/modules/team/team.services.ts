import { ITeam } from "./team.interface";
import { Team } from "./team.model";

const createTeamFromDB = async (data: ITeam): Promise<ITeam> => {
  //   const existTeam = await Team.findOne({
  //     teamMember: data.teamMember,
  //   }).populate("Team");

  const team = await Team.create(data);
  return team;
};

const myTeamFromDB = async (userId: string): Promise<ITeam[]> => {
  const myTeam = await Team.find({ userId });
  return myTeam;
};

const deleteTeamFromDB = async (id: string): Promise<ITeam | null> => {
  const team = await Team.findByIdAndDelete(id);
  return team;
};

export const TeamService = {
  createTeamFromDB,
  myTeamFromDB,
  deleteTeamFromDB,
};
