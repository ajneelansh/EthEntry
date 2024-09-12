import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import InputFields1 from "./Components/InputFields1";
import './index.css';

export default function App() {
    return (
        <Routes>
            <Route path="/EthEntry" element={<Home />} />
            <Route path="/ExpertConsultation" element={<InputFields1 />} />
        </Routes>
    );
}

