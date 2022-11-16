const checkForm = inputArr => {
  let isValid = true;

  inputArr.forEach(input => {
    if (input === false) {
      isValid = false;
    }
  });

  return isValid;
};

export default checkForm;
