import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "6c3199ca88b24782b75db28e7dedf934";

export default {
  search: function(topic, startYear, endYear) {
    return axios.get(BASEURL + APIKEY + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101");
  }
};