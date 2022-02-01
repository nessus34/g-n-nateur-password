// tableau rangement carâctère 

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "?,;.:/!§-/*+=}@%µ*$£ê";
const rangeValue = document.getElementById('password-length');
const passwordOuput = document.getElementById('password-output');


function generatePassword () {
    let data = [];
    let password = "";

    // push données dans le tableau data 
    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(number.checked) data.push(...dataNumber);
    if(symbols.checked) data.push(...dataSymbols);

    //alert erreur si aucun criètére est sélectionnés 
    if(data.length === 0 ) {
        alert("veuillez sélectionner des critères !!");
        return;
    }

    for(i = 0; i < rangeValue.value; i++ ) {
       password += (data[Math.floor(Math.random() * data.length)]);
       
    }

    passwordOuput.value = password;

    passwordOuput.select();
    document.execCommand("copy");

    //génerer le text dans le button + temps de transition
    generateButton.textContent = "Copié !";

    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe";
    }, 2000);
};

generateButton.addEventListener('click', generatePassword);