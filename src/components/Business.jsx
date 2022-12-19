import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, i }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      i !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-50% object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins text-[18px] leading-[23px] text-white font-semibold mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        You do the business, <br className="sm:block hidden" /> we'll handle the
        money
      </h2>
      <p className={`${styles.paragraph} md:max-w-[470px]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        provident unde, tempora magnam temporibus maxime eveniet odit optio!
        Nobis, amet!
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, i) => (
        <FeatureCard key={feature.id} {...feature} i={i} />
      ))}
    </div>
  </section>
);

export default Business;
