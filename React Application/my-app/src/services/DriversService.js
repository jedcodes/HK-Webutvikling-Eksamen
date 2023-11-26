import axios from "axios";

const DriversService = (() => {
  const driversController = "http://localhost:5068/api/drivers";
  const imageController = "http://localhost:5068/api/imageUpload";
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

  const postNewDriver = async (newDriver, image) => {
    try {
      const result = await axios.post(driversController, newDriver);

      const formData = new FormData();
      formData.append("formFile", image);

      const uploadResult = await axios({
        url: imageController,
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      });

      formData.delete("formFile");
      console.log(result);
      console.log(uploadResult);
    } catch (error) {
      console.log(error);
    }
  };

  const getImageUrl = () => {
    return imageUrl;
  };

  return {
    getAllDrivers,
    getDriversById,
    getDriverByName,
    postNewDriver,
    getImageUrl,
  };
})();

export default DriversService;
