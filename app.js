
// +996 555 444 666
// 0555444666
// 996 (555) 444-666
function formatPhone(phoneNumber) {
    let result = "";
    for (let char of phoneNumber) {
        if (char >= "0" && char <= "9") {
            result += char;
        }
    }

    if (result.startsWith("0"))
        result = result.slice(1);

    if (result.length !== 12)
        result = "996" + result;

    return result;
}

function getOperatorCode(phoneNumber) {
    return phoneNumber.slice(3, 5)
}


function checkNurtelecom(code) {
    let codes = ["50", "70"];
    return codes.includes(code);
}

function checkMega(code) {
    let codes = ["55"];
    return codes.includes(code);
}
function checkBeeline(code){
    let codes = ["77" ,"22"];
    return codes.includes(code)
}
// 996555444666
function detectOperator(phoneNumber) {

    let formattedPhoneNumber = formatPhone(phoneNumber);
    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if (checkNurtelecom(operatorCode))
        return "O!";

    if (checkMega(operatorCode))
        return "Mega";

    if(checkBeeline(operatorCode))
        return "Beeline";

    return "ERROR";
}

console.log(detectOperator("996770444666"))

console.log(detectOperator("996700444666"))


function hidePhone(phoneNumber) {
    return phoneNumber.slice(0, -2)+"xx";
}

console.log(hidePhone("+996 555 123 123"))


function capitalize(string) {
    return string[0].toUpperCase()+string.slice(1).toLowerCase();
}

console.log(capitalize("vIRUS"))
