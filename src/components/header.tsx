import Typewriter from "typewriter-effect";

export function Header() {
  return (
    <div className=" flex h-full ">
      <div className="flex justify-between w-full">
        <div className="w-1/3 self-center">
          <img
            className="w-full dark:hidden"
            src="../../public/display2.png"
            alt="Light Mode Display"
          />
          <img
            className="w-full hidden dark:block"
            src="../../public/display.png"
            alt="Dark Mode Display"
          />
        </div>
        <div className="w-1/2 self-center text-center px-12 space-y-8">
          <h1 className="text-2xl font-bold dark:text-indigo-300 uppercase">
            HI! I'm David
          </h1>
          <h2 className="text-lg font-bold dark:text-indigo-300">I am a ...</h2>
          <div className="text-7xl text-indigo-900 dark:text-white">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "Software Engineer",
                  "UI/UX Designer",
                  "ML Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="lg:w-1/3  self-center">
          <img
            className="w-full dark:hidden hidden lg:block"
            src="../../public/desk2.png"
            alt="Light Mode Desk"
          />
          <img
            className="w-full hidden dark:block"
            src="../../public/desk.png"
            alt="Dark Mode Desk"
          />
        </div>
      </div>
    </div>
  );
}
