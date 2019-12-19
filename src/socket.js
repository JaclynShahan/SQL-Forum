import socketIOClient from 'socket.io-client'

const endpoint = "http:/localhost:3434"

export const socket = socketIOClient(endpoint)