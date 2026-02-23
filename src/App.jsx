import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <NavBar />;
      <Hero />
    </BrowserRouter>
  );
}

export default App;
