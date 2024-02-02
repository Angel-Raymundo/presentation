import Photo from "./../components/Photo";
import Button from "./../components/Button";
import Hamburger from "./../components/Hamburger";
import SocialMedia from "../components/SocialMedia";

const Contact = () => {
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

        <div className="flex justify-between w-full  h-[80vh]">
          <div className="relative w-10/12 pt-[6vh] pl-5 overflow-y-scroll no-scrollbar">
            <div className="absolute bg-black h-1 w-40 mt-[100px] rounded"></div>
            <p className="text-6xl font-sans font-bold leading-[6.75rem]">
              Contact
            </p>

            <p className="mt-[8vh] text-xl font-mono font-medium">
              If you're interested in my work and want me to collaborate with
              you on a project, contact me and we can discuss it further. It
              would be a pleasure for me to collaborate with you
            </p>

            <div className="flex flex-row mt-[11vh] justify-around">
              <Button
                type="button"
                style="flex flex-col justify-center items-center bg-white h-28 w-60 border border-2 border-black py-8 px-9 text-black font-medium font-bold transition-all duration-700 ease-in-out hover:bg-[#E5E5E5] hover:text-black"
                click={() => {
                  const email = "jimray214@gmail.com";
                  window.location.href = `mailto:${email}`;
                }}
              >
                <Photo
                  image="mail"
                  style="h-14 w-14 mb-2 transition-all duration-700 ease-in-out"
                  alt="Mail"
                />
                jimray214@gmail.com
              </Button>
              <Button
                type="button"
                style="flex flex-col justify-center items-center bg-white h-28 w-60 border border-2 border-black py-8 px-9 text-black font-medium font-bold transition-all duration-700 ease-in-out hover:bg-[#E5E5E5] hover:text-black"
                click={() => {}}
              >
                <Photo
                  image="phone"
                  style="h-14 w-14 mb-2 transition-all duration-700 ease-in-out"
                  alt="Phone"
                />
                +52 55 8419 7257
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
export default Contact;
