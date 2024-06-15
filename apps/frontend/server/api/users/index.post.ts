import { apiUrl } from '~/server/utils/apiUrl';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return $fetch(apiUrl(event.path), { body, method: event.method });
});
