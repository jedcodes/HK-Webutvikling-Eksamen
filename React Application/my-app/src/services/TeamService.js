import axios from "axios";

const TeamsService = (() => {
  const teamsController = "http://localhost:5068/api/teams";

  const getAllTeams = async () => {
    try {
      const result = await axios.get(teamsController);

      return result;
    } catch (e) {
      return [];
    }
  };

  const getTeamById = async (id) => {
    try {
      const result = await axios.get(`${teamsController}/${id}`);

      return result;
    } catch (e) {
      return null;
    }
  };

  const getTeamByName = async (teamName) => {
    try {
      const result = await axios.get(`${teamsController}/team/${teamName}`);

      return result;
    } catch {
      return null;
    }
  };

  return { getAllTeams, getTeamById, getTeamByName };
})();

export default TeamsService;
