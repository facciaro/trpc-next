const getBaseUrl = () => {
  if (process.env.URL) return `http://${process.env.URL}:3000/api/trpc`;
  return `http://localhost:3000/api/trpc`;
};

export default getBaseUrl;
