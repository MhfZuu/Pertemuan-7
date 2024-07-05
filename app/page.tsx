import Navbar from "../Components/reusable-components/Navbar";
import Hero from "../Components/reusable-components/Hero";
import Cardsec1 from "../Components/reusable-components/Cardsec1";
import Cardsec2 from "../Components/reusable-components/Cardsec2";
import Cardsec3 from "../Components/reusable-components/Cardsec3";
import Section4 from "../Components/reusable-components/Section4";
import Section6 from "../Components/reusable-components/Section6";
import Section7 from "../Components/reusable-components/Section7";
import Footer from "../Components/reusable-components/Footer";

export default function Home() {
  return (
    <body>
      <Navbar />
      <Hero />
      <Cardsec1 />
      <Cardsec2 />
      <Cardsec3 />
      <Section4 />
      <Section6 />
      <Section7 />
      <Footer />
    </body>
  );
}
