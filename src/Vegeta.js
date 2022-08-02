import React, { Component } from "react";
import vegeta from "./vegeta.png";
import "./App.css";
import superSaiyan from "./saiyan.gif";

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

    render() {
        return (
            <div className="col">
                {this.state.show ? (
                    <div id="ss">
                        <img
                            className="saiyan"
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
                <button onClick={this.addOne} className="btn">
                    {this.props.name} poing Kikôha
                </button>
                <button onClick={this.addKick} className="btn">
                    {this.props.name} Gamma Burst Flash
                </button>
                <button onClick={this.kamehame} className="btn">
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
