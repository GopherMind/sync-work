import advantages from "./advantagesArray"
import Carousel from "../../hoc/Carousel"
import Slide from "./Slide"

const Advantages = () => (
  <section className="w-full overflow-hidden font-sans">
    <Carousel autoPlay autoSlideInterval={4500}>
      {advantages.map((adv) => (
        <Slide key={adv.id} item={adv} />
      ))}
    </Carousel>
  </section>
)

export default Advantages