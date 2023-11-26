import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormulaContext from "../context/FormulaContext";
import { Detail } from "../components";

const DriverDetailScreen = () => {
  const { getByIDFromService } = useContext(FormulaContext);
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    driverDetails();
  }, []);

  const driverDetails = async () => {
    const data = await getByIDFromService(id);

    setDetail(data);
  };
  return (
    <section className="max-container shadow-lg">
      {detail && (
        <Detail
          driverName={detail.name}
          driverAge={detail.age}
          driverImage={detail.image}
          driverNationality={detail.nationality}
          driverPoints={detail.points}
          driverRanking={detail.ranking}
        />
      )}
    </section>
  );
};

export default DriverDetailScreen;
