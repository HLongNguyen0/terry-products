import Contact from "./Contact/Contact";
import ContactLogotype from "./ContactLogotype/ContactLogotype";
import Examples from "./Examples/Examples";
import Feedback from "./Feedback/Feedback";
import Footer from "./Footer/Footer";
import FreeSamples from "./FreeSamples/FreeSamples";
import Guarantee from "./Guarantee/Guarantee";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Merchandise from "./Merchandise/Merchandise";
import Partners from "./Partners/Partners";
import Production from "./Production/Production";
import {
  desktopContact1,
  desktopContact2,
  desktopContact3,
  desktopContact4,
  mobileContact1,
  mobileContact2,
  mobileContact3,
  mobileContact4,
} from "../img";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Examples />
      <FreeSamples />
      <Merchandise />
      <ContactLogotype />
      <Guarantee />
      <Contact
        desktopImg={[desktopContact1, desktopContact2]}
        mobileImg={[mobileContact1, mobileContact2]}
      />
      <Feedback />
      <Partners />
      <Production />
      <Contact
        desktopImg={[desktopContact3, desktopContact4]}
        mobileImg={[mobileContact3, mobileContact4]}
      />
      <Footer />
    </>
  );
}

export default App;
