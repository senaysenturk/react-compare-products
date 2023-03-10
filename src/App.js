import style from "./App.module.scss";
import Home from "./containers/home/Home";

function App() {
  return (
    <div className={`${style["app"]}`}>
      <Home />
    </div>
  );
}

export default App;
