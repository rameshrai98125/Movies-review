export { removeTv } from "../reducers/tvSlice";
import axios from "../../utils/axios";
import { loadTv } from "../reducers/tvSlice";

export const asynloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchprovider = await axios.get(`/tv/${id}/watch/providers`);
    const translations = await axios.get(`/tv/${id}/translations`);

    console.log(videos);

    let AllData = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      translation: translations.data.translations.map((n) => n.english_name),
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Teaser"),
      watchprovider: watchprovider.data.results.IN,
    };

    dispatch(loadTv(AllData));
    console.log(AllData);
  } catch (error) {
    console.log("load error", error);
  }
};
