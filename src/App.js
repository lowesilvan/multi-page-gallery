import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import AllCollections from "./components/mainContent/AllCollections";
import Home from "./components/mainContent/Home";
import Dashboard from "./components/mainContent/Dashboard";
import AddNewCollection from "./components/mainContent/AddNewCollection";
import MyCollections from "./components/mainContent/MyCollections";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/all-collections" element={<AllCollections />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route element={<MyCollections />} />
          <Route path="/dashboard/my-collections" element={<MyCollections />} />
          <Route
            path="/dashboard/add-new-collection"
            element={<AddNewCollection />}
          /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
