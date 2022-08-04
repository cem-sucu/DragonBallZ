import React, { Component } from "react";
import vegeta from "./assets/images/vegeta.png";
import "./App.css";
import superSaiyan from "./assets/images/saiyan.gif";
import finalFlash from "./assets/music/vegeta-final-flash.mp3";
import punch from "./assets/music/punch.mp3";
import kamehameha from "./assets/music/kamehameha.mp3";
import countHits from "./countHits";

class Vegeta extends Component {
    state = {
        show: false,
    };
    // effets sonore
    finalFlashBtn = () => {
        new Audio(finalFlash).play();
    };
    // effets sonore
    superSaiyanBtn = () => {
        new Audio(superSaiyan).play();
    };
    // effets sonore
    punchBtn = () => {
        new Audio(punch).play();
    };
    // effets sonore
    kamehamehaBtn = () => {
        new Audio(kamehameha).play();
    };

    render() {
        const { name, addOneHit, hocState, addKick, kameha, life } = this.props;
        return (
            <div className="col">
                {this.state.show ? (
                    <div id="ss">
                        <img
                            className="saiyanV"
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
                <img
                    className="vegeta"
                    src={vegeta}
                    alt="vegeta"
                    height={570}
                />{" "}
                <br />
                <button onClick={addOneHit} className="btn">
                    {name} coup de poing Kikôha
                </button>
                <button onClick={addKick} className="btn">
                    {name} Final Flash
                </button>
                <button onClick={kameha} className="btn">
                    {name} Kamehameha
                </button>
                <button
                    onClick={() => {
                        this.setState({ show: true });
                    }}
                    className="btn"
                >
                    {this.props.name} transformation
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

export default countHits(Vegeta);
