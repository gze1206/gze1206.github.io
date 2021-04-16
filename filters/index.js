import moment from 'moment-timezone'

const timezone = 'Asia/Seoul';

function toKST(date) {
    if (moment.isMoment(date)) {
        return date.tz(timezone);
    }

    return moment(date).tz(timezone);
}

function formatDate(date) {
    return toKST(date ?? new Date(0)).format('YYYY MM DD HH:mm:ss (zz)')
}

export default {
    TimeZone: timezone,
    toKST,
    formatDate
}
