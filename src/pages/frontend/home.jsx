import Header from "../../components/frontend/header";
import Footer from "../../components/frontend/footer";
import HeroSection from "../../components/herosection";
import WhyUsSection from "../../components/whyussection";
import AboutSection from "../../components/aboutsection";
import CountSection from "../../components/countsection";
import ServicesSection from "../../servicessection";
import AppointmentSection from "../../components/appointmentsection";
import DepartmentSection from "../../components/departmentssection";
import DoctorSection from "../../components/doctorsection";
import FAQS from "../../components/faqs";
import TestimonialSection from "../../components/testimonialsection";
import GalerySection from "../../components/galery";

let Home = ()=>{
    return(
        <>
        <Header/>
        <HeroSection/>
        <WhyUsSection/>
        <AboutSection/>
        <CountSection/>
        <ServicesSection/>
        <AppointmentSection/>
        <DepartmentSection/>
        <DoctorSection/>
        <FAQS/>
        <TestimonialSection/>
        <GalerySection/>
        <Footer/>
        </>
    )
}
export default Home;