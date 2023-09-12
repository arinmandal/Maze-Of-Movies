export const checkValidData = (name, email, password) => {
  const isValidName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(password)

  if(!isValidName) return "Name is not valid"
  if (!isEmailValid) return "Email is not valid"
  if (!isPasswordValid) return "Password is not valid"

  return null;
}