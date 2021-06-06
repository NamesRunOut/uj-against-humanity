# UJ Against Humanity

## Założenia projektu

Stworzenie gry „Cards Against Humanity” zmodyfikowanej o zawartość kart białych i czarnych tak, aby były one związane ze studiowaniem na UJ.

## Zasady gry

Podczas każdej rundy gracz zwany tzar’em zadaje pytanie na czarnej karcie. Pozostali gracze odpowiadają białą kartą, którą uznają za najlepiej odpowiadającą na pytanie. Na koniec tzar wybiera jego zdaniem najlepszą kartę. Gracz, który wybrał zwycięską kartę, zdobywa jeden punkt oraz zostaje tzar’em na czas następnej rundy. Gra kończy się gdy któryś z graczy zdobędzie maksymalną ilość punktów.

## Wymagania

W grze możemy wyróżnić 3 rodzaje aktorów: użytkownicy, gracze oraz tzar. Użytkownik jest aktorem abstrakcyjnym, a gracz i tzar są jego implementacjami. Możliwości użytkownika to: wybór swojej nazwy, napisanie wiadomości na czacie, wyświetlanie tablicy wyników, edytowanie opcji przeciągania kart, ustawianie limitu punktów. Uprawnienia gracza to: odpowiadanie na pytania, możliwość wylosowania ponownie białych kart oraz pominięcie czarnej karty. Zadaniem tzar'a jest wybór najlepszej odpowiedzi.

## Opis

Funkcjonalności niezależne od pełnionej roli w grze:

* Użytkownik może:
    * wybrać swój nick
    * napisać wiadomość na czacie
    * wyświetlić tablicę wyników
    * wyłączyć lub włączyć przeciąganie kart
    * ustalić limit punktów


Funkcjonalności zależne od pełnionej roli w grze:

* Gracz:
    * odpowiada na pytania zapisane na czarnej karcie przez wybór białej karty
    * może raz na grę wylosować ponownie białe karty
    * może pominąć czarną kartę

* Tzar:
    * wybiera najlepszą odpowiedź spośród kart wybranych przez zwykłych graczy
    * po wybraniu najlepszej odpowiedzi oddaje funkcję tzara graczowi, który wybrał zwycięską kartę
