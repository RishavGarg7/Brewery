import axios from "axios";
export async function postReview({ brewId, review }) {
  try {
    const response = await axios.post("http://localhost:8000/api-v1/review/", {
      brewId: brewId,
      review: review,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getReview(id) {
  try {
    const response = await axios.get(
      `http://localhost:8000/api-v1/review/get-review/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
