import './App.scss';
import React from "react";
import AppHeader from "./components/AppHeader";
import Main from "./components/Pages/Main";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <Main/>
        </div>
    );
}

export default App;
