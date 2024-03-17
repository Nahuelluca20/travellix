import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <header className="bg-green-pallete-300 text-hunt-grey-200">
      <nav className="mx-auto py-8 px-5 max-w-[1280px] w-full flex justify-between">
        <Link to={"/"} className="text-xl font-bold">
          Travellix
        </Link>
        <ul className="flex items-center gap-10 font-semibold text-base">
          <li>
            <Link to={"/home"}>Vendidos</Link>
          </li>
          <li>
            <Link to={"/"}>Mis Viajes</Link>
          </li>
          <li>
            <Link to={"Agregar"}>Agregar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
