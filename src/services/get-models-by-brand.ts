import { ParallelumApi } from "@api/parallelum-api";
import {
  SearchModelByBrandParams,
  SearchModelByBrandResponse,
} from "@app-types/search-types";

const getModelsByBrand = async ({
  brandId,
}: SearchModelByBrandParams): Promise<SearchModelByBrandResponse> => {
  try {
    if (!brandId) throw new Error("Falta campos no filtro!");

    const result = await ParallelumApi.getModelsByBrand({
      brandId,
    });
    const { modelos: models } = result.data;

    if (!models?.length) throw new Error("Dados não encontrados");

    return { models };
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getModelsByBrand };
