import { ParallelumApi } from "@api/parallelum-api";
import {
  SearchYearsByBrandAndModelParams,
  SearchYearsByBrandAndModelResponse,
} from "@app-types/search-types";

const getYearsByBrandAndModel = async ({
  brandId,
  modelId,
}: SearchYearsByBrandAndModelParams): Promise<SearchYearsByBrandAndModelResponse> => {
  try {
    if (!(brandId && modelId)) throw new Error("Falta campos no filtro!");

    const result = await ParallelumApi.getYearsByBrandAndModel({
      brandId,
      modelId,
    });
    const years = result.data;

    return { years };
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getYearsByBrandAndModel };
