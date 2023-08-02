/*import { PhoneNumberUtil, PhoneNumberFormat } from 'libphonenumber-js';

const phoneNumberUtil = PhoneNumberUtil.getInstance();

// Manejar el evento click del botón "Enviar"
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
  const countrySelect = document.getElementById('country');
  const countryCode = countrySelect.value;

  const phoneNumberInput = document.getElementById('phoneNumberInput');
  const phoneNumberStr = phoneNumberInput.value;

  try {
    const phoneNumber = phoneNumberUtil.parse(phoneNumberStr, countryCode);
    const isValid = phoneNumberUtil.isValidNumber(phoneNumber);
    const formattedNumber = phoneNumberUtil.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL);

    console.log('Número de teléfono parseado:', phoneNumber);
    console.log('El número de teléfono es válido:', isValid);
    console.log('Número de teléfono formateado:', formattedNumber);
  } catch (error) {
    console.error('Error al parsear el número de teléfono:', error);
  }
});
*/