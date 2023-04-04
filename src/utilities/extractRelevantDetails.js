import calculateRelevantStats from "./calculateRelevantStats";
const extractRelevantDetails = (dataset) => {
  let deciles = [
    dataset.decile1,
    dataset.decile2,
    dataset.decile3,
    dataset.decile4,
    dataset.decile5,
    dataset.decile6,
    dataset.decile7,
    dataset.decile8,
    dataset.decile9,
    dataset.decile10,
  ];
  return {
    ...calculateRelevantStats(dataset),
    country_code: dataset.country_code,
    country_name: dataset.country_name,
    headcount: dataset.headcount,
    deciles: deciles,
  };
};

export default extractRelevantDetails;
