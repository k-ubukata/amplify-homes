import "./App.css";
import { NavBar, NewsItemCollection } from "./ui-components";

function App() {
  return (
    <div className="App" style={{width: "100%", padding: '20px'}}>
      <NavBar width={"100%"} />
      <NewsItemCollection width={"100%"} />
    </div>
  );
}

export default App;