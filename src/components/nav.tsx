import DarkModeToggle from "./darkmode";

export function Nav() {
  return (
    <div className="text-blue-900 dark:text-white font-semibold uppercase ">
      <nav className="flex justify-end p-6 pb-4  ">
        <ul className="flex space-x-8 text-center">
          <li className="self-center">
            <DarkModeToggle />
          </li>

          <li> <a href="#projects" >   Projects </a></li>
          <li> <a href="#skills" >   Skills </a></li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
