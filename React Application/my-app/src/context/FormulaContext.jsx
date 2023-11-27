import { createContext, useEffect, useState } from "react";
import DriversService from "../services/DriversService";
import TeamsService from "../services/TeamService";
import RaceService from "../services/RaceService";
import FlashCardService from "../services/FlashCardService";

const FormulaContext = createContext();

export const FormulaProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [races, setRaces] = useState([]);
  const [flashcards, setFlashCards] = useState([]);

  useEffect(() => {
    getAllDriversFromService();
    getAllTeamsFromService();
    getAllRaceFromService();
    getAllFlashCardsFromService();
  }, []);

  /**
   *
   *  DRIVERS CONTEXT
   *
   */

  // Fetching all F1 drivers
  const getAllDriversFromService = async () => {
    const { data } = await DriversService.getAllDrivers();

    setDrivers(data);
  };

  // Fetching drivers by ID
  const getByIDFromService = async (id) => {
    try {
      const { data } = await DriversService.getDriversById(id);

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const getByNameFromService = async (name) => {
    try {
      const { data } = await DriversService.getDriverByName(name);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   *
   * TEAMS CONTEXT
   *
   */

  const getAllTeamsFromService = async () => {
    try {
      const { data } = await TeamsService.getAllTeams();
      setTeams(data);
    } catch {
      return [];
    }
  };

  const getTeamByIdFromService = async (id) => {
    try {
      const { data } = await TeamsService.getTeamById(id);

      return data;
    } catch {
      return null;
    }
  };

  const getTeamByNameFromService = async (name) => {
    try {
      const { data } = await TeamsService.getTeamByName(name);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   *
   *  RACE CONTEXT
   *
   */
  const getAllRaceFromService = async () => {
    const { data } = await RaceService.getAllRaces();
    setRaces(data);
    console.log(data);
  };

  /**
   *
   * FLASHCARD CONTEXT
   *
   */

  const getAllFlashCardsFromService = async () => {
    try {
      const { data } = await FlashCardService.getFlashCards();

      setFlashCards(data);
    } catch {
      return [];
    }
  };

  const getById = async (id) => {
    try {
      const flashCardToUpdate = await FlashCardService.getByID(id);

      return flashCardToUpdate;
    } catch {
      alert("No Flash Card Found! Try Again");
    }
  };

  // Editing flash card question
  const editFlashCard = async (updateFlashCard) => {
    try {
      await FlashCardService.putFlashCard(updateFlashCard);
      getAllFlashCardsFromService();
    } catch {
      alert("Something went wrong");
    }
  };

  // Deleting flash card from database
  const deleteFlashCard = async (id) => {
    try {
      const result = await FlashCardService.deleteFlashCard(id);

      return result;
    } catch {
      alert("Something went wrong");
    }
  };

  const value = {
    drivers,
    teams,
    races,
    flashcards,
    getByIDFromService,
    getByNameFromService,
    getTeamByNameFromService,
    getTeamByIdFromService,
    getById,
    editFlashCard,
    deleteFlashCard,
  };

  return (
    <FormulaContext.Provider value={value}>{children}</FormulaContext.Provider>
  );
};

export default FormulaContext;
