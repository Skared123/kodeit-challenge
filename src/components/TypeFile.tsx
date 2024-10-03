import { Button } from "@/components/ui/button";
import { FormData } from "@/types";

type TypeFileProps = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function TypeFile({ data, setData }: TypeFileProps) {
  const fileTypes = [
    "identificacion",
    "comprobante",
    "propiedad",
    "contrato",
    "contacto",
    "fotografia",
  ];

  const handleButtonClick = (fileType: string) => {
    setData((prevData) => ({
      ...prevData,
      file_type: fileType,
    }));
  };

  return (
    <div className="space-x-2 space-y-2 lg:space-y-0">
      {fileTypes.map((fileType) => (
        <Button
          key={fileType}
          className="bg-white text-black"
          onClick={() => handleButtonClick(fileType)}
          disabled={data.file_type === fileType}
        >
          {fileType.charAt(0).toUpperCase() + fileType.slice(1)}{" "}
        </Button>
      ))}
    </div>
  );
}
