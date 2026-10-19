# A feladat

Készíts zenei stílusválasztót! A felhasználó egy legördülő listából választ, és a választott stílus neve azonnal megjelenik a zöld kártyán.

A HTML-váz és a CSS nagy része készen van. A HTML-t nem kell módosítanod. A style.css megjelölt részeit egészítsd ki, a JavaScriptet pedig a script.js fájlba írd!

## 1. CSS-formázás

1. A body elemen flex elrendezéssel igazítsd a fehér fő dobozt vízszintesen és függőlegesen középre!
2. A .container gyermekelemei egymás alatt helyezkedjenek el flex elrendezésben, 20px térközzel!
3. A .fejlec legyen vízszintes flex tároló. A cím legyen bal oldalon, a MIX jelvény pedig jobb oldalon; a szabad hely közöttük jelenjen meg! Függőlegesen igazítsd őket középre!
4. A .beallitasok címkéje és legördülő listája egymás alatt helyezkedjen el flex elrendezéssel, 10px térközzel!
5. A .kartya gyermekelemei flex elrendezésben egymás alatt, vízszintesen középre igazítva jelenjenek meg, 12px térközzel!
6. A zöld kártya sarkait kerekítsd 12px-esre!
7. A legördülő lista felett mutató kéz alakú egérkurzor jelenjen meg!

Az elvárt kép: középen fehér doboz, tetején balra a cím, jobbra a MIX jelvény. Alatta rövid leírás, majd a címke és a legördülő lista található. Legalul egy zöld kártyán egymás alatt, középre igazítva jelenik meg a hangjegy, az „A választott stílusod:” felirat és a stílus neve.

## 2. JavaScript

1. Hivatkozz a legördülő listára és a kártyán található, választott stílust megjelenítő elemre!
2. Írj saját, névvel ellátott függvényt! A függvény olvassa ki a lista aktuális értékét, és jelenítse meg azt a kártyán a korábbi stílus neve helyén!
3. Rendeld a függvényt a lista change eseményéhez addEventListener segítségével!
4. Minden új választás után frissüljön a kártya szövege! Külön gombra nincs szükség.

Segítség: querySelector, addEventListener, value, textContent.

A change esemény akkor fut le, amikor a felhasználó megváltoztatja a lista kiválasztott értékét. Az eseménykezelőhöz a saját függvényed nevét add meg!

A kezdeti Pop választás és a hozzá tartozó kártyafelirat már szerepel a HTML-ben, ezért induláskor külön frissítés nem szükséges.

Nem kell zenét lejátszani, képet betölteni, új HTML-elemet létrehozni, ciklust vagy elágazást írni.

## 3. Ellenőrizd a működést!

- Megnyitás után a listában és a kártyán is Pop szerepel.
- Válaszd a Rock stílust! A kártyán Rock jelenjen meg.
- Válaszd az Elektronikus stílust! A korábbi név helyére Elektronikus kerüljön.
- Válassz vissza Popra! A kártya ekkor is helyesen frissüljön.

## Opcionális pluszfeladat

A kiválasztott stílus a böngésző lapfülén is jelenjen meg, például: „Rock – Zenei stílusválasztó”!

Segítség: a lap címét a document.title tulajdonsággal módosíthatod, ugyanabban a függvényben.
