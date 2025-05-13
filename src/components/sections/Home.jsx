import { RevealOnScroll } from "../RevealOnScroll";
import  Badge  from "../sections/Badge";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent leading-normal">
            Hi, I'm Cesar Aguilar
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto [&>strong]:text-blue-200 [&>strong]:font-semibold">
          3+ years of experience. <strong> Software Engineer specialized in crafting unique and high-quality Software.</strong> 
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <Badge>
            <a
              href="#contact"
              className="text-blue-500  duration-200 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] "
            >
              
              Contact Me
              
            </a>
            </Badge>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
