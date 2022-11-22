import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HeaderCont, FooterCont } from "./components";

import {
  TagSearch,
  ThemaSearch,
  MainConts,
  ArtistSearch,
  ArtistView,
  ThemaSearchDetail,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
        <Route path="/tagSearch" element={<TagSearch />}></Route>
        <Route path="/themaSearch" element={<ThemaSearch />}></Route>
        <Route
          path="/themaSearchDetail"
          element={<ThemaSearchDetail />}
        ></Route>
        <Route path="/artistSearch" element={<ArtistSearch />}></Route>
        <Route path="/artistView" element={<ArtistView />}></Route>
      </Routes>
      <FooterCont />
    </BrowserRouter>
  );
}

export default App;
