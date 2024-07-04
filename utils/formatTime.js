import moment from "moment/moment";

export const formattedDate = (value) => {
    if (!value) return ""
    return moment(value * 1000).format('hh:mm MM/DD/YYYY')
};

export const formattedDateTour = (value) => {
    if (!value) return ""
    return moment(value).format('DD/MM/YYYY HH:mm:ss')
};

export const formatTimeVPoster = (data) => {
    if (data?.start_date_tour && data?.end_date_tour) {
        const startDate = moment(data?.start_date_tour).format('DD MMM');
        return moment(data?.end_date_tour).format(`[${startDate}] - DD MMM YYYY`)
    }

    const timestamp = data?.utc_time_start

    const today = moment().startOf('day');

    const eventTime = moment(timestamp * 1000);

    const isToday = today.isSame(eventTime, 'day');
    let formattedTime;
    if (isToday) {
        formattedTime = eventTime.format('HH[h]:mm[m]');
    } else {
        formattedTime = eventTime.format('DD MMM, YYYY');
    }
    return formattedTime
}

export const formatTimeSchedule = (data) => {
    if (data?.start_date_tour && data?.end_date_tour) {
        const startDate = moment(data?.start_date_tour).format('DD MMM');
        return moment(data?.end_date_tour).format(`[${startDate}] - DD MMM YYYY`)
    }

    const today = moment().startOf('day');

    const eventTime = moment(data?.utc_time_start * 1000);

    const isToday = today.isSame(eventTime, 'day');
    let formattedTime;
    if (isToday) {
        formattedTime = eventTime.format('[Watch live at] h:mm A');
    } else {
        formattedTime = eventTime.format('ddd, DD MMM [• Watch live at] h:mm A');
    }
    return formattedTime
}

export const calculatorTimeStart = (data) => {
    let timestamp = 0

    if (data?.start_date_tour) {
        timestamp = moment(data?.start_date_tour, "YYYY-MM-DD HH:mm:ss").unix()
    } else if (data?.utc_time_start) {
        timestamp = data?.utc_time_start * 1000
    }

    const currentTime = moment();

    const initialTime = moment(timestamp);

    if (initialTime.isBefore(currentTime)) {
        return null;
    }

    const duration = moment.duration(initialTime.diff(currentTime));

    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) - hours * 60;

    return hours + 'h ' + minutes + 'm'
}

export const calContDown = (data, hiddenSecond = false) => {
    if (!data) {
        return null
    }

    let timeStart = 0

    if (data?.start_date_tour) {
        timeStart = moment(data?.start_date_tour, "YYYY-MM-DD HH:mm:ss").unix();
    } else if (data?.utc_time_start) {
        timeStart = data?.utc_time_start * 1000;
    }

    const initialTime = moment(timeStart)

    const currentTime = moment();

    if (initialTime.isBefore(currentTime)) {
        return null;
    }

    const duration = moment.duration(initialTime.diff(currentTime));

    if (duration.asSeconds() === 0) return null;

    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) - hours * 60;
    const seconds = Math.floor(duration.asSeconds()) - hours * 3600 - minutes * 60;

    if (hiddenSecond) return `${hours}h : ${minutes}m`
    return `${hours}:${minutes}:${seconds}`
}

export const calContDownHot = (data) => {
    if (!data) {
        return null
    }

    let timeStart = 0

    if (data?.start_date_tour) {
        timeStart = timeStart = moment(data?.start_date_tour, "YYYY-MM-DD HH:mm:ss").unix();
    } else if (data?.utc_time_start) {
        timeStart = data?.utc_time_start * 1000;
    }

    const initialTime = moment(timeStart)

    const currentTime = moment();

    if (initialTime.isBefore(currentTime)) {
        return null;
    }

    const duration = moment.duration(initialTime.diff(currentTime));

    if (duration.asSeconds() === 0) return null;

    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.asHours()) - days * 24;
    const minutes = Math.floor(duration.asMinutes()) - days * 24 * 60 - hours * 60;
    const seconds = Math.floor(duration.asSeconds()) - days * 24 * 60 - hours * 3600 - minutes * 60;

    if (days < 1) {
        if (hours < 1) {
            return `${minutes}m : ${seconds}s`
        }
        return `${hours}h : ${minutes}m`
    }

    return `${days}d : ${hours}h`
}

export const formatDuration = (value) => {
    if (!value) return ""

    const duration = moment.duration(value, 'seconds');
    return moment.utc(duration.asMilliseconds()).format('HH:mm:ss');
}

export const formatDurationNotMoment = (row) => {
    if (!row?.alive) return '';
    const time = Math.floor(row?.alive);
    const hours = Math.floor(time / (60 * 60));
    const minutes = Math.floor(time / 60) - (hours * 60);
    const seconds = time - (hours * 3600) - (minutes * 60);
    return `${hours}:${minutes}:${seconds}`;
};
