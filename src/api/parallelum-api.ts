import Axios from "axios";
import {
  SearchPriceByFilterParams,
  SearchPriceByFilterServerResponse,
  SearchYearsByBrandAndModelParams,
  SearchYearsByBrandAndModelServerResponse,
  SearchModelByBrandParams,
  SearchModelByBrandServerResponse,
  SearchAllBrandsServerResponse,
} from "@app-types/search-types";

const httpClient = Axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/",
  timeout: 10000,
});

const getAllBrands = () =>
  httpClient.get<void, SearchAllBrandsServerResponse>(`carros/marcas`);

const getPriceByFilter = ({
  brandId,
  modelId,
  yearId,
}: SearchPriceByFilterParams) =>
  httpClient.get<SearchPriceByFilterParams, SearchPriceByFilterServerResponse>(
    `carros/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`
  );

const getYearsByBrandAndModel = ({
  brandId,
  modelId,
}: SearchYearsByBrandAndModelParams) =>
  httpClient.get<
    SearchYearsByBrandAndModelParams,
    SearchYearsByBrandAndModelServerResponse
  >(`carros/marcas/${brandId}/modelos/${modelId}/anos`);

const getModelsByBrand = ({ brandId }: SearchModelByBrandParams) =>
  httpClient.get<SearchModelByBrandParams, SearchModelByBrandServerResponse>(
    `carros/marcas/${brandId}/modelos`
  );

const ParallelumApi = {
  getAllBrands,
  getModelsByBrand,
  getPriceByFilter,
  getYearsByBrandAndModel,
};

export { ParallelumApi };
