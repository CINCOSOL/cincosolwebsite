import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import {  careerimg1, careerimg2, textLeft, textLeftImg, textRight, textRightImg, twitter, linkedin, facebook, instagram } from "./assets";
import { Link } from "react-router-dom";

const Career = () => (
  <div className="w-full overflow-hidden" style={{backgroundColor:"#000000"}}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} mt-10`} style={{backgroundColor:"#000000"}}>
    <h1 className="text-center font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          Come On  <span style={{color:"#C88BC4"}}>Join Us</span>{" "}
          </h1>
    </div>

    <div className={`${styles.flexStart}  items-center`} style={{backgroundColor:"#000000", marginTop:100,}} >
    <img src={careerimg1} width={530}  alt="text-left"  className="relative z-[5] mx-20" />
    <img src={careerimg2} width={400}  alt="text-left-img"  className="relative z-[5] mx-20" />
    </div>
    
    <div className={`${styles.flexStart} mt-20`} style={{backgroundColor:"#000000"}}>
    <h1 className="text-center font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          Company Parks
          </h1>
    </div>

    <div className={`${styles.flexStart} justify-between items-center mx-20 `} style={{backgroundColor:"#000000"}}>
        <div className={`${styles.flexStart} flex-col`} style={{backgroundColor:"#000000"}}>
        <h1 className="text-start font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
        EMPOWERING
            </h1>
            <p className={`${styles.paragraph} max-w-[600px]  text-start`}>
            At Cincosol, we provide AI learning opportunities for our employees to enhance their capabilities and competencies. Join us in achieving shared success through this exciting journey.
            </p>
        </div>
        <div className={`${styles.flexStart} flex-col`} style={{backgroundColor:"#000000"}}>
        <h1 className="text-start font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
        INCENTIVES
            </h1>
            <p className={`${styles.paragraph} max-w-[600px]  text-start`}>
            At Cincosol, we prioritize team satisfaction by boosting motivation through enticing business perks upon achieving set targets and goals.
            </p>
        </div>
    </div>

    <div className={`${styles.flexStart} justify-between items-center mx-20`} style={{backgroundColor:"#000000"}}>
        <div className={`${styles.flexStart} flex-col`} style={{backgroundColor:"#000000"}}>
        <h1 className="text-start font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
        COMPETITIVE SALARY
            </h1>
            <p className={`${styles.paragraph} max-w-[600px]  text-start`}>
            Cincosol offers competitive salaries and regular performance appraisals to motivate its employees.            </p>
        </div>
        <div className={`${styles.flexStart} flex-col`} style={{backgroundColor:"#000000"}}>
        <h1 className="text-start font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
        TRAINING
            </h1>
            <p className={`${styles.paragraph} max-w-[600px]  text-start`}>
            Cincosol prioritizes employee satisfaction and growth, offering practical guidance to enhance skills and navigate tough situations.
            </p>
        </div>
    </div>

    <div className={`${styles.flexStart} justify-between items-center mx-20`} style={{backgroundColor:"#000000"}}>
        <div className={`${styles.flexStart} flex-col`} style={{backgroundColor:"#000000"}}>
        <h1 className="text-start font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
        TEAM BUILDING CAMPS
            </h1>
            <p className={`${styles.paragraph} max-w-[600px]  text-start`}>
            Cincosol promotes collaboration and growth, leveraging employee strengths and addressing weaknesses through team building activities for enhanced productivity and cohesion. </p>
                   </div>
        <div className={`${styles.flexStart} flex-col`} style={{backgroundColor:"#000000"}}>
        <h1 className="text-start font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
        PEOPLE
            </h1>
            <p className={`${styles.paragraph} max-w-[600px]  text-start`}>
            At Cincosol, every individual is valued as part of our family. Our workforce is an asset, and we focus on managing employees for productivity, efficiency, and building high morale and trust.            </p>
        </div>
    </div>

    <div className={`${styles.flexStart} items-center flex-col mt-20`} style={{backgroundColor:"#000000"}}>
    <h1 className="text-center font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          Work With Us
          </h1>
          <p className={`${styles.paragraph} max-w-[900px] text-center`}>
                There's no vacancy for now.
        </p>
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

export default Career;