export type FormField = {
  codigo: string;
  nome: string;
};

export type FormState = {
  year: FormField | null;
  brand: FormField | null;
  model: FormField | null;
  yearList: FormField[];
  brandList: FormField[];
  modelList: FormField[];
};
