import React, { Component } from "react";
import goku from "./assets/images/Goku.jpg";
import "./App.css";
import superSaiyan from "./assets/images/saiyan.gif";
import punch from "./assets/music/punch.mp3";
import kamehameha from "./assets/music/kamehameha.mp3";
import dragonPunch from "./assets/music/dragon-punch.mp3";
import countHits from "./countHits";

class Goku extends Component {
    state = {
        show: false,
    };
    // effets sonore
    punchBtn = () => {
        new Audio(punch).play();
    };
    // effets sonore
    kamehamehaBtn = () => {
        new Audio(kamehameha).play();
    };
    // effets sonore
    dragonPunchBtn = () => {
        new Audio(dragonPunch).play();
    };

    render() {
        const { name, addOneHit, hocState, addKick, kameha, life } = this.props;
        return (
            <div className="col">
                {this.state.show ? (
                    <div id="ss">
                        <img
                            className="saiyanG"
                            src={superSaiyan}
                            alt="saiyan"
                        />
                    </div>
                ) : (
                    true
                )}
                <table className="jaugeVie">
                    <thead>
                        <tr>
                            <th scope="col">Vie</th>
                            <tbody>
                                <tr>
                                    <td>{life} %</td>
                                </tr>
                            </tbody>
                        </tr>
                    </thead>
                </table>
                <img className="goku" src={goku} alt="Goku" height={570} />{" "}
                <br />
                <button onClick={addOneHit} className="btn">
                    {name} coup de poing Kikôha
                </button>
                <button onClick={addKick} className="btn">
                    {name} dragon punch multpiple
                </button>
                <button onClick={kameha} className="btn">
                    {name} kamehameha ultime
                </button>
                <button
                    onClick={() => {
                        this.setState({ show: true });
                    }}
                    className="btn"
                >
                    {name} transformation
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                            {/* <th scope="col">Vie</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            {/* <td>{life} %</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default countHits(Goku);
