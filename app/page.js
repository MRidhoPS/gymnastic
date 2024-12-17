import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import bgImage from './assets/bg.png'
import Equipment from "./components/Equipment/Equipment";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from "./components/Tab/TabComp";
import Testimonials from "./components/Testimonial/Testimonial";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import Sertification from "./components/Sertification/Sertification";

const bgStyle = {
  backgroundImage: `url(${bgImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
}

const BannerData = {
  image: Img1,
  title: "Why you need to join Zumba?",
  subtitle:
    "Joining Zumba is a fun and effective way to improve your overall health.Combining high- energy dance movements with upbeat music, Zumba provides a full - body workout that boosts cardiovascular endurance, burns calories, and strengthens muscles—all while feeling like a dance party.It’s a great stress reliever, as the lively rhythms help release endorphins, improving your mood and mental well - being.Suitable for all fitness levels, Zumba enhances flexibility, coordination, and stamina, making it a perfect choice for anyone looking to stay active, healthy, and happy in an enjoyable and social environment.",
  link: "#",
};
const Banner2Data = {
  image: Img2,
  title: "Why you need to join Aerobic?",
  subtitle:
    "Joining aerobic exercise is a great way to improve your overall health and fitness. Aerobics focuses on rhythmic, repetitive movements that strengthen your heart, lungs, and muscles, boosting cardiovascular endurance and promoting better oxygen circulation throughout your body. Regular aerobic workouts help burn calories, support weight loss, and tone muscles while reducing the risk of chronic conditions like heart disease, diabetes, and high blood pressure. Beyond physical health, aerobics also enhances mental well-being by reducing stress, improving mood, and boosting energy levels, making it a fun and effective way to stay active and healthy.",
  link: "#",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipment />
      <Banner {...BannerData} />
      <TabComp />
      <Banner {...Banner2Data} />
      <Sertification />
      <Testimonials />
      <Footer />
    </div>
  );
}