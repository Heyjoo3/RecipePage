import axios from "axios";

async function getFoodQuote() {
  console.log("service");
  try {
    const response = await axios({
      method: "get",
      url: "https://api.kanye.rest",
    });
    console.log(response.data.quote);
    return response;
  } catch (error) {
    console.warn("Problem quote zu laden");
    throw error;
  }
}

export default { getFoodQuote };
