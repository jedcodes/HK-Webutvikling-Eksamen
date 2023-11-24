import { createContext, useState } from "react";

const FormulaContext = createContext();

export const FormulaProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [races, setRaces] = useState([]);

  const value = {
    drivers,
    setDrivers,
    teams,
    setTeams,
    races,
    setRaces,
  };

  return (
    <FormulaContext.Provider value={value}>{children}</FormulaContext.Provider>
  );
};

export default FormulaContext;
