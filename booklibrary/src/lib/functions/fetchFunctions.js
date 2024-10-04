export const getdataById = async (id) => {
  const responce = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
    {
      next: { revalidate: 3600 },
    }
  );
  return await responce.json();
};
export const getPostdata = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });
  return await responce.json();
};
export const getComments = async (id) => {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: { revalidate: 3600 },
    }
  );
  return await responce.json();
};
