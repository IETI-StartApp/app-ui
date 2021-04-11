import React from "react";
import Carousel from "react-elastic-carousel";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

export const SlideBar = () => {
    
    return (
        <div className="App">
      <div className="controls-wrapper">
      </div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          <div>
            <img alt="" src="https://media.discordapp.net/attachments/781412743537491969/830539929565528115/unknown.png?width=250&height=250"/>
          </div>
          <div>
            <img alt="" src= "https://media.discordapp.net/attachments/781412743537491969/830540011442405457/unknown.png?width=250&height=250"/>
          </div>
          <div>
            <img alt="" src= "https://media.discordapp.net/attachments/781412743537491969/830541738476306432/unknown.png?width=250&height=250"/>
          </div>
          <div>
            <img alt="" src="https://media.discordapp.net/attachments/781412743537491969/830541868105203732/unknown.png?width=250&height=250"/>
          </div>
          <div>
            <img alt="" src="https://media.discordapp.net/attachments/781412743537491969/830542506985914378/unknown.png?width=250&height=250"/>
          </div>
          <div>
            <img alt="" src="https://media.discordapp.net/attachments/781412743537491969/830542595431727134/unknown.png?width=250&height=250"/>
          </div>
          <div>
            <img alt="" src="https://media.discordapp.net/attachments/781412743537491969/830543249060003840/unknown.png?width=250&height=250"/>
          </div>
        </Carousel>
      </div>
    </div>
  );
}