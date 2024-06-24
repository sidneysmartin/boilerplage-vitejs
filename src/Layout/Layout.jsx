import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Container } from "../components";

function Layout() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-start w-full h-[90vh]">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
