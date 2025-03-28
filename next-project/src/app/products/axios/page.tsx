'use client';
import { useEffect, useState } from 'react';
import { fetchProducts, createProduct } from '../../services/axiosApi'

interface Product {
  id: number;
  title: string;
  body: string;
  imageUrl?: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({ title: '', body: '', imageUrl: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar produtos');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.title || !formData.body || !formData.imageUrl) {
      setError('Preencha todos os campos');
      return;
    }

    try {
      setLoading(true);
      const newProduct = await createProduct(formData);
      setProducts([...products, newProduct]);
      setFormData({ title: '', body: '', imageUrl: '' });
      setSuccess('Produto criado com sucesso!');
    } catch (err) {
      setError('Erro ao criar produto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Produtos</h1>

      <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Título:</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Descrição:</label>
          <textarea
            className="w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">URL da Imagem:</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          />
        </div>

        {error && <div className="mb-4 text-red-600">{error}</div>}
        {success && <div className="mb-4 text-green-600">{success}</div>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Enviando...' : 'Cadastrar Produto'}
        </button>
      </form>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded bg-white shadow">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 mt-2">{product.body}</p>
            {product.imageUrl && <img src={product.imageUrl} alt={product.title} className="mt-2" />}
          </div>
        ))}
      </div>
    </div>
  );
}