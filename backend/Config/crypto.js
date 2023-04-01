import CryptoJS from 'crypto-js';

const CRYPTO_SECRET_KEY = 'CQLSYS123';

export const encryption = (password) => {
  const encryptPassword = CryptoJS.AES.encrypt(
    password,
    CRYPTO_SECRET_KEY
  ).toString();
  return encryptPassword;
};
// console.log(process.env.CRYPTO_SECRET_KEY);
const check = 'U2FsdGVkX197lmHfAWRcGvL375Azc2PuLRxpnqLQsKo=';

export const decryption = (encrPassword) => {
  try {
    const decryptPassword = CryptoJS.AES.decrypt(
      encrPassword,
      CRYPTO_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    return decryptPassword;
  } catch (error) {
    console.log('===', error);
  }
};
