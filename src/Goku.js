import React, { Component } from "react";
import goku from "./assets/images/Goku.jpg";
import "./App.scss";
import superSaiyan from "./assets/images/saiyan.gif";
import punch from "./assets/music/punch.mp3";
import kamehameha from "./assets/music/kamehameha.mp3";
import dragonPunch from "./assets/music/dragon-punch.mp3";
import countHits from "./countHits";
import modeSaiyan from "./assets/music/super-saiyan-2.mp3"

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
    // effets sonore
    superSaiyanBtn = () => {
        new Audio(modeSaiyan).play();
    };


    render() {
        const { name, addOneHit, hocState, addKick, kameha, life } = this.props;

        const lifeValue =
            life > 0 ? (
                <td>{life} %</td>
            ) : (
                <td>
                    <span className="dead">Perdu</span>
                </td>
            );

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
                                <tr>{lifeValue}</tr>
                            </tbody>
                        </tr>
                    </thead>
                </table>
                <img className="goku" src={goku} alt="Goku" height={570} />{" "}
                <br />
                <button onClick={addOneHit} className="btn">
                    {name} coup de poing Kikôha <button onClick={this.punchBtn}>🔊</button>
                </button>
                <button onClick={addKick} className="btn">
                    {name} dragon punch multpiple <button onClick={this.dragonPunchBtn}>🔊</button>
                </button>
                <button onClick={kameha} className="btn">
                    {name} kamehameha ultime <button onClick={this.kamehamehaBtn}>🔊</button>
                </button>
                <button
                    onClick={() => {
                        this.setState({ show: true });
                    }}
                    className="btn"
                >
                    {name} transformation <button onClick={this.superSaiyanBtn}>🔊</button>
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
