import React from 'react';
import Spinner from './Spinner';
import styles from './CountryList.module.css';
import CountryItem from './CountryItem';
import Message from './Message';

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );

  // 1.  arr.map((el) => el.country) creates an array containing the names of countries that are already in the accumulator (arr).
  // 2.  (!arr.map((el) => el.country).includes(city.country)) This checks if the current city's country is not already present in the accumulator (arr). It does this by creating a new array (arr.map((el) => el.country)) with only the country names and then checking if the current city's country is not included in that array.
  // 3.  If the country is not present, the callback function adds a new object to the accumulator array with the country and emoji of the current city.
  // 4.  If the country is present, the callback function returns the accumulator array unchanged.
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
