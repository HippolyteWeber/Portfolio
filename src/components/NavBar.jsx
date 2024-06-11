import { Link } from "react-router-dom";
import Profil from "../../public/static/Images/Capture2.PNG";
export default function NavBar() {
  return (
    <div className="w-auto bg-componentcol md:flex md:items-center md:justify-between px-2 text-neutral-50">
      <div className="rounded-full flex justify-center sm:justify-start">
        <img src={Profil} className="w-24 mask mask-squircle " />
      </div>
      <div className="flex flex-row justify-center md:flex md:justify-end md:menu-horizontal">
        <ul className="flex ">
          <li className="px-2 font-display max-w-sm leading-tight">
            <Link
              to="/Projets"
              className="link-underline link-underline-black text-black"
            >
              Projets
            </Link>
          </li>
          <li className="px-2 font-display max-w-sm leading-tight">
            <Link
              to="/"
              className="link-underline link-underline-black text-black"
            >
              Accueil
            </Link>
          </li>
          <li className="px-2 font-display max-w-sm leading-tight">
            <Link
              to="/Contact"
              className="link-underline link-underline-black text-black"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
