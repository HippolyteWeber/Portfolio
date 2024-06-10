import data from "../../data.json";
import Project from "./Project";
export default function ProjectList() {
  return (
    <div
      id="Projects"
      className="md:flex md:justify-center md:flex-row p-16 flex-col md:gap-24"
    >
      {data.data.map((workshop) => (
        <Project key={workshop.workshopId} workshop={workshop} />
      ))}
    </div>
  );
}
