import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const billing = () => (
  <section id="product" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        provident unde, tempora magnam temporibus maxime eveniet odit optio!
        Nobis, amet!
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default billing;
