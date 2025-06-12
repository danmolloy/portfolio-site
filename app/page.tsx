import ContactSection from "./contact"
import Hero from "./hero";
import ProjectSection from "./[project]/projectSection";


export default async function Page() {
  return (
    <div data-testid="index-section" className="w-screen flex flex-col items-center text-sm">
    <Hero />
     <ProjectSection />

    <section className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3">
      <ContactSection />
    </section>
  </div>
  )
}