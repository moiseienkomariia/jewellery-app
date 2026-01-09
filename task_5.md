## Task 5 - architektura strony glownej i filtrowania

1. Utworz nowy slice w src/store który będzie trzymał filtry do listingu produktów
2. Utwórz selektory(store/selectors.ts) do pobierania filtrów(wyszukiwanego słowa i wyszukiwanej kategorii)
3. Rozszerz query w rtk query do pobierania listy produktów o parametry filtrowania(pamiętaj o roszerzeniu typów do requestu w rtk query)
4. Na stronie głównej pobierz filtry ze store'a selektorami
5. Zrób funkcje do dispatchowania akcji
6. Przekaz stan do poszczególnych komponentów i listenery
7. Stan z selektorów przekazujesz do hooka z rtk query
8. To co zwraca hook przekazujesz do komponentu ProductsList

9\*. Uzyj metody debounce z lodash/fp aby uniknac częstego uderzania do API.
https://lodash.com/docs/#debounce
