import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/nav/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';
import Trending from './pages/Trending';
import Movie from './pages/Movie';
import Tv from './pages/Tv';
import Person from "./pages/Person";
import TopRated from "./pages/TopRated";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movie/top_rated" element={<TopRated />} />
            <Route path="/tv/top_rated" element={<TopRated />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/tv/:id" element={<Tv />} />
            <Route path="/person/:id" element={<Person />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
