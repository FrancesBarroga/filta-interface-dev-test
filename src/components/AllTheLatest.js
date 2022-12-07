import React from "react";
import parse from "html-react-parser";
import { latestList } from "../data/allTheLatestData";
import "../styles/allTheLatest.css";

function AllTheLatest() {
  return (
    <div className="container">
      <h1 className="component-title">All the Latest from AEG</h1>
      <div id="blogs">
        {latestList.map((item) => {
          return (
            <div key={item.id} className="blog-container">
              <div style={{ position: "relative" }}>
                <img src={item.imagePath} alt={item.title} className="img" />
                <div
                  style={{
                    border: "2px solid #cf1430",
                    marginTop: "-0.25rem",
                  }}
                />
              </div>

              <div style={{ textAlign: "left" }}>
                <div className="blog-title">{item.title}</div>
                <div className="blog-description">
                  {parse(item.description)}
                </div>
                <div>
                  <button className="read-btn">Read More</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTheLatest;
