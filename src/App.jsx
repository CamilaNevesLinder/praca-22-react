import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

function App() {
  return (
    <BrowserRouter>
      <NavBar />;
      <Hero />
      <Intro />
    </BrowserRouter>
  );
}

export default App;
