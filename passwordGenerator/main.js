function passwordGenerator() {
    let passwordLength = parseInt(
      prompt('How long would you like your password to be?', 20)
      .trim()
      .replace(/[^0-9]/gi, ''));
    let password = '';
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < passwordLength; i++) {
      password += charSet.charAt(Math.floor(Math.random() * 62));
    }
    return password;
}