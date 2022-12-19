import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w=[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="flex flex-col md:flex-row sm:mb-16 mb-6 relative z-[1] w-full justify-between items-center">
      <h2 className={`${styles.heading2}`}>
        What people are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          provident unde, tempora magnam temporibus maxime eveniet odit optio!
          Nobis, amet!
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-between justify-center w-full feedback-container z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
