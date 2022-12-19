import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex md:w-0 w-full md:flex-1 flex-col md:justify-start justify-center md:mr-10 mr-0 ">
        <img
          src={logo}
          alt="hoobank"
          className="w-[256px] h-[72px] object-contain custom-center-footer"
        />
        <p
          className={`${styles.paragraph} mt-8 md:max-w-[310px] max-w-[500px] text-[16px] custom-center-footer`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          quaerat, magnam tempore possimus numquam voluptatibus.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            className="flex flex-col my-4 md:min-w-[150px] min-w-full text-center md:text-left md:my-0"
            key={footerLink.key}
          >
            <h4 className="font-poppins font-semibold text-[20px] leading-[27px] text-white pb-4 border-b-2 border-b-dimBlue">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, i) => (
                <li
                  key={link.name}
                  className={`${
                    i !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  } font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row pt-6 flex-col border-t-2 border-t-[#3f3e45]">
      <p className={`${styles.paragraph} max-w-[310px] text-[15px]`}>
        2023 HooBank. All rights reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, i) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              i !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
