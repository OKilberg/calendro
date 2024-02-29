const date = new Date();
export const currentMonth = date.getMonth();
export const currentYear = date.getFullYear();

export const Months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export const Weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

export const MinYear = 2020;
export const MaxYear = 2050;

export function yearOptions(){
    let yearOptions: number[] = []
    for (let i = MinYear; i <= MaxYear; i++){
        yearOptions.push(i)
    }
    return yearOptions
} 

export function isMonth(a: string | number, b: string | number) {

    if (typeof a === 'number' && typeof b === 'string') {
        return Months[a] === b
    }
    // TODO - add other cases
    return false;
}

export function getMonthName(m: number){
    return Months[m]
}

export function getDateWeekday(y: number, m: number, d: number) {
    const date = new Date(y, m, d)
    console.log(Weekdays[date.getDay()])
    return Weekdays[date.getDay()]
}

export function getDateWeekdayInitials(y: number, m: number, d: number, n: number) {
    return getDateWeekday(y, m, d).slice(0, n)
}
