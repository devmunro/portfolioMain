export function Cards() {
  return (
    <div className="w-full dark-bg-black h-full" id="projects">
      <div className="flex">
        <h2 className="uppercase text-6xl py-24 text-center dark:bg-black dark:text-white">
          Main projects
        </h2>

        <div className="w-1/3">
          <img
            className="w-full object-cover"
            src="../../public/example.png"
            alt="Example 1"
          />
        </div>
        <div className="w-1/3">
          <img
            className="w-full  object-cover"
            src="../../public/example2.png"
            alt="Example 2"
          />
        </div>
        <div className="w-1/3">
          <img
            className="w-full  object-cover"
            src="../../public/example3.png"
            alt="Example 3"
          />
        </div>
      </div>
    </div>
  );
}
