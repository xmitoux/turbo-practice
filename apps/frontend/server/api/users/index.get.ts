import { fetch } from '~/server/utils/fetch';

export default defineEventHandler((event) => {
  return fetch(event.path, { method: event.method });
});
