import React from "react";

const About = ({imgScr, aboutText}) => {
    return (
      <aside>
        <img
          src={imgScr || "https://via.placeholder.com/215"}
          alt="blog logo"
        />
        <p>{aboutText}</p>
      </aside>
    );
}

export default About