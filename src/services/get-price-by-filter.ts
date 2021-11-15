import { ParallelumApi } from "@/api/parallelum-api";
import {
  SearchPriceByFilterParams,
  SearchPriceByFilterResponse,
} from "@app-types/search-types";

const getPriceByFilter = async ({
  brandId,
  modelId,
  yearId,
}: SearchPriceByFilterParams): Promise<SearchPriceByFilterResponse> => {
  try {
    if (!(brandId && modelId && yearId))
      throw new Error("Falta campos no filtro!");

    const result = await ParallelumApi.getPriceByFilter({
      brandId,
      modelId,
      yearId,
    });
    const {
      Marca: brand,
      Modelo: model,
      AnoModelo: year,
      Valor: price,
    } = result.data;

    if (!(brand && model && year && price))
      throw new Error("Dados não encontrados");

    return { brand, model, year, price };
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getPriceByFilter };
