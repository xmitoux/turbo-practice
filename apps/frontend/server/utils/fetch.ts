const config = useRuntimeConfig();

const baseURL = config.public.baseURL;
export const fetch = $fetch.create({ baseURL });
