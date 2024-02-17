import axios from "axios";

const BASE_URL = "http://localhost:8000";

const api = axios.create({ baseURL: BASE_URL });

export const fetchAlbums = () => api.get("/albums");

export const createAlbum = (song) => api.post("/album", song);

export const updateAlbum = (id, song) => api.put(`/album/${id}`, song);

export const deleteAlbum = (id) => api.delete(`/album/${id}`);

export default api;
