import "./App.css";
import Aboutpanel from "./Components/Aboutpanel";
import Contact from "./Components/Contact";
import Firstpanel from "./Components/Firstpanel";
import Navbar from "./Components/Navbar";
import Tecnologie from "./Components/Tecnologie";
import Workspanel from "./Components/Workspanel";

function App() {
  return (
    <>
      <Navbar />
      <Firstpanel />
      <Aboutpanel />
      <Tecnologie />
      <Workspanel />
      <Contact />
    </>
  );
}

export default App;
