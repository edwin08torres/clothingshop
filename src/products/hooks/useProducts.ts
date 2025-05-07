import { useEffect, useState } from "react";

export interface ApiProduct {
  id: number;
  title: string;
  image: string;     
}

export const useProducts = (limit = 20) => {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`) // ropa men/women
      .then(r => r.json())
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [limit]);

  return { products, loading };
};
