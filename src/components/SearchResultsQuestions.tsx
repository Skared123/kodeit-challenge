import { Card } from "@mui/material";
import { FormData } from "@/types";

type SearchResultsQuestionsProps = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function SearchResultsQuestions({
  setData,
}: SearchResultsQuestionsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="lg:flex">
      <div className="lg:w-1/4 lg:mr-3"></div>
      <Card className="border p-4 w-full lg:w-2/4">
        <div className="flex">
          <p className="font-bold w-3/4">
            Selecciona tu respuesta de acuerdo al resultado de la búsqueda
          </p>
          <div className="flex justify-between space-x-2 w-1/4 items-center">
            <p>SI</p>
            <p>NO</p>
            <p>No Aplica</p>
          </div>
        </div>
        <div className="flex">
          <p className="w-3/4">
            La información devuelta por tus consultas es vigente?
          </p>
          <div className="flex justify-between space-x-2 w-1/4 items-center">
            <input
              type="radio"
              id="info-vigente-yes"
              name="info_vigente"
              value="yes"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="info-vigente-no"
              name="info_vigente"
              value="no"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="info-vigente-not-apply"
              name="info_vigente"
              value="not-apply"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex">
          <p className="w-3/4">
            La información devuelta por las consultas coincide con la
            identificación del cliente?
          </p>
          <div className="flex justify-between space-x-2 w-1/4 items-center">
            <input
              type="radio"
              id="info-coincide-yes"
              name="info_coincide"
              value="yes"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="info-coincide-no"
              name="info_coincide"
              value="no"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="info-coincide-not-apply"
              name="info_coincide"
              value="not-apply"
              onChange={handleChange}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
