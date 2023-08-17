import React from "react";
import Amherst from "./../../images/Amherst.jpg";
import Giddy from "./../../images/Giddy.jpg";
import Mowse from "./../../images/Mowse.PNG";
import { FaReact, FaCss3Alt, FaHtml5, FaPython, FaNode } from "react-icons/fa";
import { BiLogoJavascript, BiSolidCheese } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
const portfolioItems = [
  {
    name: "mowse",
    render: (
      <section className="portfolio-item">
        <div className="portfolio-item__title">Mowse: Founder</div>
        <img src={Mowse} alt="Mowse" className="portfolio-item__img" />
        <div className="portfolio-item__desc">
          <div>Experience: Oct 2021 - Present</div>
          <div>
            NFT Gaming platform built on the Fantom Blockchain. This is Ryan's
            personal brand project that he has been working on since 2021
          </div>
        </div>
        <div className="portfolio-item__icon">
          <FaReact />
          <FaNode />
          <BiLogoJavascript />
          <BiSolidCheese />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mowse-game.herokuapp.com/"
          >
            Website
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MowsePack/MowseContracts"
          >
            More
          </a>
        </div>
      </section>
    ),
  },
  {
    name: "giddy",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Giddy: Full Stack Dev</div>
        <img src={Giddy} alt="Giddy" className="portfolio-item__img" />
        <div className="portfolio-item__desc">
          <div>Experience: Mar 2023 - Present</div>
          <div>
            Giddy is the world's leading sexual health platform. At Giddy, Ryan
            created landing pages and helped migrate website to
            NextJS/TailwindCSS.
          </div>
        </div>
        <div className="portfolio-item__icon">
          <FaReact />
          <FaCss3Alt />
          <BiLogoJavascript />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://getmegiddy.com/"
          >
            Website
          </a>
        </div>
      </div>
    ),
  },
  {
    name: "amherst",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Amherst: Software Engineer</div>
        <img src={Amherst} alt="Amherst" className="portfolio-item__img" />
        <div className="portfolio-item__desc">
          <div>Experience: Nov 2018 - Jan 2023</div>
          <div>
            Amherst is a Real Estate Technology company based in Austin. Ryan
            was on the Acquisitions team, migrating the legacy Acquisitions app
            from ASP.NET web app to React and maintaining legacy applications.
          </div>
        </div>
        <div className="portfolio-item__icon">
          <FaReact />
          <FaCss3Alt />
          <BiLogoJavascript />
          <TbBrandCSharp />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kwaddle.com"
          >
            Website
          </a>
        </div>
      </div>
    ),
  },
  {
    name: "kwaddle",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Kwaddle: Frontend Dev</div>
        <div className="portfolio-item__desc">
          <div>Experience: 2017 - 2018</div>
          <div>
            Platform for parents and kids to find after-school and summer camp
            activities!
          </div>
        </div>
        <div className="portfolio-item__icon">
          <FaHtml5 />
          <FaCss3Alt />
          <BiLogoJavascript />
          <FaPython />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kwaddle.com"
          >
            Website
          </a>
        </div>
      </div>
    ),
  },
];

export default portfolioItems;
