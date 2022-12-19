import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "../components";

const HeroSection = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% </span>
          Discount For <span className="text-white">1 Month </span>
          Account
        </p>
      </div>
      <div className="flex flex-col ss:flex-row ss:justify-between text-center ss:text-left items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation </span>
        </h1>
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ss:hidden block">
          Payment Method
        </h1>
        <div className="ss:flex ss:block hidden md:mr-4 mr-0 text-white">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ss:block hidden">
        Payment Method
      </h1>
      <p
        className={`${styles.paragraph} max-w-[470x] mt-5 text-center ss:text-left`}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        commodi doloremque sequi nam minima. Officiis architecto sit fugiat ad
        iusto?
      </p>
      <div className="ss:flex custom-center justify-center mt-8 ss:hidden block md:mr-4 mr-0 text-white">
        <GetStarted />
      </div>
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="Banner Image"
        className="w-[100%] h-[100%] relative z-5"
      />
      <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-1 w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}></div>
  </section>
);

export default HeroSection;
