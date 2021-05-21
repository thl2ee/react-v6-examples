import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="adopt-me-logo">Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Aiyaaa!" animal="Rabbit" breed="Thailand" />
      <Pet name="Tawaan" animal="Rabbit" breed="Thailand" />
      <Pet name="Miiim" animal="Cat" breed="Thailand" /> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
