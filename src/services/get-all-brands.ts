const getAllBrands = async (): Promise<Response> => {
  const resBrand = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  );
  const brands = await resBrand.json();
  return brands;
};

export { getAllBrands };
