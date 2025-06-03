import { RevealOnScroll } from "../RevealOnScroll";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Cesar Aguilar
          </h1>
          <p className="text-blue-400 font-bold text-xl mb-8 max-w-lg mx-auto">
            3+ years of experience.
            <strong className="text-white font-light">
              {" "}
              Software Engineer specialized in crafting unique and high-quality
              Software.
            </strong>
          </p>

          {/* Responsive button layout */}
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:justify-center md:space-x-4 md:space-y-0">
            <a
              href="#projects"
              className="flex items-center justify-center gap-x-1 border md:border-white/20 border-blue-500/30  rounded px-6 py-4 text-white shadow-md hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-x-1 border md:border-white/20 border-blue-500/30 rounded px-6 py-4 text-white  shadow-md hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/andre-aguilar-ca/"
              className="flex items-center justify-center gap-x-1 border md:border-white/20 border-blue-500/30 rounded px-6 py-4 text-white shadow-md hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all duration-300"
            >
              Linkedin
              <LinkedinIcon />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/cesarandre940"
              className="flex items-center justify-center gap-x-1 border md:border-white/20 border-blue-500/30 rounded px-6 py-4 text-white shadow-md hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all duration-300"
            >
              Github
              <GithubIcon />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
