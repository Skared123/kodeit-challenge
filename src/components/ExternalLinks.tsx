import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FormData } from "@/types"; // Asegúrate de que tienes este tipo importado

type ExternalLinksProps = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function ExternalLinks({ setData }: ExternalLinksProps) {
  const [selectedLink, setSelectedLink] = useState<string>("");

  const handleButtonClick = (link: string) => {
    setSelectedLink(link);
    setData((prevData) => ({
      ...prevData,
      external_links: link,
    }));
  };

  return (
    <div className="flex">
      <div className="flex w-1/4 justify-end mr-3">
        <p className="font-bold mr-2">Links externos</p>
      </div>
      <div className="flex space-x-2">
        <Button
          className="bg-white text-black"
          onClick={() => handleButtonClick("INE")}
          disabled={selectedLink === "INE"}
        >
          INE
        </Button>
        <Button
          className="bg-white text-black"
          onClick={() => handleButtonClick("CURP")}
          disabled={selectedLink === "CURP"}
        >
          CURP
        </Button>
        <Button
          className="bg-white text-black"
          onClick={() => handleButtonClick("SEPOMEX")}
          disabled={selectedLink === "SEPOMEX"}
        >
          SEPOMEX
        </Button>
        <Button
          className="bg-white text-black"
          onClick={() => handleButtonClick("OTROS")}
          disabled={selectedLink === "OTROS"}
        >
          OTROS
        </Button>
      </div>
    </div>
  );
}
