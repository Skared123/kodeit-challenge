import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData } from "@/types";

type SelectFileProps = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

export function SelectFile({ setData }: SelectFileProps) {
  const fnc = (value: string) => {
    setData((prevData) => ({
      ...prevData,
      selected_file_type: value,
    }));
  };

  return (
    <Select onValueChange={fnc}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="credit-file">Expediente a Crédito</SelectItem>
          <SelectItem value="recruitment-file">Expediente Captación</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
