import Typewriter from "typewriter-effect";

export function Header() {
  return (
    <div>
      <div className="flex justify-between w-full h-full relative ">
        <img className="w-1/4 z-20 dark:hidden" src="../../public/display2.png" alt="Light Mode Display" />
        <img className="hidden w-1/4 z-20 dark:block" src="../../public/display.png" alt="Dark Mode Display" />
        <div className="w-1/2 self-center z-20 p-4 text-center">
          <h1 className="text-lg font-bold dark:text-indigo-300">I am a ...</h1>
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
        <img className="w-1/4 z-20 dark:hidden" src="../../public/desk2.png" />
        <img className="w-1/4 z-20 dark:block hidden" src="../../public/desk.png" />

        <div className="z-10 w-24 absolute flex animate-cloudAnimate m-0">
          <img src="../../public/plane.svg" />

          <p className="self-center border-2 border-black text-primary font-extrabold px-2">WELCOME</p>
        </div>
      </div>
    </div>
  );
}
