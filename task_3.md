## Task 3, Konfiguracja RTK Query

Celem jest dodanie warstwy komunikacji z mock REST API (json-server) za pomocą RTK Query. W ramach zadania trzeba przygotować dwa query endpointy:

1. categories query

Ma pobierać listę kategorii z endpointu: GET /categories

Wynikiem ma być tablica kategorii (lista do filtrowania produktów w UI)

2. products query

Ma pobierać listę produktów z endpointu: GET /products

Powinno wspierać co najmniej:

pobranie wszystkich produktów

filtrowanie po kategorii (np. GET /products?categoryId=1)

(Opcjonalnie, jeśli przydatne w UI) wyszukiwanie: GET /products?q=ring oraz sortowanie: GET /products?\_sort=price&\_order=asc

Typy danych:

```ts
export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Product = {
  id: number;
  name: string;

  // Relacja do kategorii
  categoryId: number;

  // Ceny / meta
  price: number;
  currency: string; // np. "USD"
  discountPercent: number; // 0..100

  // Oceny
  rating: number; // np. 4.8
  reviewsCount: number;

  // Opis produktu
  material: string; // np. "925 Sterling Silver"
  stone: string; // np. "Round Cut Cubic Zircon"
  weight: string; // np. "0.4 ct"
  description: string;

  // Media
  images: string[]; // np. ["/images/products/pink-diamond-1.png", ...]

  // Flagi
  isFeatured: boolean;
  inStock: boolean;
};
```

Jak odpalić mockowe API?

- npm install
- npm run server
