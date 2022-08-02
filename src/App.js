import React, { Component } from "react";
import "./App.css";
import Goku from "./Goku";
import Vegeta from "./Vegeta";
import boule from "./assets/images/boule-de-crystale.png";
import dbz from "./assets/images/dbz-logo.png";
import song from "./assets/music/song.mp3";

class App extends Component {
    state = {
        audio: new Audio(song),

        isPlaying: false,
    };

    playPause = () => {
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            this.state.audio.pause();
        } else {
            this.state.audio.play();
        }

        this.setState({ isPlaying: !isPlaying });
    };

    render() {
        return (
            <div className="container text-center">
                <h1>
                    <img
                        id="imgtourne"
                        src={boule}
                        alt="boule-crystale"
                        width={170}
                    />
                    <img id="logo" src={dbz} alt="dbz" width={400} />
                    <img
                        id="imgtourne"
                        src={boule}
                        alt="boule-crystale"
                        width={170}
                    />
                </h1>
                <br />

                <div className="row">
                    <Vegeta name="Vegeta" />
                    <p className="versus">Vs</p>
                    <div className="song">
                        <p>
                            {this.state.isPlaying
                                ? "Musique en cours"
                                : "Musique sur pause"}
                        </p>

                        <button className="songBtn" onClick={this.playPause}>
                            Play | Pause
                        </button>
                    </div>
                    <Goku name="Goku" />
                </div>
            </div>
        );
    }
}

export default App;
