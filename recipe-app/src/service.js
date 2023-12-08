import axios from "axios";

async function getFoodQuote() {
  try {
    const response = await axios({
      method: "get",
      url: "https://api.kanye.rest",
    });

    return response;
  } catch (error) {
    console.warn("Problem quote zu laden");
    throw error;
  }
}

export default { getFoodQuote };
