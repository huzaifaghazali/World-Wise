export const flagemojiToPNG = (flag) => {
   let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
     .map((char) => String.fromCharCode(char - 127397).toLowerCase())
     .join('');
 
   console.log('country code is = ', countryCode);
   return (
     <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt='flag' />
   );
 };