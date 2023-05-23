import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      {/* <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div> */}

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
      <div  className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
      <h1 className="text-center font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          About  <span style={{color:"#C88BC4"}}>Us</span>{" "}
          </h1>
            <p className={`${styles.paragraph} max-w-[300px] text-center text-white`}>
            Cincosol is a leading company, which aims to provide solution to it’s global partner. We believe  in providing innovative solution for your business needs.        </p>
      </div>
      <div  className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
      <h1 className="text-center font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          Contact  <span style={{color:"#C88BC4"}}>Info</span>{" "}
          </h1>
            <p className={`${styles.paragraph} max-w-[300px] text-center text-white`}>
              cincosol2023@gmail.com
            </p>
            <p className={`${styles.paragraph} mt-5 max-w-[300px] text-center text-white`}>
              +92-336-2249435
            </p>
      </div>
      <div  className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
      <h1 className="text-center  font-semibold ss:text-[30px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
          Office  <span style={{color:"#C88BC4"}}>Address</span>{" "}
          </h1>
            <p className={`${styles.paragraph} max-w-[300px] text-center text-white`}>
            I I Chundrighar, Opposite Standard Chartered Bank.
            </p>
      </div>
        {/* {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))} */}
      </div>
    </div>

    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className=" font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Cincosol. All Rights Reserved.
      </p>

      {/* <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div> */}
    </div>
  </section>
);

export default Footer;