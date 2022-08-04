import React, { Component } from "react";

const countHits = (WrappedComponent) => {
    class CountHits extends Component {
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

        componentDidUpdate(prevProps, prevState) {
            if(this.state !== prevState) {
                const CompName= WrappedComponent.name;
                this.props.reduceHandler(CompName);
            }
        }

        render() {
            return (
                <WrappedComponent
                    addOneHit={this.addOne}
                    addKick={this.addKick}
                    kameha={this.kamehame}
                    hocState={this.state}
                    {...this.props}
                />
            );
        }
    }

    return CountHits;
};

export default countHits;
