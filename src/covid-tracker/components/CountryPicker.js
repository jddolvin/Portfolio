import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "../../stylesheets/CountryPicker.module.css";
import { fetchCountries } from "../api";
import { makeStyles } from "@material-ui/core/styles";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  const useStyles = makeStyles({
    input: {
      color: "#5bc0de",
    },
  });
  const classes = useStyles();
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        inputProps={{className: classes.input}}
        defaultValue=""
        labelStyle={{ color: "skyblue" }}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, key) => (
          <option key={key} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
