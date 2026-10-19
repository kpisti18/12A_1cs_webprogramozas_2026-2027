# A feladat

Készíts egy egyszerű játékosnév-kártyát! A HTML-váz és a CSS nagy része készen van. Egészítsd ki az elrendezést, majd írd meg a működéshez szükséges JavaScriptet!

A HTML-t nem kell módosítanod. A script.js fájlban csak egy kezdő megjegyzés található.

## 1. CSS-formázás

A style.css fájlban a megjelölt helyeken dolgozz!

1. A body elemen flex elrendezéssel igazítsd a fő dobozt vízszintesen és függőlegesen középre!
2. A .container gyermekelemei flex elrendezésben, egymás alatt helyezkedjenek el, közöttük 20px térközzel!
3. A .beallitasok elemen belül a címke, a beviteli mező és a gomb egymás alatt jelenjen meg flex elrendezéssel, 10px térközzel!
4. A .kartya belsejében a csillag és a szöveges doboz egymás mellett legyen. Flex elrendezéssel igazítsd őket függőlegesen középre, és legyen közöttük 16px térköz!
5. A .container sarkait kerekítsd 16px-esre!
6. A gomb felett az egérkurzor mutató kéz legyen!

Az elvárt kép: középen egy fehér doboz, benne felül a cím és a rövid leírás, alattuk a címke, a beviteli mező és a gomb. Legalul világos lila kártya látható, bal oldalon csillaggal, jobb oldalon a JÁTÉKOS felirattal és a játékos nevével.

## 2. JavaScript

1. Hivatkozz a beviteli mezőre, a gombra és a játékos nevét megjelenítő elemre!
2. Írj egy saját, névvel ellátott függvényt, amely kiolvassa a beviteli mező aktuális értékét, és megjeleníti azt a kártyán a Vendég szöveg helyén!
3. Rendeld a függvényt a gomb click eseményéhez addEventListener segítségével!
4. A név csak a gomb megnyomásakor változzon meg. Gépelés közben még a korábbi név maradjon a kártyán!
5. Újabb név beírása és újabb kattintás után az új név jelenjen meg ugyanazon a helyen!

Segítség: querySelector, addEventListener, value, textContent.
A függvényt az eseménykezelőhöz a nevével rendeld hozzá.

Az alapfeladatban feltételezheted, hogy a felhasználó beír egy nevet; üres mezőt nem kell ellenőrizned.

## 3. Ellenőrizd a működést!

- Megnyitás után a kártyán Vendég látható.
- Írd be: PixelPanda! Kattintás előtt továbbra is Vendég látható.
- Kattints a Megjelenítés gombra! A kártyán PixelPanda jelenjen meg.
- Írd át a mezőt: KodMester! Kattintás előtt maradjon PixelPanda.
- Kattints újra! A korábbi név helyén KodMester jelenjen meg.

## Opcionális pluszfeladat

Ha a mező teljesen üres, kattintásra a Vendég név jelenjen meg! Ehhez a saját függvényedben használj elágazást.
