class DateFormatter extends Date {
    getFormattedDate(dateSeparator = '/', timeSeparator = ' ') {
        const dd = String(this.getDate()).padStart(2, '0');
        const mm = String(this.getMonth() + 1).padStart(2, '0');
        const yyyy = this.getFullYear();
        const hour = String(this.getHours()).padStart(2, '0');
        const min = String(this.getMinutes()).padStart(2, '0');
        const date = `${yyyy}${dateSeparator}${mm}${dateSeparator}${dd}${timeSeparator}${hour}:${min}`;
        return date;
    }
}

export default DateFormatter;
