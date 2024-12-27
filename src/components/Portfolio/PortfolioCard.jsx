import React from "react";
import { ArrowButton } from "../components.styles";

function PortfolioCard({ item, setModalActive }) {
  return (
    <div className="portfolio__card">
      <img
        src="https://tibb2.fins.az/file/articles/2024/03/29/1711714660_electronic-document-management-system-1038x576.jpg"
        alt=""
      />
      <div className="portfolio__card-content">
        <div className="portfolio__card-left">
          <h1>Title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
            enim?
          </p>
        </div>
        <div className="portfolio__card-right">
          <ArrowButton onClick={() => setModalActive(true)} direction="right">
            <i className="ri-arrow-right-line"></i>
          </ArrowButton>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
