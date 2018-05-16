function passwordGenerator() {
    let passwordLength = 8;
    let password = '';
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < 8; i++) {
      password += charSet.charAt(Math.floor(Math.random() * 62));
    }
    return password;
}