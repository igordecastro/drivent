export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  erro?: boolean,
  logradouro: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
};

export type RequestError = {
  status: number,
  data: object | null,
  statusText: string,
  name: string,
  message: string,
};
