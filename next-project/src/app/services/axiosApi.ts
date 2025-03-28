import axios from 'axios';

const api = axios.create({
  baseURL: 'https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/');
    console.log('Fetched products:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error); 
    throw new Error('Erro ao buscar produtos');
  }
};

// POST Novo produto
export const createProduct = async (product: { title: string; body: string; imageUrl: string }) => {
  try {
    const response = await api.post('/', product);
    console.log('Created product:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error); 
    throw new Error('Erro ao criar produto');
  }
};

export default api;