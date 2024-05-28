import data from "../../data.json";
import Project from "./Project";
export default function ProjectList() {
  return (
    <div id="Projects" className="flex justify-center gap-40  m-10">
      {data.data.map((workshop) => (
        <Project key={workshop.workshopId} workshop={workshop} />
      ))}
    </div>
  );
}
