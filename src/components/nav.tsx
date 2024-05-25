export function Nav() {
  return (
    <div className="text-primary font-semibold uppercase">
    <nav className="flex justify-between p-6 pb-4 mt-1 ">
        <h1 className="text-lg capitalize">David Munro</h1>
      <ul className="flex space-x-8 text-black">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li> 
        <li>Contact</li>
      </ul>
    </nav>
    <hr className="bg-primary text-primary h-1"/>
    </div>
  );
}
