import { apiUrl } from '~/server/utils/apiUrl';

export default defineEventHandler((event) => {
  return $fetch(apiUrl(event.path), { method: event.method });
});
