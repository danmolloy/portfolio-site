import React from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-between">
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}