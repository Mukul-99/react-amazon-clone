import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'cloud_url',
});

export default instance;


