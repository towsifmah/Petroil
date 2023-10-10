import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

import footerlogo from '../../assets/footerlogo.svg'

import message from "../../assets/message.svg";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";

import cert1 from "../../assets/Cert1.svg";
import cert2 from "../../assets/Cert2.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1F1F1F] pt-[144px] pb-[170px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div>
              <img
                className="mb-[33px]"
                src={footerlogo}
                alt="logo"
              />
              <div className="flex items-center gap-[5px]">
                <img src={message} alt="" />
                <p className="text-[14px] font-popping font-normal text-white">
                  mail@yourcompany.com
                </p>
              </div>
              <div className="flex items-center gap-[5px] my-[15px]">
                <img src={phone} alt="" />
                <p className="text-[14px] font-popping font-normal text-white">
                  +896 120 5889 (Toll free)
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={location} alt="" />
                <p className="text-[14px] font-popping font-normal text-white">
                  101 Baker Street, New York, USA, 12345
                </p>
              </div>
              <div className="flex items-center gap-[19px] mt-[42px]">
                <div className=" h-[29px] w-[29px] bg-Primary p-[7px] rounded-[100px] text-white font-bold">
                  <BiLogoFacebook />
                </div>
                <div className="h-[29px] w-[29px] bg-Primary p-[7px] rounded-[100px] text-white">
                  <BiLogoTwitter />
                </div>
                <div className="h-[29px] w-[29px] bg-Primary p-[7px] rounded-[100px] text-white">
                  <BiLogoLinkedin />
                </div>
                <div className="h-[29px] w-[29px] bg-Primary p-[7px] rounded-[100px] text-white">
                  <BiLogoInstagram />
                </div>
              </div>
            </div>
            <div className="text-white mt-[33px] md:ml-[95px] ml-[30px]">
              <h3 className="text-base font-popping font-bold mb-[21px]">
                Company
              </h3>
              <div>
                <h5 className="text-[14px] font-popping font-normal mb-[15px]">
                  Home
                </h5>
                <h5 className="text-[14px] font-popping font-normal mb-[15px]">
                  About
                </h5>
                <h5 className="text-[14px] font-popping font-normal mb-[15px]">
                  Service
                </h5>
                <h5 className="text-[14px] font-popping font-normal mb-[15px]">
                  Gallery
                </h5>
              </div>
            </div>
            <div className="text-white mt-[33px] md:ml-[95px] ml-[45px]">
              <h3 className="text-base font-popping font-bold mb-[21px]">
                Others
              </h3>
              <div>
                <h5 className="text-[14px] font-popping font-normal mb-[15px]">
                  Blog
                </h5>
                <h5 className="text-[14px] font-popping font-normal mb-[15px]">
                  Contact
                </h5>
                <h5 className="text-[14px] font-popping font-normal mb-[15px]">
                  Terms & Conditions
                </h5>
                <h5 className="text-[14px] font-popping font-normal mb-[15px]">
                  Privacy Policy
                </h5>
              </div>
            </div>
            <div className="text-white mt-[33px] lg:ml-[10px] xl:ml-[145px]">
              <h3 className="text-base font-popping font-bold mb-[21px]">
                Certificate
              </h3>
              <div className="flex gap-x-[5px]">
                <img src={cert1} alt="cartificate" />
                <img src={cert2} alt="cartificate" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#282828] py-[42px]">
        <div className="container">
          <h4 className="md:text-base text-[10px] sm:text-center lg:text-start font-medium text-[#6C6C6C] font-popping">
            © Copyright 2022 by Towsif Mahmud – All right reserved.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
