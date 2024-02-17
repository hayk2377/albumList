import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albums: [],
  loading: false,
  error: null,
  shouldLoad: true,
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    fetchAlbumsStart(state) {
      state.loading = true;
      state.error = null;
      state.shouldLoad = false;
    },
    fetchAlbumsSuccess(state, action) {
      state.loading = false;
      state.albums = action.payload;
    },
    fetchAlbumsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createAlbumStart(state) {
      state.loading = true;
      state.error = null;
    },
    createAlbumSuccess(state, action) {
      state.loading = false;
      state.albums.push(action.payload);
      state.shouldLoad = true;
    },
    createAlbumFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateAlbumStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateAlbumSuccess(state, action) {
      state.loading = false;
      const updatedalbum = action.payload;
      state.albums = state.albums.map((album) =>
        album.id === updatedalbum.id ? updatedalbum : album
      );
      state.shouldLoad = true;
    },
    updateAlbumFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteAlbumStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteAlbumSuccess(state, action) {
      state.loading = false;
      const deletedalbumId = action.payload;
      state.albums = state.albums.filter(
        (album) => album.id !== deletedalbumId
      );
      state.shouldLoad = true;
    },
    deleteAlbumFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAlbumsStart,
  fetchAlbumsSuccess,
  fetchAlbumsFailure,
  createAlbumStart,
  createAlbumSuccess,
  createAlbumFailure,
  updateAlbumStart,
  updateAlbumSuccess,
  updateAlbumFailure,
  deleteAlbumStart,
  deleteAlbumSuccess,
  deleteAlbumFailure,
} = albumsSlice.actions;

export const selectAllalbums = (state) => state.albums.albums;
export const selectLoading = (state) => state.albums.loading;
export const selectError = (state) => state.albums.error;
export const shouldLoad = (state) => state.albums.shouldLoad;

export default albumsSlice.reducer;
export const rootReducer = {
  albums: albumsSlice.reducer,
};
