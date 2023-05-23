import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import {  servimg1, servimg2, servimg3, servimg4, twitter, linkedin, facebook, instagram } from "./assets";
import { Link } from "react-router-dom";

const Services = () => (
  <div className="w-full overflow-hidden" style={{backgroundColor:"#000000"}}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} mt-10`} style={{backgroundColor:"#000000"}}>
    <h1 className="text-center font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          Our  <span style={{color:"#C88BC4"}}>Services</span>{" "}
          </h1>
    </div>
    <div className="w-full flex justify-center items-center my-5">
    <p className={`${styles.paragraph} max-w-[800px]  text-center`}>
    At Cinosol, we offer a wide range of innovative services designed to meet the unique needs of our clients. Our services are tailored to deliver measurable results that help drive business success.        </p>
    </div>
    <div className={`${styles.flexStart} items-center my-10`} style={{backgroundColor:"#000000"}} >
      <img src={servimg1} width={600}  alt="servimg1"  className="relative z-[5]" />
    </div>

    <div className={`${styles.flexStart} items-center my-10`} style={{backgroundColor:"#000000"}} >
      <img src={servimg2} width={600}  alt="servimg1"  className="relative z-[5]" />
    </div>

    <div className={`${styles.flexStart} items-center my-10`} style={{backgroundColor:"#000000"}} >
      <img src={servimg3} width={600}  alt="servimg1"  className="relative z-[5]" />
    </div>

    <div className={`${styles.flexStart} items-center my-10`} style={{backgroundColor:"#000000"}} >
      <img src={servimg4} width={600}  alt="servimg1"  className="relative z-[5]" />
    </div>

    <div className={`${styles.flexStart} items-center w-full`}  style={{backgroundColor:'#1F1F1F', height:100, marginTop:100}}>
    <Link to={"https://www.facebook.com/cincosol2023"}>
    <img src={facebook} width={40} alt="facebook"  className="relative z-[5] mx-5" />
    </Link>
    <Link to={"https://www.instagram.com/cincosol2023"}>
    <img src={instagram} width={40} alt="instagram"  className="relative z-[5] mx-5" />
    </Link>
    {/* <img src={linkedin} width={40} alt="linkedin"  className="relative z-[5] mx-5" /> */}
    <Link to={"https://twitter.com/cincosol2023"}>
    <img src={twitter} width={40} alt="twitter"  className="relative z-[5] mx-5" />
    </Link>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`} style={{backgroundColor:"#000000"}}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        {/* <Business /> */}
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default Services;