import axios from "axios";

export const getLocation = async () => {
  try {
    const baseGeo = axios.create({
      baseURL: "http://ip-api.com/json",
    });
    const res = await baseGeo.get("");
    if (res.data.status == "fail") {
      return "Localização não encontrada";
    }
    const { country, countryCode, region, regionName, city, query } = res.data;
    return `${country}/${countryCode} - ${regionName}/${region} - ${city}`;
  } catch (error) {
    return "Localização não encontrada";
  }
};
