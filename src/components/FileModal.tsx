import { SelectFile } from "./SelectFile";
import TypeFile from "./TypeFile";
import { FormData } from "@/types";

type FileModalProps = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function FileModal({ data, setData }: FileModalProps) {
  return (
    <div className="lg:flex space-y-4 lg:space-y-0">
      <div className="flex w-full lg:justify-end lg:mr-4 lg:w-1/4 ">
        <SelectFile data={data} setData={setData} />
      </div>
      <div className="w-full lg:w-3/4">
        <TypeFile data={data} setData={setData} />
      </div>
    </div>
  );
}
