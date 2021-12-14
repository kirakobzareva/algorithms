

function timeConversion(s) {
    let hours = s.substr(0, 2);
    let hoursInInt = parseInt(hours);

    if (s.includes("AM")) {
        if (hours === "12") {
            let newString = s.replace(hours, "00");
            return newString.replace("AM", "");
        } else {
            return s.replace("AM", "");
        }

    } else if (s.includes("PM")) {
        if (hours === "12") {
            return s.replace("PM", "");
        } else {
            let newPart = hoursInInt + 12;
            let newString = s.replace(hours, newPart);
            return newString.replace("PM", "");
        }
    }

}

console.log(timeConversion("12:45:54PM"));