export const Months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export const Weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]


export function isMonth(a: string | number, b: string | number) {

    if (typeof a === 'number' && typeof b === 'string') {
        return Months[a] === b
    }
    return false;
}

export function getDateWeekday(y: number, m: number, d: number) {
    const date = new Date(y, m, d)
    console.log(Weekdays[date.getDay()])
    return Weekdays[date.getDay()]
}

export function getDateWeekdayInitials(y: number, m: number, d: number, n: number) {
    return getDateWeekday(y, m, d).slice(0, n)
}
