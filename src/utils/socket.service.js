import { io } from 'socket.io-client';
import { baseURL } from '../constants';

const socket = io('https://yemek.alitechbot.uz', {
  transports: ['websocket'],
});

export default socket;
