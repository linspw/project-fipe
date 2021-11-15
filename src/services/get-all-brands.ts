import { ParallelumApi } from "@api/parallelum-api";
import { SearchAllBrandResponse } from "@app-types/search-types";

const getAllBrands = async (): Promise<SearchAllBrandResponse> => {
  try {
    const result = await ParallelumApi.getAllBrands();
    const brands = result.data;

    return { brands };
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getAllBrands };
