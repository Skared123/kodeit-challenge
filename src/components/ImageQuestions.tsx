import { Card } from "@mui/material";
import { FormData } from "@/types";

type ImageQuestionsProps = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function ImageQuestions({ setData }: ImageQuestionsProps) {
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
            Selecciona tu respuesta de acuerdo a lo que visualizas en las
            fotografías
          </p>
          <div className="flex justify-between  space-x-2 w-1/4 items-center">
            <p>SI</p>
            <p>NO</p>
            <p>No Aplica</p>
          </div>
        </div>
        <div className="flex">
          <label className="w-3/4" htmlFor="id-digital-color">
            La digitalización de la ID para este folio está a color?
          </label>
          <div className="flex justify-between space-x-2 w-1/4 items-center">
            <input
              type="radio"
              id="id-digital-color-yes"
              name="id_digital_color"
              value="yes"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="id-digital-color-no"
              name="id_digital_color"
              value="no"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="id-digital-color-not-apply"
              name="id_digital_color"
              value="not-apply"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex">
          <p className="w-3/4">
            Los datos en ambas ID, expediente y digitalizada coinciden?
          </p>
          <div className="flex justify-between space-x-2 w-1/4 items-center">
            <input
              type="radio"
              id="id-coincide-yes"
              name="id_coincide"
              value="yes"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="id-coincide-no"
              name="id_coincide"
              value="no"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="id-coincide-not-apply"
              name="id_coincide"
              value="not-apply"
              onChange={handleChange}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
