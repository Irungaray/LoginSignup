import pino from 'pino'
import dayjs from 'dayjs'

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
        },
    },
    base: {
        pid: false
    },
    timestamp: () => `,"time":"🕰  ${dayjs().format('DD/MM/YY - HH:MM')}"`,
})

export { logger }
