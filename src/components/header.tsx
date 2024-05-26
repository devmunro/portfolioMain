import Typewriter from "typewriter-effect";

export function Header() {
  return (
    <div>
      <div className="flex justify-between w-full h-full relative ">
        <img className="w-1/5 self-end z-20 ml-4" src="../../public/me6.png" />
        <div className="w-1/3 self-center z-20 p-4 text-center">
          <h1 className="text-lg font-bold">I am a ...</h1>
          <div className="text-6xl text-primary ">
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
        <img className="w-1/3 z-20" src="../../public/desk3.png" />
        <div className="z-10 w-24 absolute flex animate-cloudAnimate m-0">
          <img src="../../public/plane.svg" />

          <p className="self-center border-2 border-primary text-primary font-extrabold px-2">WELCOME</p>
        </div>
      </div>
    </div>
  );
}
