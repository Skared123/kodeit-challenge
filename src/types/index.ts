export type FormData = {
  selected_file_type: string;
  file_type: string;
  external_links: string;
  request_response: string;
  request_response_reason: string;
  observations: string;
  id_digital_color: string;
  id_coincide: string;
  info_vigente: string;
};

export const fileTypeMapping: { [key: string]: string } = {
  "credit-file": "Expediente a Crédito",
  "recruitment-file": "Expediente Captación",
};
