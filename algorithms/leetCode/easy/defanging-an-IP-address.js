var defangIPaddr = function (address) {
    return address.replace(/\./g, "[.]");
};


console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));


//mystring = mystring.replace(/\./g, " ");

// const str = "1.1.1.1";

// const spacesReplaced = str.replace(/1./g, "1[.]");
// console.log(spacesReplaced); 