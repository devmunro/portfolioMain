import { Cards } from "./components/cards";
import { Header } from "./components/header";
import { Nav } from "./components/nav";

function App() {
  return (
    <div className="dark:bg-black bg-[#E8E1D6]">
      <div id="header" className="h-screen">
        {" "}
        <Nav />
        <Header />
      </div>

      <div id="cards" className="h-screen">
        <Cards />
      </div>
    </div>
  );
}

export default App;
