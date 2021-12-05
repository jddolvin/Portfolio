import React from "react";
import { Cards, Charts, CountryPicker } from "../covid-tracker/components";
import { fetchData } from "../covid-tracker/api";
import covidImage from "../images/covid.png";
import styles from "../stylesheets/CovidTracker.module.css";
// eslint-disable-next-line
import Chart from "chart.js/auto";

export default class Covid extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className="noPokemon">There is an issue with the API's endpoint for recovered patients. I have alerted the developer to this issue.</div>
        <img className={styles.image} src={covidImage} alt="COVID-19" />
        <br />
        <div className="blue-text">
          <b>Global and Country Wise Cases of Corona Virus</b>
        </div>
        <br />
        <div className="blue-text">
          <i>(For a particular country select it below)</i>
        </div>

        <Cards data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
