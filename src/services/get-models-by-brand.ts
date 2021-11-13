const getModelsByBrand = async (brandId: string): Promise<Response> => {
  const resBrand = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`
  );
  const { modelos } = await resBrand.json();
  return modelos;
};

export { getModelsByBrand };
