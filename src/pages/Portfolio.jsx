import Photo from "../components/Photo";
import Button from "../components/Button";
import Hamburger from "../components/Hamburger";
import SocialMedia from "../components/SocialMedia";

const Portfolio = () => {
  return (
    <div className="flex h-screen justify-start items-center">
      <div className="w-1/3 hidden lg:block">
        <Photo image="about" style="h-screen w-full" alt="About" />
      </div>

      <div className="h-screen w-screen flex flex-col justify-between items-start overflow-hidden lg:w-2/3">
        <div className="flex justify-between items-center w-full h-20 border-b-2 border-black">
          <p className="ml-3.5 font-serif text-4xl">Portfolio</p>

          <div className="flex justify-center items-center w-20 h-full border-l-2 border-black ">
            <Hamburger />
          </div>
        </div>

        <div className="flex justify-between w-full h-[80vh]">
          <div className="relative w-10/12 pt-[6vh] pl-5 overflow-y-scroll no-scrollbar">
            <div className="absolute bg-black h-1 w-40 mt-[100px] rounded"></div>
            <p className="text-6xl font-sans font-bold leading-[6.75rem]">
              Portfolio
            </p>

            <p className="mt-[8vh] text-xl font-mono font-medium">
              I have completed several projects using languages such as C++,
              Java, JavaScript, Python, web pages using HTML, CSS, JavaScript,
              PHP, and technologies like React and Vue. My GitHub repository has
              been neglected for various reasons, but I will be updating it with
              exciting projects for you to observe my work.
            </p>

            <div className="flex flex-row w-8/12 mt-[11vh]">
              <Button
                type="button"
                style="flex flex-row justify-center items-center mb-9 h-14 bg-black border border-2 border-black py-8 px-9 text-white font-medium font-bold transition-all duration-700 ease-in-out hover:bg-white hover:text-black"
                click={() => {
                  window.open("https://github.com/Angel-Raymundo", "_blank");
                }}
              >
                CHECK OUT MY REPO
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-evenly items-center w-20 h-full border-l-2 border-black">
            <SocialMedia
              facebook="https://www.facebook.com/profile.php?id=100008402314337"
              instagram="https://www.instagram.com/ang_raymundo/"
              github="https://github.com/Angel-Raymundo"
              linkedin="https://www.linkedin.com/in/raymundojimenez/"
            />
            <div className="flex flex-col-reverse justify-between items-center w-5 h-48">
              <p className="-rotate-90 w-max mb-16 font-sans font-medium text-[#595959]">
                FOLLOW ME
              </p>
              <div className="bg-[#595959] h-14 w-0.5 rounded"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full h-16 border-t-2 border-black">
          <div className="flex pl-5 justify-center items-center ">
            <p>Thank you for visiting my portfolio website! :)</p>
          </div>
          <div className="w-20 border-l-2 border-black"></div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
