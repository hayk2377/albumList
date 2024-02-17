import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchAlbumsStart,
  fetchAlbumsSuccess,
  fetchAlbumsFailure,
  createAlbumSuccess,
  createAlbumFailure,
  updateAlbumSuccess,
  updateAlbumFailure,
  deleteAlbumSuccess,
  deleteAlbumFailure,
  createAlbumStart,
  updateAlbumStart,
  deleteAlbumStart,
} from "../slices/albumSlice";
import {
  fetchAlbums,
  createAlbum as createAlbumApi,
  updateAlbum as updateAlbumApi,
  deleteAlbum as deleteAlbumApi,
} from "../services/api";

// export function* fetchAlbumsSaga() {
//   try {
//     yield put(fetchAlbumsStart());
//     const response = yield call(fetchAlbums);
//     yield put(fetchAlbumsSuccess(response.data));
//   } catch (error) {
//     console.error("Error fetching albums:", error);
//     yield put(fetchAlbumsFailure(error.toString()));
//   }
// }
export function* fetchAlbumsSaga() {
  try {
    console.log("Fetching albums...");
    const response = yield call(fetchAlbums);
    console.log("i put it there");
    yield put(fetchAlbumsSuccess(response.data));
  } catch (error) {
    console.error("Error fetching albums:", error);
    yield put(fetchAlbumsFailure(error.toString()));
  }
}

export function* createAlbumSaga(action) {
  try {
    const response = yield call(createAlbumApi, action.payload);
    yield put(createAlbumSuccess(response.data));
  } catch (error) {
    console.error("Error creating album:", error);
    yield put(createAlbumFailure(error.toString()));
  }
}

export function* updateAlbumSaga(action) {
  try {
    const { id, values } = action.payload; // Destructure id and data
    console.log("albumId", id);
    const response = yield call(updateAlbumApi, id, values);
    yield put(updateAlbumSuccess(response.data));
  } catch (error) {
    console.error("Error updating album:", error);
    yield put(updateAlbumFailure(error.toString()));
  }
}
export function* deleteAlbumSaga(action) {
  try {
    const albumId = action.payload; // Extract id from payload
    const response = yield call(deleteAlbumApi, albumId);
    yield put(deleteAlbumSuccess(response.data));
  } catch (error) {
    console.error("Error deleting album:", error);
    yield put(deleteAlbumFailure(error.toString()));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchAlbumsStart.type, fetchAlbumsSaga);
  yield takeLatest(createAlbumStart.type, createAlbumSaga);
  yield takeLatest(updateAlbumStart.type, updateAlbumSaga);
  yield takeLatest(deleteAlbumStart.type, deleteAlbumSaga);
}
