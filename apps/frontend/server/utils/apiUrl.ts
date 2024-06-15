const config = useRuntimeConfig();

export const apiUrl = (apiPath: string) => {
  const resource = apiPath.replace('/api', '');
  return `${config.public.apiUrl}${resource}`;
};
