import { Card } from "@/components/ui/card";

type IdentificationTabProps = {
  data: {
    file_type: string;
  };
};

const imagesMap = {
  identificacion: [
    "./images/identificacion-delantera.jpeg",
    "./images/identificacion-trasera.jpeg",
  ],
  comprobante: ["./images/comprobante.webp"],
  propiedad: [
    "./images/titulo-propiedad.jpeg",
    "./images/titulo-propiedad-2.jpeg",
  ],
  contrato: ["./images/contrato.webp"],
  contacto: ["./images/contacto.jpg", "./images/contacto.png"],
  fotografia: ["./images/fotografia-personal.jpeg"],
};

export default function IdentificationTab({ data }: IdentificationTabProps) {
  const imagesToShow = imagesMap[data.file_type] || [];

  return (
    <div className="lg:flex">
      <div className=" w-full lg:w-1/4 flex lg:justify-end mr-4">
        <p>Tab Identificación</p>
      </div>
      <div className="w-full lg:w-3/4 ">
        <Card className=" w-full lg:w-2/3">
          <div className="flex flex-wrap justify-around">
            {imagesToShow.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={image}
                className="max-w-[150px] max-h-[150px] p-2" // Tamaño máximo de 100x100
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
