import React from "react";

import Header from "./components/Header";
import AnimRouter from "./components/AnimRouter";

import { BrowserRouter } from "react-router-dom";

import { motion } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <AnimRouter />
    </BrowserRouter>
  );
};

export default App;
