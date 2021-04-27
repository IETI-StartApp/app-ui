import {useEffect, useState} from 'react'
import JsonData from '../../data/data.json'
import SmoothScroll from 'smooth-scroll'
import {Navigation} from "../../components/navigation";
import {HeaderT} from "../../components";
import {Features} from "../../components/Features";
import {About} from "../../components/About";
import {Team} from "../../components/Team";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

export const LandingPage = () => {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])

    return (
        <div>
            <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/><link rel="apple-touch-icon" href="img/apple-touch-icon.png"/>
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="img/apple-touch-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="img/apple-touch-icon-114x114.png"
            />

            <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
            <link
                rel="stylesheet"
                type="text/css"
                href="fonts/font-awesome/css/font-awesome.css"
            />
            <link rel="stylesheet" type="text/css" href="css/style.css"/>
            <link
                rel="stylesheet"
                type="text/css"
                href="css/nivo-lightbox/nivo-lightbox.css"
            />
            <link rel="stylesheet" type="text/css" href="css/nivo-lightbox/default.css"/>
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Lato:400,700"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900"
                rel="stylesheet"
            />
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <Navigation/>
            <HeaderT data={landingPageData.Header}/>
            <Features data={landingPageData.Features}/>
            <About data={landingPageData.About}/>
            <Team data={landingPageData.Team}/>
        </div>
    )
}

