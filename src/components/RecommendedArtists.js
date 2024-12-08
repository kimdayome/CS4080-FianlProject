// RecommendedArtists.js

import React from "react";
import "./RecommendedArtists.css";

function RecommendedArtists() {
    const artists = [
        { id: 1, name: "Denise", image: "/images/logo.jpg" },
        { id: 2, name: "Jessica Pinto", image:  "/images/logo.jpg" },
        { id: 3, name: "Dayoung Kim", image:  "/images/logo.jpg" },
        { id: 4, name: "Moller", image:  "/images/logo.jpg" },
        { id: 5, name: "Alex", image:  "/images/logo.jpg" },
    ];

    return (
        <section className="recommended-artists">
            <h2 className="section-title">Recommended Artists For You</h2>
            <div className="artists">
                {artists.map((artist) => (
                    <div key={artist.id} className="artist">
                        <img
                            className="artist-profile"
                            src={artist.image}
                            alt={artist.name}
                        />
                        <div className="artist-name">{artist.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RecommendedArtists;