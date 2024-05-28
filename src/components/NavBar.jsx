import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    // <div className="navbar bg-componentcol sm:w-svh pr-0">
    //   <div className="flex-1">
    //     <div className="w-10 rounded-full dropdown-end">
    //       <img
    //         src="/src/assets/Capture2.PNG"
    //         className="w-24 mask mask-squircle "
    //       />
    //     </div>
    //     <Link to="/" className="btn btn-ghost text-xl font-main">
    //       Hippolyte Weber
    //     </Link>
    //   </div>
    //   <div className="flex-none">
    //     <ul className=" menu-horizontal">
    //       <li>
    //         <Link to="/">Accueil</Link>
    //       </li>
    //       <li>
    //         <Link to="/Contact">Contact</Link>
    //       </li>
    //       <li>
    //         <Link to="/Projets">Projets</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className="w-auto bg-greenovbtn md:flex md:items-center md:justify-between px-2">
      <div className="rounded-full flex justify-center sm:justify-start">
        <img
          src="/src/assets/Capture2.PNG"
          className="w-24 mask mask-squircle "
        />
      </div>
      <div className="flex flex-row justify-center md:flex md:justify-end md:menu-horizontal">
        <ul className="flex ">
          <li className="px-2">
            <Link to="/Projets">Projets</Link>
          </li>
          <li className="px-2">
            <Link to="/">Accueil</Link>
          </li>
          <li className="px-2">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
