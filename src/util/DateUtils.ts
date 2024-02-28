export const Months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]


export function isMonth(a: string | number, b: string | number){

    if(typeof a === 'number' && typeof b === 'string'){
        return Months[a] === b
    }
    return false;
}
