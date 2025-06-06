import { RevealOnScroll } from "../RevealOnScroll";
import CodeIcon from "../icons/CodeIcon";
import LinkButtons from "../LinkButtons";
import mockupImg from "../../assets/mockup2.png";
import GymTimer from "../../assets/GymTimer.png";
import ChatBotImg from "../../assets/ChatBotImg.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            <CodeIcon />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border   md:border-white/20 border-blue-500/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">⌛Gym Timer</h3>
              <img
                className="rounded-xl mb-2"
                src={GymTimer}
                alt="GymTimer Mockup"
              ></img>
              <p className="text-gray-400 mb-4">
                A simple, customizable timer for workouts, perfect for HIIT,
                circuits, and rest intervals—with clear visual and audio cues to
                keep you on track.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Astro", "Vanilla JS", "TailwindCSS"].map((tech, key) => (
                  <LinkButtons key={key}>{tech}</LinkButtons>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  role="link"
                  href="https://github.com/cesarandre940/gym-timer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border   md:border-white/20 border-blue-500/30 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">🔱 Olympuz</h3>
              <img
                className="rounded-xl mb-2"
                src={mockupImg}
                alt="Olympuz Mockup"
              ></img>

              <p className="text-gray-400 mb-4">
                A web app that empowers users with science-backed training
                guidance and biomechanics insights, featuring a dashboard to
                track goals and progress for a more effective fitness journey
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "JavaScript", "TypScript", "TailwindCSS"].map(
                  (tech, key) => (
                    <LinkButtons key={key}>{tech}</LinkButtons>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  role="link"
                  href="https://github.com/cesarandre940/olympuz-next"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl  border  md:border-white/20 border-blue-500/30 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">🤖 Support ChatBot</h3>
              <img
                className="rounded-xl mb-2"
                src={ChatBotImg}
                alt="Olympuz Mockup"
              ></img>
              <p className="text-gray-400 mb-4">
                Smart Team Chatbot designed to help teams streamline task
                management, schedule meetings, automate daily stand-ups, and
                monitor project progress for a tech company.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React"].map((tech, key) => (
                  <LinkButtons key={key}>{tech}</LinkButtons>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                {/* <a
                  target="_blank"
                  role="link"
                  href="https://creator.voiceflow.com/dashboard?import=682398623e4da73e3a3f2f49"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
