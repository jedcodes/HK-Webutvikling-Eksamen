const DriversService = (() => {
  const driversController = "http://localhost:5068/api/drivers";

  const getAllDrivers = async () => {
    const result = await fetch(driversController);

    console.log(result);
  };

  return { getAllDrivers };
})();

export default DriversService;
