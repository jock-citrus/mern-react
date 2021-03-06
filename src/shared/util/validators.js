const VALIDATOR_TYPE_REQUIRED = 'REQUIRED';
const VALIDATOR_TYPE_MIN_LENGTH = 'MIN_LENGTH';
const VALIDATOR_TYPE_MAX_LENGTH = 'MAX_LENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';

export const VALIDATOR_REQUIRED = () => ({ type: VALIDATOR_TYPE_REQUIRED });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MIN_LENGTH = val => ({
  type: VALIDATOR_TYPE_MIN_LENGTH,
  val: val
});
export const VALIDATOR_MAX_LENGTH = val => ({
  type: VALIDATOR_TYPE_MAX_LENGTH,
  val: val
});
export const VALIDATOR_MIN = val => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = val => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRED) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MIN_LENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX_LENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (!isValid) {
      return isValid;
    }
  }
  return isValid;
};