import { ReactNode } from "react";
import useJsonFetch from "../../services/useJsonFetch";
import Preloader from "../Preloader/Preloader";

const ErrorData = (): ReactNode => {
  const [data, isLoading, hasError] = useJsonFetch(
    "http://localhost:7070/error"
  );
  console.log(data);

  return (
    <div className="Data">
      <h2 className="Data-Title">Component ErrorData</h2>
      <div className="Data-Content">
        {isLoading ? (
          <Preloader />
        ) : (
          (data && `${data.status}`) || (hasError && `Ошибка`)
        )}
      </div>
    </div>
  );
};

export default ErrorData;
