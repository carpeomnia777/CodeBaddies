//function should check to see if a given number is a factor of the base
function checkForFactor(base, factor){
    if (base % factor != 0){
        return false;
    }
    else{
        return true;
    }
}