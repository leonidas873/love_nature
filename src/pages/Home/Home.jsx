import Hero from "../../components/HomeComponents/Hero/Hero";
import OurServices from "../../components/HomeComponents/OurServices/OurServices";
import { service1 } from "../../images";
import Qoutes from "../../components/HomeComponents/Qoutes/Qoutes";
import Aboutus from "../../components/HomeComponents/Aboutus/Aboutus";
import Lastsection from "../../components/HomeComponents/Lastsection/Lastsection";

function Home() {
  return (
    <div>
      <Hero text="we all love" spantext="nature" />
      <OurServices
        tittlecontent="Content Creation
      "
        tittlegraphic="Graphic Design
      "
        tittleweb="Web Design"
        img={service1}
        text="Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.

"
      />
      <Qoutes />
      <Aboutus />
      <Lastsection />
    </div>
  );
}

export default Home;
