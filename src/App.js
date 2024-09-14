import React from "react";
import ReactDOM from "react-dom/client";
import List from "./components/List/List";
import SearchBar from "./components/SearchBar/SearchBar";
import './App.css';

const App = () => {
  return (
    <div className="app-layout">
        <SearchBar/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);