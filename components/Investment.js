import React from "react";
import Form from "./Form";
import NavBar from "./NavBar";
import Results from "./Results";
import CTA from "./CTA";
import Footer from "./Footer";
import Header from "./Header";

export default function Investment() {
  return (
    <div className="bg-neutral-50 ">
      <NavBar />
      <Header />
      <div className="2xl:bg-gray-200">
        <div className="xl:bg-gray-200 2xl:w-7/12 2xl:mx-auto">
          <div className="md:flex xl:mx-24 ">
            <Form />
            <Results />
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
