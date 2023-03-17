import Servicesheader from "../../components/Servicescomponents/Servicesheader";
import Servicesbox from "../../components/Servicescomponents/Servicesbox/Servicesbox";
import { servicesboximg1 } from "../../images";
import { servicesboximg2 } from "../../images";
import { servicesboximg3 } from "../../images";
function Services() {
  return (
    <div>
      <Servicesheader />
      <Servicesbox
        img={servicesboximg1}
        img2={servicesboximg2}
        img3={servicesboximg3}
        tittle2="Content Creation
        "
        tittle1="Graphic Design
        "
        tittle="Web Design"
        price="From 99$
          "
        text="Tell your visitor how your service can improve their life. Connect with the problem that they’re trying to solve and address any objections you think they might have.

 

          What is the biggest benefit your customer will get from this? Keep your target audience in mind."
      />
    </div>
  );
}

export default Services;
