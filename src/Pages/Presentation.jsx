import { Link } from "react-router-dom";
import resume from "../assets/CV_Hippolyte_Weber.pdf";

export default function Presentation() {
  return (
    <>
      <div className="flex flex-col items-center p-4 md:flex-row md:justify-between md:items-center ">
        <div className="p-4 md:px-16">
          <img
            src="/static/images/profil.jpeg"
            className="w-40 rounded-lg flex-none pb-8 md:w-80"
          />
        </div>
        <div className="flex-1 md:flex-none ">
          <h1 className="text-2xl font-bold text-textColor pt-4  font-display max-w-sm text-2xl font-bold leading-tight ">
            <span className="link-underline link-underline-black text-black">
              Qui suis-je ?
            </span>
          </h1>
          <p className="py-8 text-neutral-50 font-semibold text-pretty text-left md:text-left md:max-w-80">
            {" "}
            Ancien chasseur Alpin du 7e BCA après 5 ans à servir dans les Alpes,
            j'ai décidé de franchir le cap et de suivre un rêve d'enfant en
            devenant développeur Web, je recherche actuellement une entreprise
            pour mon alternance développeur web qui débutera à la rentrée de
            septembre 2024
          </p>
        </div>
        <div className="hidden md:flex md:flex-2 md:p-32">
          <a
            href={resume}
            download="cv_hippolyte_WEBER"
            className="hover:pause animate-bounce animate-infinite animate-duration-[8000ms] animate-delay-1000 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-bckcl bg-greenbtn  px-6 font-medium text-bckcl transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
      <div className="md:hidden flex justify-center m-1 text-bckcl">
        <a
          href={resume}
          download="cv_hippolyte_WEBER"
          className="hover:pause animate-bounce animate-infinite animate-duration-[8000ms] animate-delay-1000 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-bckcl bg-greenbtn  px-6 font-medium text-bckcl transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
        >
          Télécharger mon CV
        </a>
      </div>
      <div className="md:flex md:flex-row-reverse md:justify-end md:m-0 my-10">
        <hr className="md:w-6/12 w-screen border-1 border-y-neutral-200" />
      </div>
      <div className="flex p-4 flex-col items-center md:flex-row-reverse md:justify-between  md:items-center ">
        <div className="p-4 md:px-16">
          <img
            src="/static/images/logo.svg"
            className="w-40 rounded-lg flex-none pb-8 md:w-80"
          />
        </div>
        <div className="flex-1 md:flex-none">
          <h1 className="text-2xl font-bold text-textColor pt-4">
            Mon objectif
          </h1>
          <p className="py-8 text-neutral-50 text-pretty  md:max-w-80 font-semibold">
            {" "}
            Passionné par le web, j'ai rejoint la Wild Code School en février
            2024 pour une reconversion en tant que développeur web JavaScript
            full stack et je cherche actuellement une entreprise pour ma rentrée
            en alternance de septembre 2024 afin de passer mon master c'est
            pourquoi je vous propose de Découvrir mes projets créatifs et
            innovants pour voir mon parcours !
          </p>
        </div>
        <div className="hidden md:flex md:flex-2 md:p-32">
          <Link
            to="/Projets"
            className="hover:pause animate-bounce animate-infinite animate-duration-[8000ms] animate-delay-1000 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-bckcl bg-greenbtn  px-6 font-medium text-bckcl transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
          >
            Découvrez mes projets
          </Link>
        </div>
      </div>
      <div className="md:hidden flex justify-center m-1">
        <Link
          to="/Projets"
          className="hover:pause animate-bounce animate-infinite animate-duration-[8000ms] animate-delay-1000 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-bckcl bg-greenbtn  px-6 font-medium text-bckcl transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
        >
          Découvrez mes projets
        </Link>
      </div>
      <div className="md:flex md:flex-row-reverse">
        <hr className="md:w-6/12 border-1 border-y-neutral-200 md:mt-0 mt-10 w-screen" />
      </div>
    </>
  );
}
