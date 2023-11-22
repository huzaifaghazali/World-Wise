import styles from "./CountryItem.module.css";

// import flagemojiToPNG from '../utils/helper';

const flagemojiToPNG = (flag) => {
  let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join('');

  console.log('country code is = ', countryCode);
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt='flag' />
  );
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
