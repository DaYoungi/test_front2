import {io} from 'socket.io-client'

const server = io('http://localhost:3000')
export default server