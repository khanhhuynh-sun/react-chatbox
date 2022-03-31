import "./App.scss";
import SideLeft from "./components/SideLeft/SideLeft";
import MainChat from "./components/MainChat/MainChat";
import SideRight from "./components/SideRight/SideRight";

function App() {
  return (
    <main className="container">
      <SideLeft />
      <MainChat />
      <SideRight />
    </main>
  );
}

export default App;
