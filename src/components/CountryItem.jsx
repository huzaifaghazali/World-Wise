import styles from './CountryItem.module.css';

import flagemojiToPNG from '../utils/helper';

function CountryItem({ country }) {
  const flagUrl = country.emoji ? flagemojiToPNG(country.emoji) : null;
  return (
    <li className={styles.countryItem}>
      <span>
        <img src={flagUrl} alt='flag' />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
