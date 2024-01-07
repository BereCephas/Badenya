// import kid from "../assets/Jean_baptiste_de_la_Salle.jpeg";
import Image from "next/image";
const About = () => {
  return (
    <div className=" bg-blansale  py-10 grid  lg:gap-y-12 text-mate ">
      <div className="bg-blansale  w-full h-full  z-20   flex justify-center items-center  ">
        <div className="md:px-10  grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 sm:gap-y-4 grid-rows-2 h-full w-full ">
          <div className="  h-full w-full  flex  items-center justify-center md:justify-start">
            <Image
              src={require("../assets/Jean_baptiste_de_la_Salle.jpeg")}
              alt=""
              className="h-full object-cover md:h-4/5 max-h-96 w-4/6 rounded-3xl"
            />
          </div>

          <div className="h-full flex justify-center items-center  px-5 md:px-0">
            <div className=" md:h-full w-full text-center  md:text-left flex  flex-col items-center justify-center   ">
              <h1 className="w-full text-black md:text-4xl font-extrabold  text-3xl pb-5">
                Lorem ipsum dolor sit.
              </h1>
              <p className="font-light  text-sm md:text-md lg:text-lg 2xl:text-3xl ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quas modi, possimus voluptas architecto perferendis ullam
                blanditiis beatae delectus commodi. Doloribus assumenda enim
                placeat inventore mollitia, nesciunt ratione molestias
                soluta?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Itaque quas modi, possimus voluptas architecto perferendis ullam
                blanditiis beatae delectus commodi. Doloribus assumenda enim
                placeat inventore mollitia, nesciunt ratione molestias soluta?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blansale  w-full h-full  z-20   flex justify-center items-center  ">
        <div className="md:px-10  grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 sm:gap-y-4 grid-rows-2 h-full w-full ">
          <div className="h-full flex justify-center items-center  px-5 md:px-0 ">
            <div className=" md:h-full w-full text-center md:text-left flex  flex-col items-center justify-center   ">
              <h1 className="w-full text-black md:text-4xl font-extrabold  text-3xl pb-5 ">
                Lorem ipsum dolor sit.
              </h1>
              <p className="font-light  text-sm md:text-md lg:text-lg 2xl:text-3xl ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quas modi, possimus voluptas architecto perferendis ullam
                blanditiis beatae delectus commodi. Doloribus assumenda enim
                placeat inventore mollitia, nesciunt ratione molestias
                soluta?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Itaque quas modi, possimus voluptas architecto perferendis ullam
                blanditiis beatae delectus commodi. Doloribus assumenda enim
                placeat inventore mollitia, nesciunt ratione molestias soluta?
              </p>
            </div>
          </div>

          <div className="  h-full  flex  justify-center md:justify-end items-center">
            <Image
              src={require("../assets/Jean_baptiste_de_la_Salle.jpeg")}
              alt=""
              className="h-full object-cover md:h-4/5 xl:h-[40vh] max-h-96 w-4/6 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
