import { getDaysInYear, getDaysInMonth, endOfYear, differenceInDays } from 'date-fns'

function getDaysLeftInYear(date: Date) {
    const lastDayOfYear = endOfYear(date);
    const daysLeft = differenceInDays(lastDayOfYear, date);
    return daysLeft;
}

// export function getYearProgress(date: Date) {
//     return (getDaysInYear(date) - getDaysLeftInYear(date)) / getDaysInYear(date);
// }

// export const getMonthProgress = (date: Date) => date.getDate() / getDaysInMonth(date);
// export const getWeekProgress = (date: Date) => (date.getDay() + 1) / 7;
// export const getDayProgress = (date: Date) => (date.getHours() * 60 + date.getMinutes()) / 1440;
// export const getHourProgress = (date: Date) => date.getMinutes() / 60;
// export const getMinuteProgress = (date: Date) => date.getSeconds() / 60;

export function getYearProgress(date: Date) {
    return ((getDaysInYear(date) - getDaysLeftInYear(date)) * 24 + date.getHours()) / 24;
}
export const getMonthProgress = (date: Date) => ((date.getDate() - 1) * 24 + date.getHours()) / 24;
export const getWeekProgress = (date: Date) => ((date.getDay() ) * 24 + date.getHours()) / 24;
export const getDayProgress = (date: Date) => (date.getHours() * 60 + date.getMinutes()) / 60;
export const getHourProgress = (date: Date) => date.getMinutes();
export const getMinuteProgress = (date: Date) => date.getSeconds();

