export { removeperson } from "../reducers/personSlice";
import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";

export const asynloadperson = (id) => async (dispatch, getstate) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    let AllData = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };
    dispatch(loadperson(AllData));
    console.log(AllData);
  } catch (error) {
    console.log("load error", error);
  }
};
