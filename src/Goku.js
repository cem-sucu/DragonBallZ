import React, { Component } from "react";
import goku from "./Goku.jpg";
import "./App.css";
import superSaiyan from "./saiyan.gif";

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
                <button onClick={this.addOne} className="btn">
                    {this.props.name} coup de poing Kikôha
                </button>
                <button onClick={this.addKick} className="btn">
                    {this.props.name} coup de pied Kienzan
                </button>
                <button onClick={this.kamehame} className="btn">
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
