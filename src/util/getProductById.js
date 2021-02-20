const getProductById = (fetch, url, id) => fetch(`${url}/${id}`).then((data) => data.json());

export default getProductById;
