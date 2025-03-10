import { ERROR_API_MESSAGE, SOCKET_URL } from '../const';
import { Match } from '../types';

export const connectWebSocket = (
  onError: (err: string | null) => void,
  onMessage: (data: Match[]) => void,
) => {
  const socket = new WebSocket(SOCKET_URL);

  socket.onopen = () => {
    console.log('WebSocket connection established');
  };

  socket.onclose = (event) => {
    console.log('WebSocket connection closed:', event.code, event.reason);
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
    onError(ERROR_API_MESSAGE);
  };

  /* eslint-disable */
  socket.onmessage = (message) => {
    try {
      const data = JSON.parse(message.data);
      // console.log('WebSocket mess', data);
      onError(null);
      onMessage(data.data);
    } catch (e) {
      onError(ERROR_API_MESSAGE);
    }
  };
  /* eslint-enable */

  return socket;
};
