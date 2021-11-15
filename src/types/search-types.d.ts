export interface SearchFilter {
  brand: string | undefined;
  model: string | undefined;
  year: string | undefined;
}

// Search Model

export interface SearchModelByBrandParams {
  brandId: string | string[] | undefined;
}

export interface SearchModelByBrandServerResponse {
  data: SearchModelByBrandData;
}

export interface SearchModelByBrandData {
  modelos: string[];
  marcas: string[];
}

export interface SearchModelByBrandResponse {
  models: string[];
}

// Search Years

export interface SearchYearsByBrandAndModelParams {
  brandId: string | string[] | undefined;
  modelId: string | string[] | undefined;
}

export interface SearchYearsByBrandAndModelServerResponse {
  data: number[];
}

export interface SearchYearsByBrandAndModelResponse {
  years: number[];
}

// Search Price Types

export interface SearchPriceByFilterParams {
  brandId: string | string[] | undefined;
  modelId: string | string[] | undefined;
  yearId: string | string[] | undefined;
}

export interface SearchPriceByFilterData {
  Modelo: string;
  Marca: string;
  AnoModelo: number;
  Valor: string;
}

export interface SearchPriceByFilterServerResponse {
  data: SearchPriceByFilterData;
}

export interface SearchPriceByFilterResponse {
  brand: string;
  model: string;
  year: number;
  price: string;
}

// Search Brands

export interface SearchAllBrandsServerResponse {
  data: object[];
}

export interface SearchAllBrandResponse {
  brands: object[];
}
