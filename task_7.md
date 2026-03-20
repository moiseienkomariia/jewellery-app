## Placing order

1. Przygotuj stronę /checkout
2. Przygotuj typy do requestu post /orders, interface do uzywania w aplikacji oraz typy do RTK Query
3. Przygotuj formularz który będzie się składał z 3 części wyświetlanych jako oddzielne cards:

- pierwsza do adresu obsłuzy: Full Name, Street, City, Country(selektor z róznymi krajami), postal code.
- drugi card do delivery method: prosty selekt który wpływa na delivery fee
- trzeci selekt który wybiera metodę płatności

4. Po kazdej zmianie w koszyku która wpływa na cenę powinnien być aktualizowany
5. Na dole strony powinien być przycisk "Place Order" który wysyła POST request do API z zebranymi danymi.
6. Jezeli request zwróci poprawne dane to wyświetlamy stronę z podsumowaniem
7. Jezeli coś pójdzie nie tak przy składaniu zamówienia powinna się wyświetlić strona z błędem.

Techniczne sugestie:

- trzeba przygotować mutację do składania zamówienia
- metody płatności i dostawy moga być zamockowane w pliku
- przygotuj slice który będzie trzymał adres oraz wybrana metodę płatności
- w momencie złozenia zamówienia dane powinny być pobrane ze store'a i rtk query, połaczone i wysłane mutacja do tworzenia zamówienia

## Autoryzacja uzytkownika

- zainstaluj json-server-auth i skonfiguruj z projektem: https://www.npmjs.com/package/json-server-auth
- przygotuj odpowiednie mutacje w RTK Query które obsłuza logowanie/rejestrację
- przygotuj globalny provider do sesji
- dodaj komponent ProtectedRoute który będzie sprawdzał czy uzytkownik jest zalogowany
- powiaz uzytkownika z koszykiem

## Strona ustawień uzytkownika

- dodaj stronę ustawień gdzie uzytkownik będzie mógł ustawiać domyślne adresy, metody płatności i wysyłki
- pozwól na ustawianie zdjęcia profilowego
- dodaj funkcjonalność zmiany hasła
- wyświetlanie historii zamówień uzytkownika

## Checkout

- dla uzytkownika zalogowanego dodaj ustawianie domyślnych metod płatności/dostawy/adresu

## PWA

- przeczytaj dokumentację: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
- spróbuj skonfigurować plugin https://vite-pwa-org.netlify.app/ z aplikacja
- spraw aby aplikację dało się zainstalować

## Na koniec

- wygenerować finalne zdjęcia produktów
- utworzyć nazwy, opisy produktów
- dodać animacje za pomoca View Transitions API https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- przykład: https://live-transitions.pages.dev/
