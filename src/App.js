import './App.css';
import React from "react";
import AppHeader from "./components/AppHeader";
import Main from "./components/pages/main";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <Main/>
        </div>
    );
}

export default App;
