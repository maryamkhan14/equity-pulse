import "./extractRelevantStats";
import extractRelevantStats from "./extractRelevantStats";
const extractRelevantDetails = (dataset) => {
  return {
    ...extractRelevantStats(dataset),
    country_code: dataset.country_code,
    country_name: dataset.country_name,
  };
};

export default extractRelevantDetails;
