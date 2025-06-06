import { RevealOnScroll } from "../RevealOnScroll";
import AboutmeIcon from "../icons/AboutmeIcon";
export const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          <AboutmeIcon />
          About Me
        </h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto mb-8 rounded-2xl  border  md:border-white/20 border-blue-500/30 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition backdrop-blur-md px-5 py-8">
            <p className="text-gray-200 text-lg leading-relaxed">
              Hey there! I’m a passionate{" "}
              <span className="text-blue-400 font-semibold">
                Software Engineer
              </span>{" "}
              with a solid foundation in{" "}
              <span className="text-blue-300">HTML</span>,{" "}
              <span className="text-blue-300">CSS</span>,{" "}
              <span className="text-blue-300">JavaScript</span>,{" "}
              <span className="text-blue-300">TypeScript</span>, and{" "}
              <span className="text-blue-300">React</span>. Over the years, I’ve
              had the chance to work with teams at different companies, where I
              built real-world web solutions and tackled practical challenges
              head-on. One of my recent roles involved developing custom tools
              for internal management and performance tracking systems, which
              helped me sharpen my skills and stay up to date with the latest
              trends in web development.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mt-4">
              I enjoy creating clean, scalable, and user-focused applications
              that make a real impact. Whether it's improving workflows or
              building intuitive interfaces, I’m all about crafting solutions
              that help businesses grow and succeed.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
