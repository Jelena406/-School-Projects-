export const passwordMap = [
  {className: 'too-weak', label: 'Too Weak!'},
  {className: 'weak', label: 'Weak'},
  {className: 'medium', label: 'Medium'},
  {className: 'strong', label: 'Strong'},
];
export function passwordStrength({charactersLength = 0, uppercase, lowercase, numbers, symbols}) {
  let score = charactersLength / 3;
  if (!score) return 0;
  if (uppercase) score += 2;
  if (lowercase) score += 1;
  if (numbers) score += 1;
  if (symbols) score += 2.5;

  // output ===  return
  if (score < 4) return 0;
  if (score < 7 && score > 4) return 1;
  if (score < 9) return 2;
  return 3;
}

export function disableButton(options) {
  return (!options.uppercase && !options.lowercase && !options.numbers && !options.symbols) || !options.charactersLength;
}

export function generatePassword({charactersLength = 0, uppercase, lowercase, numbers, symbols}) {
  const uCase = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
  const lCase = 'abcdefghijklmnopqrstuvxyz';
  const nums = '1234567890';
  const syms = '`~!@#$%^&*()-=_+|[]{};:,<>./?';
  //1234567890
  let password = '';
  let output = '';
  if (uppercase) password += uCase;
  if (lowercase) password += lCase;
  if (numbers) password += nums;
  if (symbols) password += syms;
  for (let i = 0; i < charactersLength; i++) {
    output += password[Math.floor(Math.random() * password.length)];
  }
  return output;
}
