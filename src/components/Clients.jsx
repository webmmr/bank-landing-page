import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 md:min-w-[192px] min-w-[250px] my-5 md:my-0 ${styles.flexCenter}`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
