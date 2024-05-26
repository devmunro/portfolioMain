import DarkModeToggle from "./darkmode";

export function Nav() {
  return (
    <div className="text-blue-900 dark:text-white font-semibold uppercase">
      <nav className="flex justify-between p-6 pb-4  ">
        <h1 className="text-lg capitalize">David Munro</h1>
        <ul className="flex space-x-8 text-center">
          <li className="self-center">
            <DarkModeToggle />
          </li>

          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
