const rp = require("request-promise");
const $ = require("cheerio");

const fetchHtml = async (url) => {
  try {
    const html = await rp(url);
    let obj = {};
    for (let i = 0; i < $(html).length; i++) {
      if (
        $(html)[i].name &&
        $(html)[i].name !== undefined &&
        $(html)[i].name in obj
      ) {
        obj[$(html)[i].name] += 1;
      } else {
        obj[$(html)[i].name] = 1;
      }
    }
    delete obj.undefined;
    return obj;
  } catch (error) {
    return {
      responseCode: 404,
      responseMessage: "Failure",
      response: {
        error: {
          message: error.message,
        },
      },
    };
  }
};

module.exports = {
  fetchHtml,
};
