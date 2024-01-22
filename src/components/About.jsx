import React from "react";
import WhatImg from "../assets/what.png";
import { AiOutlineAim } from "react-icons/ai";
import { FaEyeLowVision } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { MdEnhancedEncryption } from "react-icons/md";
import { SiWebauthn } from "react-icons/si";
import { TiCloudStorage } from "react-icons/ti";
import { AiFillTrademarkCircle } from "react-icons/ai";
import { FaCheckDouble } from "react-icons/fa";
import { RiSkull2Fill } from "react-icons/ri";
import AboutImg from "../assets/about.png";
import Automation from "../assets/automation.png";

const About = () => {
  return (
    <div className="py-10">
      <div className="container">
        {/* what is cryptohero */}
        <div className="lg:grid grid-cols-2 justify-between items-center">
          <div>
            <div className="flex justify-center items-center gap-x-10 mb-5">
              <h3 className="inline text-slate-200 text-xl px-8 py-3 bg-gradient-to-r from-pink-700 to-pink-500  rounded-full  font-primary-font font-bold leading-relaxed tracking-wider">
                WHAT IS CRYPTOHERO
              </h3>

              <a href="" class="text-slate-100">
                <FaArrowCircleDown
                  size={18}
                  className="animate-bounce hover:text-blue-500 duration-200"
                />
              </a>
            </div>

            <div>
              <p className="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                So, become the hero of your financial future. Embrace crypto,
                stay informed, and invest responsibly. With determination, you
                can unlock financial freedom and shape your destiny on your
                terms. CryptoHero is dedicated to your financial safety and
                security. Our robust measures include state-of-the-art
                encryption, multi-factor authentication, and cold storage for
                digital assets. We prioritize transparency and compliance,
                ensuring your peace of mind as you navigate the crypto
                landscape. With CryptoHero, you can trust in a secure platform
                to empower your financial future.
              </p>

              <div>
                <div class="flex justify-start items-center gap-x-5">
                  <div>
                    <AiOutlineAim className="text-sub-heading text-4xl animate-pulse" />
                  </div>

                  <div>
                    <h4 class="text-sub-heading font-primary-font font-semibold text-xl">
                      OUR AIM
                    </h4>
                    <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                      At CryptoHero, our aim is to democratize and simplify
                      cryptocurrency, making it accessible and understandable
                      for individuals of all backgrounds. We strive to provide a
                      secure and user-friendly platform that empowers people to
                      take control of their financial futures through crypto
                      investments.
                    </p>
                  </div>
                </div>

                <div class="flex justify-start items-center gap-x-5">
                  <div>
                    <FaEyeLowVision className=" text-sub-heading text-3xl animate-pulse" />
                  </div>

                  <div>
                    <h4 class="text-sub-heading font-primary-font font-semibold text-xl">
                      OUR VISION
                    </h4>
                    <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                      At CryptoHero, we envision a future where financial
                      empowerment is accessible to all through cryptocurrency.
                      We aim to provide a user-friendly, secure, and transparent
                      platform, simplifying crypto participation and making
                      financial freedom a reality for everyone.
                    </p>
                  </div>
                </div>

                <div class="flex justify-start items-center gap-x-5">
                  <div>
                    <SiFuturelearn className="text-sub-heading text-4xl animate-pulse" />
                  </div>

                  <div>
                    <h4 class="text-sub-heading font-primary-font font-semibold text-xl">
                      THE FUTURE
                    </h4>
                    <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                      In the future, CryptoHero will be your trusted guide to a
                      more inclusive and decentralized financial world, where
                      financial empowerment and opportunities are accessible to
                      all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={WhatImg} alt="" />
          </div>
        </div>

        {/* About CryptoHero */}

        <div className="lg:grid grid-cols-2 justify-between items-center">
          <div>
            <img src={AboutImg} alt="" />
          </div>

          <div>
            <div className="flex justify-center items-center gap-x-10 mb-5">
              <h3 className="text-slate-200 text-xl px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full  font-primary-font font-bold leading-relaxed tracking-wider">
                ABOUT US
              </h3>

              <a href="" class="text-slate-100">
                <FaArrowCircleDown
                  size={18}
                  className="animate-bounce hover:text-blue-500 duration-200"
                />
              </a>
            </div>

            <div>
              <p className="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                Welcome to 'Unlocking the Power of Crypto: Be the Hero of Your
                Financial Future!' Our mission is to demystify cryptocurrency
                and empower you to take control of your financial destiny.
                Discover insights, guidance, and resources to navigate the
                crypto world, diversify your portfolio, and embrace blockchain's
                potential. Join us on this journey to financial empowerment.
              </p>

              <p className="text-xl font-primary-font font-semibold text-slate-100 leading-relaxed">
                FOLLOW US
              </p>

              <div className="flex justify-start items-center gap-x-10">
                <FaFacebook
                  className="my-5 text-white text-xl hover:text-sub-heading duration-200"
                  size={20}
                />
                <FaMedium
                  className="my-5 text-white text-xl hover:text-sub-heading duration-200"
                  size={20}
                />
                <FaTelegramPlane
                  className="my-5 text-white text-xl hover:text-sub-heading duration-200"
                  size={20}
                />
                <FaTwitter
                  className="my-5 text-white text-xl hover:text-sub-heading duration-200"
                  size={20}
                />
                <FaLinkedin
                  className="my-5 text-white text-xl hover:text-sub-heading duration-200"
                  size={20}
                />
                <FaGithub
                  className="my-5 text-white text-xl hover:text-sub-heading duration-200"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contracts */}

        <div className="lg:grid grid-cols-2 justify-between items-center">
          <div>
            <div className="flex justify-center items-center gap-x-10 mb-5">
              <h3 className="inline text-slate-200 text-xl px-8 py-3 bg-gradient-to-r from-pink-700 to-pink-500  rounded-full  font-primary-font font-bold leading-relaxed tracking-wider">
                CONTRACTS
              </h3>

              <a href="" class="text-slate-100">
                <FaArrowCircleDown
                  size={18}
                  className="animate-bounce hover:text-blue-500 duration-200"
                />
              </a>
            </div>

            <div>
              <p className="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                CryptoHero, your trusted crypto trading platform, prioritizes
                your security above all else. We employ state-of-the-art
                security measures, including robust encryption, multi-factor
                authentication, and secure wallets, to safeguard your digital
                assets. Rest assured, your financial safety is our top priority
                as you explore the exciting world of crypto trading with
                confidence and peace of mind.
              </p>

              <div>
                <div class="flex justify-start items-center gap-x-5">
                  <div>
                    <MdEnhancedEncryption className="text-sub-heading text-4xl animate-pulse" />
                  </div>

                  <div>
                    <h4 class="text-sub-heading font-primary-font font-semibold text-xl">
                      Encryption
                    </h4>
                    <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                      CryptoHero employs advanced encryption protocols to
                      protect your data and transactions, ensuring that
                      sensitive information remains confidential.
                    </p>
                  </div>
                </div>

                <div class="flex justify-start items-center gap-x-5">
                  <div>
                    <SiWebauthn className=" text-sub-heading text-3xl animate-pulse" />
                  </div>

                  <div>
                    <h4 class="text-sub-heading font-primary-font font-semibold text-xl">
                      Two-Factor Authentication (2FA):
                    </h4>
                    <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                      Two-factor authentication adds an additional layer of
                      security by requiring a second verification step,
                      typically via a mobile app or text message, to access your
                      account.
                    </p>
                  </div>
                </div>

                <div class="flex justify-start items-center gap-x-5">
                  <div>
                    <TiCloudStorage className="text-sub-heading text-4xl animate-pulse" />
                  </div>

                  <div>
                    <h4 class="text-sub-heading font-primary-font font-semibold text-xl">
                      Cold Storage
                    </h4>
                    <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                      The platform stores a significant portion of users' funds
                      in cold storage, which is not connected to the internet,
                      making it highly resistant to hacking attempts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={WhatImg} alt="" />
          </div>
        </div>

        {/* Automation */}

        <div className="lg:grid grid-cols-2 justify-between items-center">
          <div>
            <img src={Automation} alt="" />
          </div>

          <div>
            <div className="flex justify-center items-center gap-x-10 mb-5">
              <h3 className="text-slate-200 text-xl px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full  font-primary-font font-bold leading-relaxed tracking-wider">
                CONTRACTS
              </h3>

              <a href="" class="text-slate-100">
                <FaArrowCircleDown
                  size={18}
                  className="animate-bounce hover:text-blue-500 duration-200"
                />
              </a>
            </div>

            <div>
              <p className="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                CryptoHero revolutionizes crypto trading with automation. Our
                platform utilizes advanced algorithms to simplify trading.
                Customize strategies, execute trades, and manage your portfolio
                effortlessly. Stay ahead of crypto markets 24/7 with ease.
              </p>

              <div>
                <div class="flex justify-start items-center gap-x-5">
                  <div>
                    <AiFillTrademarkCircle className="text-sub-heading text-4xl animate-pulse" />
                  </div>

                  <div>
                    <h4 class="text-sub-heading font-primary-font font-semibold text-xl">
                      Effortless Trading
                    </h4>
                    <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                      CryptoHero's automation simplifies trading by allowing
                      users to set predefined strategies, reducing the need for
                      constant monitoring.
                    </p>
                  </div>
                </div>

                <div class="flex justify-start items-center gap-x-5">
                  <div>
                    <FaCheckDouble className=" text-sub-heading text-3xl animate-pulse" />
                  </div>

                  <div>
                    <h4 class="text-sub-heading font-primary-font font-semibold text-xl">
                      24/7 Availability
                    </h4>
                    <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                      Automation ensures that you can take advantage of market
                      opportunities around the clock, even when you're not
                      actively engaged in trading.
                    </p>
                  </div>
                </div>

                <div class="flex justify-start items-center gap-x-5">
                  <div>
                    <RiSkull2Fill className="text-sub-heading text-4xl animate-pulse" />
                  </div>

                  <div>
                    <h4 class="text-sub-heading font-primary-font font-semibold text-xl">
                      Risk Management
                    </h4>
                    <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                      Automation can help manage risk by enforcing predefined
                      stop-loss and take-profit orders, preventing significant
                      losses and securing profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
