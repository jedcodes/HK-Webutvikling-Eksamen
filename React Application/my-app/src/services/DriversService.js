import axios from "axios";

const DriversService = (() => {
  const driversController = "http://localhost:5068/api/drivers";
  const imageUrl = "http://localhost:5068/images";

  const getAllDrivers = async () => {
    try {
      const result = await axios.get(driversController);

      return result;
    } catch (e) {
      return [];
    }
  };

  const getDriversById = async (id) => {
    try {
      const result = await axios.get(`${driversController}/${id}`);

      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const getDriverByName = async (driverName) => {
    try {
      const result = await axios.get(`${driversController}/name/${driverName}`);
      return result;
    } catch (e) {
      return e;
    }
  };

  const getImageUrl = () => {
    return imageUrl;
  };

  return {
    getAllDrivers,
    getDriversById,
    getDriverByName,
    getImageUrl,
  };
})();

export default DriversService;
