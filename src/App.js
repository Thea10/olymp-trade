 import "./App.scss";
import { Nav } from "./components/Nav";
import "./components/_components.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="App  ">
      <Nav />

      <div className="body p-2 p-md-0 mx-2 mt-5 mx-lg-3 mx-xl-5 py-5">
        <Header />

        <Section />
      </div>
      <Footer />
    </div>
  );
}

export default App;
