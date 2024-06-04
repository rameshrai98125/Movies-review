export { removemovie } from "../reducers/movieSlic";
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlic";

export const asynloadmovie = (id) => async (dispatch, getstate) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchprovider = await axios.get(`/movie/${id}/watch/providers`);
    const translations = await axios.get(`/movie/${id}/translations`);

    let AllData = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      translation: translations.data.translations.map((n) => n.english_name),
      similar: similar.data,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchprovider: watchprovider.data.results.IN,
    };
    dispatch(loadmovie(AllData));
    console.log(AllData);
  } catch (error) {
    console.log("load error", error);
  }
};
