export const isToday = (date: string) => {
    const today = new Date()
    const d = new Date(date)
    return d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear()
}