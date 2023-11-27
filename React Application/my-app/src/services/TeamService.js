import axios from "axios";

const TeamsService = (() => {
  const teamsController = "http://localhost:5068/api/teams";
  const imageUrl = "http://localhost:5068/images";

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

  const getImageUrl = () => {
    return imageUrl;
  };

  return { getAllTeams, getTeamById, getTeamByName, getImageUrl };
})();

export default TeamsService;
