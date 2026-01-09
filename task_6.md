## Routes and Cart

1. Utwórz komponent dla kazdego route'u

Kazda strona powinna być w innym src/routes/

- / -> home page
- /products/:id -> product page
- /cart -> cart page
- /checkout -> checkout page

App.tsx powinien renderować tylko router, nie moze bezpośrednio mieć w kodzie HomePage'a.

2. Product Listing powinien wyświetlać urle dla kazdegeo produktu.

3. Product Page powinien wyświetlać zdjęcie, opis, tytuł i cenę produktu.

4. Utwórz slice poświęcony koszykowi.

5. Utwórz poszczególne query i mutacje do manipulowania koszykiem.

6. Utwórz cart page który wyświetla produkty które sa aktualnie w koszyku(I ma mozliwość ich modyfikacji).

Logika koszyka:

1. Jezeli wchodzimy na stronę i w sessionStorage jest cartId to wykorzystaj je jako aktualny koszyk.
2. Jezeli nie ma cartId w sessionStorage to zrób POST i utwórz nowy koszyk i zapisz jego id w sessionStorage.
3. Dodanie/usuwanie z koszyka powinno triggerować mutację do zmiany koszyka(wysłania jego aktualnego stanu do backendu).
