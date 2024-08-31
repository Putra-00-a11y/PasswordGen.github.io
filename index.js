let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let saveA = document.getElementById('saveA');

function generatePassword() {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "!@#$%^&*()_+-=,.:;'[]{}<>~/?";

    const data = lowerAlphabet + upperAlphabet + numeric + symbol;
    let generate = '';
    for (let index = 0; index < 5; index++) {
        generate += data[~~(Math.random() * data.length)];
        if (passwordLength.value > 5) {
            alert('Password Anda Terlalu Panjang!');
            return generate = '';
        };
    };
    return generate;
};

function getPassword() {
    const newPassword = generatePassword(passwordLength.value);
    if (passwordLength.value > 5) {
        console.log('Buat Ulang Password!');
        let passwordData = document.getElementById('password').value = '';
        return passwordData;
    }
    else {
        password.value = newPassword;
        setTimeout(() => {
            alert('Password Has Been Generated!');
        }, 500);
    };
};

function savePassword() {
    document.title = password.value;
    saveA.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(` Password Saya : ${document.title}`));
    saveA.setAttribute('download', 'MyPasswordGenerator.txt');
    setTimeout(() => {
        alert('Password Berhasil Disimpan..');
    }, 2000);
};