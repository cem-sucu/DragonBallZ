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
        vegeta: 100,
        goku: 100,
    };

    reduceLife = (param) => {
       if(param === "Goku") {
        this.setState({
            vegeta: this.state.vegeta - 10
        })
       } else {
        this.setState({
            goku: this.state.goku - 10
        })
       }
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
                    <img
                        className="scale-up-center"
                        src={dbz}
                        alt="dbz"
                        width={400}
                    />
                    <img
                        id="imgtourne"
                        src={boule}
                        alt="boule-crystale"
                        width={170}
                    />
                </h1>
                <br />

                <div className="row">
                    <Vegeta
                        name="Vegeta"
                        life={this.state.vegeta}
                        reduceHandler={this.reduceLife}
                    />
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
                    <Goku
                        name="Goku"
                        life={this.state.goku}
                        reduceHandler={this.reduceLife}
                    />
                </div>
            </div>
        );
    }
}

export default App;
