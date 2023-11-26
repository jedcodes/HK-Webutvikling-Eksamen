import axios from "axios";

const RaceService = (() => {
  const raceController = "http://localhost:5068/api/races";

  const getAllRaces = async () => {
    try {
      const result = await axios.get(raceController);

      return result;
    } catch {
      return [];
    }
  };
  return { getAllRaces };
})();

export default RaceService;
