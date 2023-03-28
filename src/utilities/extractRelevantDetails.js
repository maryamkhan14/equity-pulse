import calculateRelevantStats from "./calculateRelevantStats";
const extractRelevantDetails = (dataset) => {
  return {
    ...calculateRelevantStats(dataset),
    country_code: dataset.country_code,
    country_name: dataset.country_name,
  };
};

export default extractRelevantDetails;
