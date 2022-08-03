const validateEmail = function (email) {
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return reg.test(email);
};

const validatePassword = function (password) {
  const regtest =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return regtest.test(password);
};

module.exports = { validateEmail, validatePassword };
