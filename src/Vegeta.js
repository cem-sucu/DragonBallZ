import React, { Component } from "react";
import vegeta from "./assets/images/vegeta.png";
import "./App.css";
import superSaiyan from "./assets/images/saiyan.gif";
import finalFlash from "./assets/music/vegeta-final-flash.mp3";
import punch from "./assets/music/punch.mp3"
import kamehameha from "./assets/music/kamehameha.mp3"


class Vegeta extends Component {
    state = {
        hits: 0,
        show: false,
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

    finalFlashBtn = () => {
        new Audio(finalFlash).play();
    };

    superSaiyanBtn = () => {
        new Audio(superSaiyan).play();
    }

    punchBtn = () => {
        new Audio(punch).play();
    }

    kamehamehaBtn = () => {
        new Audio(kamehameha).play();
    }
    
    render() {
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
                <img
                    className="vegeta"
                    src={vegeta}
                    alt="vegeta"
                    height={570}
                />{" "}
                <br />
                <button onClick={this.punchBtn} className="btn">
                    {this.props.name} poing Kikôha
                </button>
                <button onClick={this.finalFlashBtn} className="btn">
                    {this.props.name} Final Flash
                </button>
                <button onClick={this.kamehamehaBtn} className="btn">
                    {this.props.name} Kamehameha
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

export default Vegeta;
