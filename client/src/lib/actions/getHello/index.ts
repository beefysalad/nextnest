const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getApiResponse = async () => {
  try {
    if (!API_URL) {
      throw new Error("API_URL is not defined");
    }
    const response = await fetch(API_URL, {
      method: "GET",
    });
    const data = await response.text();

    return data;
  } catch (error) {
    console.error(error);
  }
};
