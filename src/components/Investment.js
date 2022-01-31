import React from 'react';
import Form from './Form'
import NavBar from './NavBar';
import Results from './Results'
import CTA from './CTA'
import Footer from './Footer'
import Header from './Header'

export default function Investment() {
  return <div className="bg-neutral-50">
      <NavBar/>
      <Header/>
      <Form/>
      <Results />
      <CTA/>
      <Footer/>
  </div>;
}
