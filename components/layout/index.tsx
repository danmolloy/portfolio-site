import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "../menu";

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [showMenu, setShowMenu] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  
  return (
    <div data-testid="layout" className="dark:bg-zinc-900 dark:text-zinc-300 w-full min-h-screen bg-white flex flex-col items-center justify-between font-sans">
      <Header showHeader={showHeader} setShowHeader={(i) => setShowHeader(i)} setShowMenu={() => setShowMenu(!showMenu)} showMenu={showMenu} />
      <Menu showMenu={showMenu} setShowHeader={i => setShowHeader(i)} setShowMenu={i => setShowMenu(i)} />
      <main className={showMenu ? "transition duration-500 blur-sm flex flex-col items-center" : "transition duration-500 flex flex-col items-center"}>
      {children}
      </main>
      <Footer />
    </div>
  )
}