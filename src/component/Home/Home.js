import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import Feachers from "./Feachers";
import CheakOut from "./CheakOut";
import Customer from "./Customer";
import SignUp from "./SignUp";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Apps from "./Apps";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Feachers />
      <CheakOut />
      <Customer />
      <SignUp />
      <Apps />
      <Footer />
    </>
  );
}
