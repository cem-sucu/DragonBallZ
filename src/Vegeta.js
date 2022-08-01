import React, { Component } from "react";
import vegeta from "./vegeta.png";
import "./App.css";

class Vegeta extends Component {
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
    render() {
        return (
            <div className="col">
                <img src={vegeta} alt="vegeta" height={570} /> <br />
                <button onClick={this.addOne} className="btn">
                    {this.props.name} Frappe
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
