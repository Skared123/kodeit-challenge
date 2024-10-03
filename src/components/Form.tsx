import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ClientsTable from "./ClientsTable";
import ExternalLinks from "./ExternalLinks";
import FileModal from "./FileModal";
import IdentificationTab from "./IdentificationTab";
import ImageQuestions from "./ImageQuestions";
import ResponseRequestModal from "./ResponseRequestModal";
import SearchResultsQuestions from "./SearchResultsQuestions";
import { useState, useEffect } from "react";
import { FormData } from "@/types";
import { Progress } from "@/components/ui/progress";
import { fileTypeMapping } from "@/types";
import { mapValueToText, mapReasonToText } from "@/lib/utils";

export default function Form() {
  const [data, setData] = useState<FormData>({
    selected_file_type: "",
    file_type: "identificacion",
    id_digital_color: "",
    external_links: "",
    request_response: "",
    request_response_reason: "",
    observations: "",
    id_coincide: "",
    info_vigente: "",
  });

  const [progress, setProgress] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const totalFields = Object.keys(data).length;
    const filledFields = Object.values(data).filter(
      (value) => value !== ""
    ).length;
    const percentage = Math.round((filledFields / totalFields) * 100);
    setProgress(percentage);
  }, [data]);

  const validateForm = () => {
    for (const key in data) {
      if (data[key as keyof FormData] === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Por favor, completa todos los campos antes de finalizar.");
      return;
    }

    setOpenDialog(true);
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      window.location.reload();
    }, 2000);
  };

  return (
    <form className="p-2 flex flex-col space-y-4" onSubmit={handleSubmit}>
      <div className="flex justify-end space-x-2 items-center">
        <p>Progreso del formulario: {progress}%</p>
        <div className="w-[200px]">
          <Progress value={progress} />
        </div>
      </div>

      <ClientsTable />
      <FileModal data={data} setData={setData} />
      <IdentificationTab data={data} />
      <ImageQuestions data={data} setData={setData} />
      <ExternalLinks data={data} setData={setData} />
      <SearchResultsQuestions data={data} setData={setData} />
      <ResponseRequestModal data={data} setData={setData} />

      <Button type="submit" disabled={progress < 100}>
        Finalizar
      </Button>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar envío</DialogTitle>
          </DialogHeader>
          <div>
            <p>
              <strong>Tipo de archivo seleccionado:</strong>{" "}
              {fileTypeMapping[data.selected_file_type] || "No seleccionado"}
            </p>
            <p>
              <strong>Tipo de archivo:</strong>{" "}
              {data.file_type.charAt(0).toUpperCase() + data.file_type.slice(1)}
            </p>

            <p>
              <strong>Color digital de identificación:</strong>{" "}
              {mapValueToText(data.id_digital_color)}
            </p>
            <p>
              <strong>Coincide con la identificación:</strong>{" "}
              {mapValueToText(data.id_coincide)}
            </p>
            <p>
              <strong>Enlaces externos: </strong> {data.external_links}
            </p>

            <p>
              <strong>Información vigente:</strong>{" "}
              {data.info_vigente === "yes" ? "Sí" : "No"}
            </p>
            <p>
              <strong>Respuesta de la solicitud:</strong>{" "}
              {data.request_response === "approved" ? "Aprobada" : "Rechazada"}
            </p>
            <p>
              <strong>Motivo de la respuesta:</strong>{" "}
              {mapReasonToText(data.request_response_reason)}
            </p>
            <p>
              <strong>Observaciones:</strong> {data.observations}
            </p>
          </div>
          <DialogFooter>
            <Button onClick={handleConfirm} disabled={loading}>
              {loading ? "Simulando..." : "Confirmar"}
            </Button>
            <Button variant="secondary" onClick={() => setOpenDialog(false)}>
              Cancelar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}
