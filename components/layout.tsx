import React from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="dark:bg-zinc-900 dark:text-zinc-300 w-full min-h-screen bg-white flex flex-col justify-between">
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}