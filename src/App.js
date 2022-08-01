import React, { Component } from "react";
import "./App.css";
import Goku from "./Goku";
import Vegeta from "./Vegeta";
import boule from "./boule-de-crystale.png";
import dbz from "./dbz-logo.png";

class App extends Component {
    state = {};
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
                    <Goku name="Goku" />
                </div>
            </div>
        );
    }
}

export default App;
