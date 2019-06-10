import React, { Component } from "react";
import { connect } from "react-redux";
import { Slider, Spin as Spinner } from "antd";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import getChanceOfRain from "helpers/getChanceOfRain";
import { getForecast } from "redux/actions/forecastActions";

import "./style.css"

const pressureMarks = {
    970: "970",
    1030: "1030",
};

const temperatureMarks = {
    10: "10",
    35: "35",
};


export class RainChance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 15,
            pressure: 1010,
            chartData: [],
        };
        this.timer = null;
    }

    componentDidMount() {
        this.props.onGetForecast();
        this.getChartData();
    }

    componentDidUpdate (prevProps) {
        if(this.props.forecast.length !== prevProps.forecast.length) {
            this.getChartData();
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    onChange = (name) => (value) => {
        this.setState({[name]: value});
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.getChartData();
        }, 400);
    };

    getChartData = () => {
        const { pressure, temperature } = this.state;
        const { forecast } = this.props;
        const chartData = forecast.map(day => ({
            ...day,
            ...getChanceOfRain(pressure, temperature, day.amount),
        }));
        this.setState({ chartData });
    };

    render() {
        const { pressure, temperature, chartData } = this.state;
        const { loadingForecast } = this.props;

        if (loadingForecast) return <Spinner size="large" className="forecast-spinner"/>;

        return (
            <div className="rain-chance-container">
                <div className="sliders">
                    <div className="slider pressure-slider">
                        <span className="title">
                            Pressure [hPa]
                        </span>
                        <Slider
                            marks={pressureMarks}
                            included={false}
                            value={pressure}
                            min={970}
                            max={1030}
                            onChange={this.onChange("pressure")}
                        />

                    </div>
                    <div className="slider temperature-slider">
                        <span className="title">
                            Temperature [°C]
                        </span>
                        <Slider
                            marks={temperatureMarks}
                            included={false}
                            value={temperature}
                            min={10}
                            max={35}
                            onChange={this.onChange("temperature")}
                        />
                    </div>
                </div>
                <div className="chart">
                    <ResponsiveContainer width="80%" height="80%">
                        <AreaChart
                            data={chartData}
                            margin={{
                                top: 10, right: 30, left: 0, bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="day"/>
                            <YAxis domain={[0, 100]} />
                            <Tooltip/>
                            <Area type="monotone" dataKey="upperBound" stroke="#8884d8" fill="#8884d8"/>
                            <Area type="monotone" dataKey="mean" stroke="#82ca9d" fill="#82ca9d"/>
                            <Area type="monotone" dataKey="lowerBound" stroke="#ffc658" fill="#ffc658"/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    forecast: state.forecastReducer.forecast,
    loadingForecast: state.forecastReducer.loadingForecast,
});

const mapDispatchToProps = dispatch => ({
    onGetForecast: () => dispatch(getForecast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RainChance);
