import ExperienceItem from "./ExperienceItem";
import GlassesIcon from "../icons/GlassesIcon";
import { RevealOnScroll } from "../RevealOnScroll";

const EXPERIENCE = [
  {
    date: "May 2024",
    title: "Frontend Developer ",
    company: "McSystems",
    description:
      "Designed and developed a cross platform desktop app for a bank using Tauri, TypeScript, and React used daily by employees to manage critical financial operations. Led the creation of secure, role based authentication with branch specific access control, safeguarding sensitive data and tailoring user experience. Launched an AI-powered chatbot and ticketing system, cutting IT response time by 33% and boosting user satisfaction. Automated the check-printing process, improving efficiency by 30% and reducing paper usage. Additionally, mentored junior developers, driving frontend excellence and aligning the team with business goals.",
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
          <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            <GlassesIcon />
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
