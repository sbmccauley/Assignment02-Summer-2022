// let entry1 = prompt('Enter a whole number.');
// let entry2 = prompt('Enter another whole number.');


// if (entry1 > entry2) {
//     document.write(`${entry1} is the larger of your entries`);
// } else if (entry2 > entry1){
//     document.write(`${entry2} is the larger of your entries`);
// } else {
//     document.write('You entered equal numbers.')
// }

let languageCode = prompt('Please indicate what language you would like to use. \n"es" = Espanol (Spanish)\n"de" = Deutch (German)\n"en" = English \n"fr" = French');

switch (languageCode) {
    case 'es': 
        console.log('Hello World translated in Spanish is:  Hola Mundo.');
        break;
    case 'de':
        console.log('Hello World translated in German is:  Hallo Welt.');
        break;    
    case 'fr':
        console.log('Hello World translated in French is Boujour le monde.');
    case 'en':
        console.log('You chose English!  Of course Hello World, translates to Hello World!');
        break;
    default: 
        console.log('Hello World!');
}