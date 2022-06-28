import { io } from 'socket.io-client';
import { baseURL } from '../constants';

const socket = io('ws://yemek.alitechbot.uz', {
  transports: ['websocket'],
});

export default socket;
