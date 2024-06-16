import { fetch } from '~/server/utils/fetch';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return fetch(event.path, { body, method: event.method });
});
