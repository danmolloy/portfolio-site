import React from "react";
import { Element } from "react-scroll";


type IndexSectionProps = {
  children: React.ReactNode
  title: string
  name?: string
}

export default function IndexDiv(props: IndexSectionProps) {
  const { children, title, name } = props;

  return (
    <Element name={name ? name : title.toLowerCase()} className="pt-16 p-12 text-sm flex flex-col items-center w-screen lg:w-2/3 ">
      <div className="flex flex-row w-full">
      <h1 className="font-5xl my-8 font-display">{title}</h1>
      </div>
      {children}
    </Element>
  )
}