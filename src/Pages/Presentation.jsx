import { Link } from "react-router-dom";
export default function Presentation() {
  return (
    <>
      <div className="flex p-4 md:justify-start md:items-center">
        <div className="p-4 md:px-16">
          <img
            src="/src/assets/profil.jpeg"
            className="w-40 rounded-lg flex-none pb-8 md:w-80"
          />
        </div>
        <div className="flex-1 md:flex-none">
          <h1 className="text-2xl font-bold text-neutral-950 pt-4">
            Qui suis-je ?
          </h1>
          <p className="py-8 text-neutral-950 text-pretty text-left md:text-left md:max-w-80">
            {" "}
            Ancien chasseur Alpin du 7e BCA après 5 ans à servir dans les Alpes,
            j'ai décidé de franchir le cap et de suivre un rêve d'enfant en
            devenant développeur Web
          </p>
        </div>
        <div className="hidden md:flex md:flex-2 md:p-32">
          <Link to="/Projets" className="btn">
            Télécharger mon CV
          </Link>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse md:justify-end">
        <hr className="w-6/12 border-1 border-y-neutral-200" />
      </div>
      {/* <div className="flex p-4 justify-end flex-row-reverse md:justify-start md:flex-row-reverse md:items-center">
        <div className="p-4 md:px-16">
          <img
            src="/src/assets/logo.svg"
            className="w-40 rounded-lg flex-none pb-8 md:w-80"
          />
        </div>
        <div className="flex-2 md:flex-none">
          <h1 className="text-2xl font-bold text-neutral-950 pt-4 md:text-right">
            Ma reconversion
          </h1>
          <p className="py-8 text-neutral-950 text-pretty text-right md:max-w-80">
            {" "}
            Passionné par le web, j'ai rejoint la Wild Code School pour une
            reconversion en tant que développeur JavaScript full stack.
            Découvrez mes projets créatifs et innovants pour voir mon parcours !
          </p>
        </div>
        <div className="hidden md:flex md:flex-2 md:p-32">
          <Link to="/Projets" className="btn">
            Découvrez mes projets
          </Link>
        </div>
      </div> */}
      {/* <div className="flex justify-center m-4">
        <Link to="/Projets" className="btn">
          Découvrez mes projets
        </Link>
      </div> */}
      <div className="flex p-4 flex-row-reverse md:justify-start md:items-center ">
        <div className="p-4 md:px-16">
          <img
            src="/src/assets/logo.svg"
            className="w-40 rounded-lg flex-none pb-8 md:w-80"
          />
          <Link to="/Projets" className="md:hidden btn">
            Découvrez mes projets
          </Link>
          <Link to="/Projets" className="md:hidden btn">
            Télécharger mon CV
          </Link>
        </div>
        <div className="flex-1 md:flex-none">
          <h1 className="text-2xl font-bold text-neutral-950 pt-4 text-right">
            Objectif
          </h1>
          <p className="py-8 text-neutral-950 text-pretty text-right md:max-w-80">
            {" "}
            Passionné par le web, j'ai rejoint la Wild Code School en février
            2024 pour une reconversion en tant que développeur web JavaScript
            full stack et je cherche actuellement une entreprie pour ma rentrée
            en alternance de septembre 2024 afin de passer mon master c'est
            pourquoi je vous propose de Découvrir mes projets créatifs et
            innovants pour voir mon parcours !
          </p>
        </div>
        <div className="hidden md:flex md:flex-2 md:p-32">
          <Link to="/Projets" className="btn">
            Télécharger mon CV
          </Link>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse md:justify-end">
        <hr className="w-6/12 border-1 border-y-neutral-200" />
      </div>
    </>
  );
}
