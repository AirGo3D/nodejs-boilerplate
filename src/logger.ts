import * as winston from "winston"

const consoleOptions: winston.transports.ConsoleTransportOptions = {
  level: process.env.logLevel,
  handleExceptions: true
}

const fileOptions: winston.transports.FileTransportOptions = {
  level: process.env.logLevel,
  filename: process.env.logPath,
  handleExceptions: true,
  maxFiles: 100,
  maxsize: 5242880, // 5MB
}

const logger = winston.createLogger({
  level: process.env.logLevel,
  exitOnError: false,
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(consoleOptions),
    new winston.transports.File(fileOptions),
  ]
})

export default logger