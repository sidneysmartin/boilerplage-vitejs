import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Home, Services, About, Contact, NotFound } from "./pages";
import { Container } from "./components";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default AppRoutes;
