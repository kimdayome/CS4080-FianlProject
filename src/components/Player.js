import React, { useState, useEffect, useRef } from "react";
import "./Player.css";

function Player({ startPlayback, queue, setQueue, currentTrack, setCurrentTrack, history, setHistory }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null); // Reference for podcast audio

    useEffect(() => {
        if (currentTrack) {
            setIsPlaying(true);
        }
    }, [currentTrack]);

    const playNextTrack = async () => {
      if (queue.length > 0) {
          const nextTrack = queue[0];
          setQueue(queue.slice(1)); // Remove the played track from the queue
          setHistory([...history, currentTrack].filter(Boolean)); // Add the current track to history
          setCurrentTrack(nextTrack);
  
          // Stop podcast playback if it's running
          if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current = null;
          }
  
          if (nextTrack.startsWith("https")) {
              // Stop Spotify playback before playing the podcast
              try {
                  await fetch("https://api.spotify.com/v1/me/player/pause", {
                      method: "PUT",
                      headers: {
                          Authorization: `Bearer ${localStorage.getItem("token")}`,
                      },
                  });
              } catch (error) {
                  console.error("Error pausing Spotify playback:", error);
              }
  
              // Play podcast using audio tag
              const audio = new Audio(nextTrack);
              audioRef.current = audio; // Store reference
              audio.play();
              setIsPlaying(true);
          } else {
              // Play song via Spotify API
              startPlayback(nextTrack);
          }
      } else {
          console.log("Queue is empty");
      }
  };

    const playPreviousTrack = () => {
        if (history.length > 0) {
            const previousTrack = history[history.length - 1];
            setHistory(history.slice(0, -1)); // Remove the last track from history
            setQueue([currentTrack, ...queue].filter(Boolean)); // Add current track back to the queue
            setCurrentTrack(previousTrack);

            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }

            if (previousTrack.startsWith("https")) {
                const audio = new Audio(previousTrack);
                audioRef.current = audio;
                audio.play();
                setIsPlaying(true);
            } else {
                startPlayback(previousTrack);
            }
        } else {
            console.log("No previous track available");
        }
    };

    const playTrack = () => {
        if (!currentTrack && queue.length > 0) {
            playNextTrack();
        } else if (currentTrack) {
            if (audioRef.current) {
                audioRef.current.play();
                setIsPlaying(true);
            } else if (currentTrack.startsWith("https")) {
                const audio = new Audio(currentTrack);
                audioRef.current = audio;
                audio.play();
                setIsPlaying(true);
            } else {
                startPlayback(currentTrack);
                setIsPlaying(true);
            }
        }
    };

    const pausePlayback = async () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            try {
                const response = await fetch("https://api.spotify.com/v1/me/player/pause", {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to pause playback");
                }

                setIsPlaying(false);
            } catch (error) {
                console.error("Error pausing playback:", error);
            }
        }
    };

    return (
        <div className="player">
            <div className="player-main">
                <div className="info">
                    <div className="current">Now Playing</div>
                    <div className="title">{currentTrack ? currentTrack.name || "Podcast" : "No Track"}</div>
                </div>
                <div className="controls">
                    <button className="control-button" onClick={playPreviousTrack}>
                        Previous
                    </button>
                    <button className="control-button" onClick={playTrack} disabled={isPlaying}>
                        Play
                    </button>
                    <button className="control-button" onClick={pausePlayback} disabled={!isPlaying}>
                        Pause
                    </button>
                    <button className="control-button" onClick={playNextTrack}>
                        Next
                    </button>
                    <button
                    className="control-button"
                    onClick={() => {
                        if (audioRef.current) {
                            audioRef.current.pause();
                            audioRef.current.currentTime = 0; // Reset to start
                            audioRef.current = null; // Clear reference
                            setIsPlaying(false);
                            setCurrentTrack(null); // Reset current track
                        }
                    }}
                    disabled={!isPlaying || !currentTrack?.startsWith("https")}
                >
                    Stop the Podcast
                </button>
                </div>
            </div>
        </div>
    );
}

export default Player;