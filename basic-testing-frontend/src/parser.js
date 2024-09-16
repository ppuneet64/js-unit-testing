export function extractNumbers(formData) {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  return [num1Input, num2Input];
}

export const extractFormValues = (form) => {
  const formData = new FormData(form);
  return extractNumbers(formData);
}

export const calculateResults = (numberInputs) => {
  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
}

