import { ReactNode } from "react";
import useJsonFetch from "../../services/useJsonFetch";
import Preloader from "../Preloader/Preloader";

const Data = (): ReactNode => {
  const [data, isLoading, hasError] = useJsonFetch(
    "http://localhost:7070/data"
  );
  console.log(data);

  return (
    <div className="Data">
      <h2 className="Data-Title">Component Data</h2>
      <div className="Data-Content">
        {isLoading ? (
          <Preloader />
        ) : (
          (data && `${data.status}`) || `Ошибка ${hasError}`
        )}
      </div>
    </div>
  );
};

export default Data;
