import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AlbumList from "./components/AlbumList";
import CreateAlbum from "./components/CreateAlbum";
import EditAlbum from "./components/EditAlbum";
import Hero from "./components/Hero";
import Footer from "./components/footer";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Hero />
        <Routes>
          <Route exact path="/" element={<AlbumList />} />
          <Route exact path="/create" element={<CreateAlbum />} />
          <Route exact path="/edit/:id" element={<EditAlbum />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};
export default App;
