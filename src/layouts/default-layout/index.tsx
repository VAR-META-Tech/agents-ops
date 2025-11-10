import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky-header">
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
