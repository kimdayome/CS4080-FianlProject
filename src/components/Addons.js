import React from "react";
import "./Addons.css";

function Addons({ myAddons, removeFromMyAddons }) {
  return (
      <div className="addons">
          <h3 className="addonsTitle">My Add-ons</h3>
          {myAddons.length > 0 ? (
              <div className="section">
                  {myAddons.map((podcast, index) => (
                      <div key={index} className="my-addon-item">
                          <span>{podcast.title}</span>
                          <audio controls>
                              <source src={podcast.url} type="audio/mp3" />
                          </audio>
                          <button
                              className="my-addon-remove-btn"
                              onClick={() => removeFromMyAddons(podcast)}
                          >
                              X
                          </button>
                      </div>
                  ))}
              </div>
          ) : (
              <p>No add-ons added yet.</p>
          )}
      </div>
  );
}

export default Addons;