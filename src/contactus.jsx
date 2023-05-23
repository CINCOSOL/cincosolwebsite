import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import {  code, textLeft, textLeftImg, textRight, textRightImg, twitter, linkedin, facebook, instagram } from "./assets";
import { Link } from "react-router-dom";

const ContactUs = () => (
  <div className="w-full overflow-hidden" style={{backgroundColor:"#000000"}}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} mt-10`} style={{backgroundColor:"#000000"}}>
    <h1 className="text-center font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          Contact  <span style={{color:"#C88BC4"}}>Us</span>{" "}
          </h1>
    </div>

    <div className="w-full flex flex-col justify-center items-center md:mt-5 mb-5 mt-10">
        <div className={`flex flex-row justify-between ss:my-5 my-5 `} style={{width:500}}>
        <label className="font-normal cursor-pointer text-[20px] text-white ">
          Name:
          </label>            
          <input style={{marginLeft:50, width:300, backgroundColor:'#1F1F1F', color:"#fff", paddingLeft:10}} type="text" name="name" />
        </div>
        <div className={`flex flex-row justify-between ss:my-5 my-5 `} style={{width:500}}>
        <label className="font-normal cursor-pointer text-[20px] text-white ">
          Email Address:
          </label>            
          <input style={{marginLeft:50, width:300, backgroundColor:'#1F1F1F', color:"#fff", paddingLeft:10}} type="email" name="email" />
        </div>
        <div className={`flex flex-row justify-between ss:my-5 my-5 `} style={{width:500}}>
        <label className="font-normal cursor-pointer text-[20px] text-white ">
          Phone:
          </label>            
          <input style={{marginLeft:50, width:300, backgroundColor:'#1F1F1F', color:"#fff", paddingLeft:10}} type="number" name="phone" />
        </div>
        <div className={`flex flex-row justify-between ss:my-5 my-5 `} style={{width:500}}>
        <label className="font-normal cursor-pointer text-[20px] text-white ">
          Subject:
          </label>            
          <input style={{marginLeft:50, width:300, backgroundColor:'#1F1F1F', color:"#fff", paddingLeft:10}} type="text" name="subject" />
        </div>
        <div className={`flex flex-row justify-between ss:my-5 my-5 `} style={{width:500}}>
        <label className="font-normal cursor-pointer text-[20px] text-white ">
          Message:
          </label>      
          <textarea rows={4} cols={50} style={{borderWidth:1, width:300, height:150, backgroundColor:'#1F1F1F', color:"#fff", paddingLeft:10, paddingTop:5}} />      
        </div>
        <div className={`flex flex-row justify-between ss:my-5 my-5 `}>
        <label className="font-normal cursor-pointer text-[20px] text-white ">
          
          </label>            
          <input className="font-semibold" style={{marginLeft:25, width:120, height:40, borderRadius:50, backgroundColor:'#C88BC4'}} type="submit" value="Send" />
        </div>
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

export default ContactUs;