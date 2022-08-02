import React, { Component } from "react";
import goku from "./assets/images/Goku.jpg";
import "./App.css";
import superSaiyan from "./assets/images/saiyan.gif";
import punch from "./assets/music/punch.mp3";
import kamehameha from "./assets/music/kamehameha.mp3";
import dragonPunch from "./assets/music/dragon-punch.mp3"

class Goku extends Component {
    state = {
        hits: 0,
    };

    addOne = () => {
        this.setState((prevState) => {
            return {
                hits: prevState.hits + 1,
            };
        });
    };
    addKick = () => {
        this.setState((prevState) => {
            return {
                hits: prevState.hits + 15,
            };
        });
    };
    kamehame = () => {
        this.setState((prevState) => {
            return {
                hits: prevState.hits + 50,
            };
        });
    };

    punchBtn = () => {
        new Audio(punch).play();
    };

    kamehamehaBtn = () => {
        new Audio(kamehameha).play();
    }

    dragonPunchBtn = () => {
        new Audio(dragonPunch).play();
    }

    render() {
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
                <img className="goku" src={goku} alt="Goku" height={570} />{" "}
                <br />
                <button onClick={this.punchBtn} className="btn">
                    {this.props.name} coup de poing Kikôha
                </button>
                <button onClick={this.dragonPunchBtn} className="btn">
                    {this.props.name} dragon punch multpiple
                </button>
                <button onClick={this.kamehamehaBtn} className="btn">
                    {this.props.name} kamehameha ultime
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.hits}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Goku;
