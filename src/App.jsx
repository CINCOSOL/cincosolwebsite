import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import {  code, textLeft, textLeftImg, textRight, textRightImg, twitter, linkedin, facebook, instagram } from "./assets";
import { Link } from "react-router-dom";

const App = () => (
  <div className="w-full overflow-hidden" style={{backgroundColor:"#000000"}}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`} style={{backgroundColor:"#000000"}}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`${styles.flexStart} mt-5`} style={{backgroundColor:"#000000"}} >
    <img src={code}  alt="code"  className="relative z-[5]" />
    </div>

    <div className={`${styles.flexStart} justify-between items-center ml-20`} style={{backgroundColor:"#000000", marginTop:100}} >
    <img src={textLeft} width={600} height={500} alt="text-left"  className="relative z-[5]" />
    <img src={textLeftImg} width={600}  alt="text-left-img"  className="relative z-[5]" />
    </div>
      

    <div className={`${styles.flexStart} justify-between items-center ml-20`} style={{backgroundColor:"#000000", marginTop:100}} >
    <img src={textRightImg} width={600}  alt="text-right-img"  className="relative z-[5]" />
    <img src={textRight} width={600} height={500} alt="text-right"  className="relative z-[5] mr-10" />
    </div>

    <div style={{marginTop:100}} >
          <h1 className="text-center flex-1 font-poppins font-semibold ss:text-[60px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          It's easy to get started. <br className="sm:block hidden" />{" "}
            <span style={{color:"#C88BC4"}}>Contact us today.</span>{" "}
          </h1>
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

export default App;