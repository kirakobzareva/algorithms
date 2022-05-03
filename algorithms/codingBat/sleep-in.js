export function sleepIn(weekday, vacation) {
    if(weekday === false && vacation === false){
        return true;
    } else if(weekday === true && vacation === false){
        return false;
    } else if(weekday === false && vacation === true){
        return true;
    }
    return true;
}
