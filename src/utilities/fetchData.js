import axios from "axios";
import defaultPovertyQueryParams from "../constants/defaultPovertyQueryParams";

let fetchCountryStats = async (countryCode) => {
  let { data: interpolated } = await axios({
    method: "GET",
    url: `
    https://api.worldbank.org/pip/v1/pip?country=${countryCode}${defaultPovertyQueryParams}`,
    headers: {
      Accept: "*/*",
    },
  });
  let { data: noninterpolated } = await axios({
    method: "GET",
    url: `
    https://api.worldbank.org/pip/v1/pip?country=${countryCode}&povline=1.9&fill_gaps=false&welfare_type=all&reporting_level=national&format=json&ppp_version=2017&year=2019`,
    headers: {
      Accept: "*/*",
    },
  });
  return resolveToInterpolatedData(interpolated, noninterpolated);
};

let resolveToInterpolatedData = async (interpolated, noninterpolated) => {
  let noninterpolatedCountries = new Set(
    noninterpolated.map((item) => item.country_code)
  );

  return interpolated.map((iCountry) => {
    if (
      iCountry.is_interpolated == true &&
      noninterpolatedCountries.has(iCountry.country_code)
    ) {
      return noninterpolated.filter(
        (nCountry) => nCountry.country_code == iCountry.country_code
      )[0];
    } else {
      return iCountry;
    }
  });
};
export default fetchCountryStats;
