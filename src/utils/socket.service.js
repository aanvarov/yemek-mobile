import { io } from 'socket.io-client';
import { baseURL } from '../constants';

const socket = io('ws://localhost:4001', {
  transports: ['websocket'],
});

export default socket;
