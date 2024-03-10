import IEEEScraper from "./src/senginta/ieee/ieee.js";

const IEEE = new IEEEScraper("CNN");
IEEE.postResult("https://ieeexplore.ieee.org/rest/search").then((resp) =>
  console.log(resp)
);
