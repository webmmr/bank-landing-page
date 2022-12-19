import styles from "./style";

import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  HeroSection,
} from "../src/components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* Hero Section */}
    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <HeroSection />
      </div>
    </div>
    {/* Main Components */}
    <div className={`${styles.flexStart} bg-primary ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        {/* Stats  */}
        <Stats />
        {/* Business  */}
        <Business />
        {/* Billing  */}
        <Billing />
        {/* CardDeal  */}
        <CardDeal />
        {/* Testimonial  */}
        <Testimonials />
        {/* Clients */}
        <Clients />
        {/* CTA  */}
        <CTA />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
