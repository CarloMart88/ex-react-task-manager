import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
/**Aggiungere una barra di navigazione con NavLink, per permettere all'utente di spostarsi tra le pagine. */
function DefaultLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default DefaultLayout;
