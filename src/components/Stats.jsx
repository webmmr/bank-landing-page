import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`flex-row flex-wrap sm:mb-20 mb-6 ${styles.flexCenter}`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-center items-center md:flex-row flex-col m-3`}
      >
        <h4 className="font-poppins font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] text-gradient uppercase md:ml-3 ml-0 md:text-left text-center">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
