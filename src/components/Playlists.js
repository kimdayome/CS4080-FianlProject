import React, { useState } from "react";
import './Playlists.css';

function Playlists({ addToMyAddons, token }) { // Accept token as a prop
    const podcasts = [
        {
            title: "Platypod Bonus Ep",
            description: "Trade versus Academic Press: Part 2 of Publishing in Academia",
            url: "https://ia600604.us.archive.org/3/items/platypod-102224/Platypod%20102224.mp3",
            image: "/images/finland4.jpeg",
        },
        {
            title: "RELIC RADIO",
            description: "Welcome to Relic's radio!",
            url: "https://archive.org/download/rr12024/CaseClosed.mp3",
            image: "/images/finland6.jpeg",
        },
        {
            title: "January Steamy Stories",
            description: "The crowd was howling with laughter. I stood there, mic in one hand, beer bottle in the other and examined them. I had the biggest of grins on my face.",
            url: "https://ia804601.us.archive.org/0/items/open-mic-night-part-1/A%20Bath%20With%20My%20Oldest%20Friend.mp3",
            image: "/images/kendric5.jpg",
        },
        {
            title: "Sleep Safe & Calm Beat",
            description: "Sleep Safe & Calm Beat Insomnia. Peaceful Music For Deep Sleep...",
            url: "https://ia802808.us.archive.org/13/items/sleepsafecalmbeatinsomnia.peacefulmusicfordeepsleep.deltawaves/3%20HOURS%20Best%20Relaxing%20Music%20%20Positive%20Mind%20Motivation%20For%20Deep%20Meditation%2C%20Yoga%20%2CMassage.mp3",
            image: "/images/london2.jpeg",
        },
        {
            title: "Calm Piano...",
            description: "Sleeping with piano music...",
            url: "https://ia600504.us.archive.org/11/items/SoftPianoMusicSleepingMusic/Calm%20Piano%20Music.mp3",
            image: "/images/london3.jpeg",
        },
        {
            title: "Runways!",
            description: "I had to find something to do when I got out of the military. Something that I loved, something that I wouldn't mind doing while I collected my military pension at age 40. ",
            url: "https://ia601608.us.archive.org/4/items/runways-part-1/Runways-Part-6.mp3",
            image: "/images/london6.jpeg",
        },
        {
            title: "Gefahr Motivation!",
            description: "Motivation Time!",
            url: "https://ia903105.us.archive.org/5/items/16_gefahr_extrinsisc/16_Gefahr_extrinsische_Motivation_-_Motivation__Routinen.mp3",
            image: "/images/paris3.jpeg",
        },
        {
            title: "Soft Drama",
            description: "Sad Background Music / Emotional Dramatic Cinematic Music Instrumental - by AShamaluevMusic",
            url: "https://ia800407.us.archive.org/14/items/soft-drama-ashamaluevmusic/02.%20Soft%20Drama%20-%20AShamaluevMusic.mp3",
            image: "/images/paris5.jpeg",
        },
        {
            title: "The Ragtime Band",
            description: "Do you want to dance?",
            url: "https://ia903001.us.archive.org/34/items/78_sunflower-slow-drag_tony-parentis-ragtimers-tony-parenti-wild-bill-davison-jimmy-a_gbia0105260/01%20-%20Hysterics%20Rag%20%28A%20Trombone%20Fit%29%20-%20Tony%20Parenti%27s%20Ragtimers.mp3",
            image: "/images/czech1.jpeg",
        },
    ];

    return (
        <section className="playlists-main">
            <h2 className="section-title">Add-ons</h2>
            <div className="playlists">
                {podcasts.map((podcast, index) => (
                    <div key={index} className="playlist">
                        <img
                            className="playlist-thumb"
                            src={podcast.image} // Display the local image
                            alt={podcast.title}
                        />
                        <div className="playlist-title">{podcast.title}</div>
                        <div className="playlist-artist">{podcast.description}</div>
                        <button
                            className="add-to-myaddons-btn"
                            onClick={() => addToMyAddons(podcast)}
                        >
                            Add to My Add-ons
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Playlists;