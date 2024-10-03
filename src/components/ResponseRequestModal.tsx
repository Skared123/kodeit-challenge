import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/types";

type ResponseRequestModalProps = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function ResponseRequestModal({
  setData,
}: ResponseRequestModalProps) {
  const handleResponseChange = (value: string) => {
    setData((prevData) => ({
      ...prevData,
      request_response: value,
    }));
  };

  const handleReasonChange = (value: string) => {
    setData((prevData) => ({
      ...prevData,
      request_response_reason: value,
    }));
  };

  const handleObservationsChange = (value: string) => {
    setData((prevData) => ({
      ...prevData,
      observations: value,
    }));
  };

  return (
    <div className="border p-4 rounded-lg">
      <p className="font-bold"> RESPUESTA DE SOLICITUD</p>
      <div className="flex space-x-5">
        <div className="w-1/2 space-y-2">
          <div className="flex space-x-2">
            <div className="w-1/3">
              <label htmlFor="" className="pt-1">
                Respuesta
              </label>
            </div>
            <Select onValueChange={handleResponseChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="approved">Aprobada</SelectItem>
                  <SelectItem value="rejected">Rechazada</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex space-x-2">
            <div className="w-1/3">
              <label htmlFor="" className="pt-1">
                Motivo
              </label>
            </div>
            <Select onValueChange={handleReasonChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="photograph_mismatch">
                    Fotografía del Cliente no coincide
                  </SelectItem>
                  <SelectItem value="blurred_photo">
                    Fotografía borrosa o manipulada
                  </SelectItem>
                  <SelectItem value="no_visible_photo">
                    Fotografía no visible
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <label htmlFor="">Observaciones</label>
          <Textarea
            onChange={(e) => handleObservationsChange(e.target.value)}
            placeholder="Observaciones..."
          />
        </div>
      </div>
    </div>
  );
}
