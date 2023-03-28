import axios from "axios";
import defaultPovertyQueryParams from "../utilities/defaultPovertyQueryParams";
let fetchCountryStats = async (countryCode) => {
  let singleCountryStats = await axios({
    method: "GET",
    url: `
    https://api.worldbank.org/pip/v1/pip?country=${countryCode}${defaultPovertyQueryParams}`,
    headers: {
      Accept: "*/*",
    },
  });
  return singleCountryStats;
};

export default fetchCountryStats;
