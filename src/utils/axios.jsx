import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGFkM2IzODM1OTY2YjA2ZjRmODZmMDBkMDNmMmM5OCIsInN1YiI6IjYzZmQ4NjgxOTY1M2Y2MDBkYjI3ZDM1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6NcfK8r7l0VNsTdNFaON1wjBAj2FR7rZPH894y3h1TU",
  },
});

export default instance;
