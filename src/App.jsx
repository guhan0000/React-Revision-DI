import { Route, Routes } from "react-router-dom";
import NavBar from "./Routing/NavBar";
import Home from "./Routing/pages/Home";
import About from "./Routing/pages/About";
import Contact from "./Routing/pages/Contact";
import Movie from "./Routing/pages/Movie";
import Student from "./Routing/pages/Student";
import Team from "./Routing/pages/Team";
import Leadership from "./Routing/pages/Leadership";
import Locations from "./Routing/pages/Locations";
import ServiceContacts from "./Routing/pages/ServiceContacts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />}></Route>
          <Route path="leadership" element={<Leadership />}></Route>
        </Route>
        {/*Nested Routes*/}
        <Route path="/contact" element={<Contact />}>
          <Route index element={<ServiceContacts />} />
          <Route path="locations" element={<Locations />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/movie/:id" element={<Movie />} /> {/*url parameters*/}
        <Route path="/student/:id/:name" element={<Student />} />{" "}
        {/*multiple parameters*/}
      </Routes>
    </>
  );
}

export default App;
