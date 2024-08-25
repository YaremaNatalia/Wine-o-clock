// const regExp = {
//   phoneNumber: /^d{12}$/,
//   name: /^\p{L}{2,}$/,
// };

const regExp = {
  phoneNumber: /^\+\d{7,}$/,
  name: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
};

export default regExp;
