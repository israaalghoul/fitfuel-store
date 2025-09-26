import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Container } from "../../../../shared/components/container";
import { Btn } from "../../../../shared/components/btn";
import { Swiper, SwiperSlide } from "swiper/react";
import { appRoutes } from "../../../../routes";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";

export function HeroSection() {

  return (
    <div className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <img
            className="hero-slide-img"
            src="/images/hero-img.jpg"
            alt="hero image1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="hero-slide-img"
            src="/images/hero-img2.jpg"
            alt="hero image2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="hero-slide-img"
            src="/images/hero-img3.jpg"
            alt="hero image3"
          />
        </SwiperSlide>
      </Swiper>

  <div className="hero-overlay" aria-hidden="true" />

      <Container>
        <h1 className="hero-section-title">Welcome to Fitfuel products</h1>
        <p className="hero-section-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          aliquam perferendis aperiam omnis. Esse vitae repudiandae magni eos
          est placeat quo aspernatur similique deleniti sint. Praesentium
          quaerat inventore temporibus rem?
        </p>
        <Btn classNameBtn={"btn"} btnName="Shopping now" route={appRoutes.products.new} />
      </Container>
    </div>
  );
}
