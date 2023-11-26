import { useContext, useState } from "react";
import FormulaContext from "../context/FormulaContext";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { getByNameFromService } = useContext(FormulaContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    getByNameFromService(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="bg-slate-300 text-white rounded-lg px-5 py-1"
      />
    </form>
  );
};

export default SearchBar;
