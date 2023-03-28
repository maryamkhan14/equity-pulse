const extractRelevantStats = (dataset) => {
  let {
    decile1: decileOneShare,
    decile10: decileTenShare,
    median,
    mean,
    reporting_pop: population,
  } = dataset;
  return {
    median: getMedian(median),
    decileOneAvg: calculateDecileAvg(decileOneShare, population, mean).toFixed(
      2
    ),
    decileTenAvg: calculateDecileAvg(decileTenShare, population, mean).toFixed(
      2
    ),
    estTotal: calculateEstTotal(population, mean),
  };
};
const getMedian = (median) => {
  return median == undefined ? "No median recorded." : median.toFixed(2);
};
const calculateEstTotal = (population, mean) => {
  return new Intl.NumberFormat().format((population * mean).toFixed(2));
};
const calculateDecileAvg = (share, population, mean) => {
  return (population * mean * share) / (0.1 * population);
};

export default extractRelevantStats;
