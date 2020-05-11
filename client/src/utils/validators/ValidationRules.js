import {
  email,
  maxBirthday,
  maxLengthCreator,
  minBirthday,
  minLengthCreator,
  passwordsMatch,
  required,
  symbolsName,
} from './validators';

export const BOUNDARY = {
  MAX_LENGTH: 100,
  MIN_LENGTH: 6,
  MIN_LENGTH_NAME: 2,
};

export const minLength = minLengthCreator(BOUNDARY.MIN_LENGTH);
export const maxLength = maxLengthCreator(BOUNDARY.MAX_LENGTH);
const minLengthName = minLengthCreator(BOUNDARY.MIN_LENGTH_NAME);

export const VALIDATION_RULES = {
  BIRTH_DAY: [required, minLength, maxLength, minBirthday, maxBirthday],
  CONFIRM_PASSWORD: [required, minLength, maxLength, passwordsMatch],
  EMAIL: [required, minLength, maxLength, email],
  FIRST_NAME: [required, minLengthName, maxLength, symbolsName],
  LAST_NAME: [required, minLengthName, maxLength, symbolsName],
  PASSWORD: [required, minLength, maxLength],
  USERNAME: [required, minLengthName, maxLength],
};
