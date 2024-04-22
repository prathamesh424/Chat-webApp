export function messageTime(dateString){
    const date = new Date(dateString) ;
    const hours = padZero(date.getHours());
    const min = padZero(date.getMinutes());
    return `${hours}:${min}`;
}



function padZero (number) {
    return number.toString().padStart(2 , "0");
}