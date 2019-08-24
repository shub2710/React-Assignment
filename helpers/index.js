export const generateArray = (number) =>{
return [...Array(parseInt(number)).keys()] || []
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}