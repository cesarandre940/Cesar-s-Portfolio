import ExperienceItem from "./ExperienceItem";
import GlassesIcon from "../icons/GlassesIcon";
import { RevealOnScroll } from "../RevealOnScroll";

const EXPERIENCE = [
  {
    date: "May 2024",
    title: "Frontend Developer ",
    company: "McSystems",
    description:
      "Built a financial core system from scratch, automating key processes and enhancing efficiency. Developed an AI-driven chatbot, improving IT support response time by 33%. Automated check printing, reducing processing time by 30%. Implemented secure role-based authentication to protect sensitive financial data.",
  },
  {
    date: "October 2023",
    title: "Fullstack Developer",
    company: "Olympuz",
    description:
      "Developed Olympuz, a fitness-focused web application designed to provide accessible, science-backed training guidance, helping users understand exercise biomechanics and train effectively. Created an intuitive, interactive dashboard that allows users to track their goals, monitor progress, and stay motivated throughout their fitness journey.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-gray-100"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2  className="flex items-center justify-center gap-2 text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        <GlassesIcon/>
          Experience
        </h2>
        <ol className="relative mx-12">
          {EXPERIENCE.map((experience, index) => (
            <li key={index}>
              <ExperienceItem {...experience} />
            </li>
          ))}
        </ol>
      </div>
      </RevealOnScroll>
    </section>
  );
};
