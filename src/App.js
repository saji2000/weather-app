import logo from "./logo.svg";
import "./App.css";
import "./components/search/search";
import Search from "./components/search/search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
