import axios from 'axios'

export const fetchAllPapers = () =>
  axios
    .get("http://localhost:4005/app/paper/get", {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);