# A feladat

Készíts üzenetszámlálót! A felhasználó beír egy rövid üzenetet, és az alatta lévő számláló folyamatosan jelzi, hány karaktert írt be.

A HTML-váz és a CSS nagy része készen van. A HTML-t nem kell módosítanod. A style.css megjelölt részeit egészítsd ki, a JavaScriptet a script.js fájlba írd!

## 1. CSS-formázás

1. A body elemen flex elrendezéssel igazítsd a fehér fő dobozt vízszintesen és függőlegesen középre!
2. A .container gyermekelemei egymás alatt helyezkedjenek el flex elrendezéssel, 20px térközzel!
3. A .fejlec borítékjele és címe egymás mellett jelenjen meg flex elrendezéssel, függőlegesen középre igazítva, 12px térközzel!
4. A .szerkeszto címkéje és szövegmezője egymás alatt legyen flex elrendezéssel, 10px térközzel!
5. Az .info két felirata flex elrendezésben a sor két szélére kerüljön: balra a „Legfeljebb 100 karakter”, jobbra a számláló! Függőlegesen igazítsd őket középre!
6. A fehér fő doboz sarkait kerekítsd 16px-esre!
7. A .szamlalo szövege legyen félkövér!

Az elvárt kép: világos barackszínű háttéren, középen fehér doboz. Felül egymás mellett borítékjel és cím, alattuk a rövid leírás, majd a címke és a szövegmező. A doboz alján bal oldalon a korlátról szóló felirat, jobb oldalon barackszínű számláló látható.

## 2. JavaScript

1. Hivatkozz a szövegmezőre és a karakterek számát megjelenítő span elemre!
2. Írj egy saját, névvel ellátott függvényt! Olvasd ki benne a szövegmező aktuális tartalmának hosszát, majd jelenítsd meg a számlálóban!
3. Rendeld a függvényt a szövegmező input eseményéhez, addEventListener segítségével!
4. A számláló gépeléskor és törléskor is frissüljön! Beillesztett szöveggel is működjön.
5. Csak a span elemben lévő számot módosítsd! A mögötte szereplő „/ 100” maradjon változatlan.

Segítség:

- Az elemek kiválasztásához használhatod a querySelector metódust.
- A szövegmező tartalmát a value tulajdonsággal olvashatod ki.
- Egy szöveg hosszát a length tulajdonság adja meg. Például: "Szia".length értéke 4.
- Az eredményt a textContent tulajdonsággal jelenítheted meg.
- Az input esemény a szövegmező felhasználó általi módosításakor fut le.
- Az addEventListener számára a saját függvényed nevét add meg!

A HTML-ben megadott maxlength="100" már korlátozza a beírható szöveg hosszát. Ezt nem kell JavaScriptben megoldanod. Kezdetben üres a mező és 0 a számláló, ezért induláskor külön frissítés sem szükséges.

A szóközök is beleszámítanak a hosszba. A teszteléshez egyszerű betűket, számokat és írásjeleket használj.

## 3. Ellenőrizd a működést!

- Megnyitás után a számláló értéke: 0 / 100.
- Írd be a `Szia` szót! Ekkor 4 / 100 jelenjen meg.
- Tegyél utána egy szóközt! Az érték legyen 5 / 100.
- Írd utána az `Anna` nevet! Az eredmény legyen 9 / 100. (A mező tartalma: `Szia Anna`.)
- Töröld ki az egész szöveget! Újra 0 / 100 jelenjen meg.
- Illeszd be a `Hello!` szöveget! A számláló 6 / 100 értéket mutasson.

## Opcionális pluszfeladat

A számláló a beírt karakterek helyett a még beírható karakterek számát mutassa! Ehhez vond ki a szöveg hosszát 100-ból!

Ennél a pluszfeladatnál a HTML-ben is módosíthatod a számlálót: a „/ 100” helyett „karakter maradt” szerepeljen, a span kezdeti értéke pedig 100 legyen.
