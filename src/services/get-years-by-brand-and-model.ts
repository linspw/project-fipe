const getYearsByBrandAndModel = async (
  brandId: string,
  modelId: string
): Promise<Response> => {
  const resBrand = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos`
  );
  const anos = await resBrand.json();
  return anos;
};

export { getYearsByBrandAndModel };
