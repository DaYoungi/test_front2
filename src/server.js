import {io} from 'socket.io-client'

const server = io('https://ct-server.onrender.com')
export default server