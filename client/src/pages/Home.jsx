import React from "react";
import Banner from "../components/home/banner";
import Hero from "../components/home/Hero";
import FeaturedSection from "../components/home/featuredSection";
import Testimonial from "../components/home/Testimonial";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";

const Home = () => {
    return(
        <div>
            <Banner/>
            <Hero/>
            <FeaturedSection/>
            <Testimonial/>
            <CallToAction/>
            <Footer />
        </div>
    )
}
export default Home 