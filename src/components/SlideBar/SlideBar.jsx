
import React from "react";
import Carousel from "react-elastic-carousel";

const items = [
    { id: 1, alt: "", src: "https://media.discordapp.net/attachments/781412743537491969/830539929565528115/unknown.png?width=250&height=250" },
    { id: 2, alt: "", src: "https://media.discordapp.net/attachments/781412743537491969/830540011442405457/unknown.png?width=250&height=250" },
    { id: 3, alt: "", src: "https://media.discordapp.net/attachments/781412743537491969/830541738476306432/unknown.png?width=250&height=250" },
    { id: 4, alt: "", src: "https://media.discordapp.net/attachments/781412743537491969/830541868105203732/unknown.png?width=250&height=250" },
    { id: 5, alt: "", src: "https://media.discordapp.net/attachments/781412743537491969/830542506985914378/unknown.png?width=250&height=250" },
    { id: 6, alt: "", src: "https://media.discordapp.net/attachments/781412743537491969/830542595431727134/unknown.png?width=250&height=250" },
    { id: 7, alt: "", src: "https://media.discordapp.net/attachments/781412743537491969/830543249060003840/unknown.png?width=250&height=250" }
]
const slide = items.map((item) =>
    <div key={item.id}><img src={item.src} alt={item.alt} /></div>
);


export const SlideBar = () => {
    return (
        <div className="App">
            <div className="controls-wrapper">
            </div>
            <hr className="seperator" />
            <div className="carousel-wrapper">
                <Carousel>
                    {slide}
                </Carousel>

            </div>
        </div>
    );
}

