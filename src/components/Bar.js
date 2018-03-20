import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";
//import map from 'lodash/map';

class Bar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.d3Graph = d3.select(ReactDOM.findDOMNode(this.refs.graph));
        this.createGraph(this.props.timerValue);
    }

    componentDidUpdate() {
        if (this.props.currentTime === "not_set") {
            this.createGraph(this.props.timerValue);
        } else {
            this.createGraph(this.props.currentTime);
        }

    }

    removeUnderscore(text) {
        return text.split("_").join(" ");
    }

    createGraph(data0) {


        let data = data0;

        //console.log(this.props)

        var svg = this.d3Graph,
            width = this.props.width,
            height = this.props.height;


        var scaleX = d3.scaleLinear()
            .domain([0, this.props.timerValue])
            .range([0, width]);


        svg.select("g").remove();
        var g = svg.append("g");

        g.append("rect")
            .attr("width", width)
            .attr("height", height)
            .style("fill", "white");

        g.append("rect")
            .attr("width", scaleX(data))
            .attr("height", height)
            .style("fill", "steelblue");

    }



    render() {
        return (
            <div>
                <svg width={this.props.width} height={this.props.height}>
                    <g ref='graph' />
                </svg>
            </div>

        );
    }
}

export default Bar;