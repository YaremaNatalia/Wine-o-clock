import AuthParams from './authParams';

const enum Messages {
  emailReqErr = 'Email is required',
  passwordReqErr = 'Password is required',
  passwordLengthErr = `Password must be between ${AuthParams.passwordMinLength} and ${AuthParams.passwordMaxLength} characters long`,
  confThePassReqErr = 'Confirmation the password is required',
  firstNameReqErr = 'First name is required',
  firstNameErr = 'First name must contain only letter symbols from the UNICODE table and be at least two letters long',
  lastNameReqErr = 'Last name is required',
  lastNameErr = 'Last name must contain only letter symbols from the UNICODE table and be at least two letters long',
  phoneNumberReqErr = 'Phone number is required',
  phoneNumberErr = 'Phone number must contain 12 digits',
  deliveryTypeErr = 'Please select a delivery method',
}

export default Messages;
