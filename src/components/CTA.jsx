import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    id="cta"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex flex-1 flex-col">
      <h2 className={`${styles.heading2}`}>Let's try our service now</h2>
      <p className={`${styles.paragraph} md:max-w-[470px]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        provident unde.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-0`}>
      <Button />
    </div>
  </section>
);

export default CTA;
