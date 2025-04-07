import JobList from "./JobsList";
import FeaturedEmp from './FeaturedEmp'
import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FeaturedJob = () => {
  useEffect(() => {
    // Register modules (important in Swiper v11+)
    Swiper.use([Navigation, Autoplay]);

    // Initialize Swiper
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 5,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    return () => {
      swiper.destroy(); // clean up on unmount
    };
  }, []);

  return (
     <section className="featured-job">
    <div className="swiper mySwiper swiper-initialized swiper-horizontal">
      <h2>Featured Jobs</h2>
      <div
        className="swiper-wrapper"
        id="swiper-wrapper-2e6b81b555d43cd6"
        aria-live="off"
      >
        <JobList />
      </div>

      <div
        className="swiper-button-next"
        tabIndex={0}
        role="button"
        aria-label="Next slide"
        aria-controls="swiper-wrapper-2e6b81b555d43cd6"
      ></div>
      <div
        className="swiper-button-prev"
        tabIndex={0}
        role="button"
        aria-label="Previous slide"
        aria-controls="swiper-wrapper-2e6b81b555d43cd6"
      ></div>
      <span
        className="swiper-notification sf-hidden"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
      <FeaturedEmp />
    </div>
  </section>
  );
};

export default FeaturedJob;
