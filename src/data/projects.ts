export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "PlanetCareer",
    techs: ["ReactJS (NextJS)", "Typescript", "TailwindCSS", "Supabase"],
    link: "https://github.com/kelsiesmurphy/planetcareer",
  },
  {
    title: "Pickup",
    techs: ["ReactJS (NextJS)", "TypeScript", "TailwindCSS", "Java (Spring Boot)"],
    link: "https://github.com/kelsiesmurphy/pickup",
  },
  {
    title: "Surveyflow",
    techs: ["ReactJS", "TypeScript", "TailwindCSS", "Supabase"],
    link: "https://github.com/kelsiesmurphy/surveyflow",
  },
];

export default projects;
