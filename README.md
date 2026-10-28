# Auto Hammer GmbH — Website

Statische Seite ohne Build-Schritt. HTML, CSS und ein kleines Skript für die
mobile Navigation. Lässt sich auf jedem Webspace ablegen.

## Aufbau

```
index.html              Startseite

unfall.html             Leistungen, je eine Seite
karosserie.html
lackierung.html
mechanik.html
kundendienst.html

ueber-uns.html          Geschichte, Ansprechpartner, Team

aktuelles.html          Übersicht aller Meldungen, nach Jahr gruppiert
reifenwechseltage.html  22 Meldungen, je eine Seite.
wintercheck.html        Die Dateinamen folgen dem Thema,
willkommen-adrian.html  die Reihenfolge steht in aktuelles.html.
...

impressum.html          Impressum, Pflichtangaben noch als Platzhalter
datenschutz.html        Datenschutzerklärung, dito

assets/css/styles.css   Stylesheet, Tokens stehen oben in :root
assets/js/nav.js        Kopfhöhe, Karte, mobile Navigation
assets/fonts/           Barlow und Inter als WOFF2, dazu die Lizenzen
assets/img/             Bilder, siehe assets/img/README.md
.claude/launch.json     lokaler Vorschauserver
```

## Meldungen

Alle 22 Meldungen von auto-hammer-ufr.de/news/ sind übernommen, jede hat
ihre eigene Seite. `aktuelles.html` listet sie nach Jahr gruppiert und mit
Datum; die Startseite zeigt die drei neuesten mit dem Anlass statt dem Datum
(„Neu im Team") und verlinkt daneben auf die Übersicht. Am Fuß jeder Meldung
stehen die drei folgenden, am Ende der Liste wieder von vorn.

Die Inhalte stimmen mit den Originalbeiträgen überein, die Formulierungen
sind an den Rest der Seite angeglichen. Der Werbeblock, der auf der alten
Seite unter fast jeder Meldung steht, ist nicht mitgekommen.

### Eine Meldung ändern oder anlegen

Die Reihenfolge steht an vier Stellen: in `aktuelles.html`, auf der
Startseite und in den „Weitere Meldungen" der übrigen Seiten. Eine neue
Meldung muss überall nachgezogen werden.

Aufbau einer Seite: Kopf mit Pfad, Datum und Vorspann, dann
`<article class="article">` mit Bild und `.prose`-Text, am Ende ein
Kontaktband und die anderen Meldungen. Dazwischen passen ein
`.checklist`-Abschnitt (Prüflisten) oder `.steps steps--light` (Abläufe).

Bilder: Fotos laufen als `<img class="photo photo--wide">` über die volle
Spaltenbreite. Siegel und Herstellerbanner tragen Schrift im Bild und dürfen
nicht beschnitten werden; sie stehen in einer `<figure class="grafik">` und
auf den Karten mit der Zusatzklasse `photo--grafik`.

### Doppelte Inhalte

`unfallservice.html` und `kundendienst-alle-marken.html` sind auf der alten
Seite Meldungen, auf der neuen gibt es dieselben Inhalte als Leistungsseite
(`unfall.html`, `kundendienst.html`). Beide Meldungen sind kurz gehalten und
verweisen am Ende auf die ausführliche Leistungsseite, damit die beiden
Fassungen sich in der Suche nicht gegenseitig verdrängen.

Drei Meldungen betreffen die Auszeichnung „Werkstatt des Vertrauens" in den
Jahrgängen 2022, 2025 und 2026. Der Text ist auf der alten Seite jedes Mal
derselbe; hier ist er jeweils anders formuliert.

## Wir über uns

`ueber-uns.html` bündelt, was auf der alten Seite unter „Wir über uns"
stand: Firmengeschichte, Ansprechpartner mit Foto, Angaben zum Team und
zum Einzugsgebiet.

Drei eigene Bausteine stehen dafür im Stylesheet. `.teamfoto` zeigt das
freigestellte Gruppenbild über die volle Breite, ohne Beschnitt und ohne
Hintergrundfläche. `.jahre` ist die Liste der Firmendaten, Jahreszahl
links, Text rechts, auf schmalen Schirmen untereinander. `.team` ist das
Raster der Porträts, vier Spalten, ab 900 Pixel drei und ab 760 zwei.

Namen und Funktionen der sieben Ansprechpartner stammen aus den
Bildunterschriften der alten Seite. Wer dazukommt oder geht, wird in
`ueber-uns.html` von Hand nachgezogen.

## Lokal ansehen

```bash
npx --yes serve --listen 4321 .
```

Dann http://localhost:4321 öffnen.

## Was noch fehlt

Alles davon ist im Quelltext mit einem Kommentar markiert.

- **Favicon und Teilerbild.** Zwei auskommentierte Zeilen im `<head>`.
- **Bilder verkleinern.** Die Dateien in `assets/img/` sind unbearbeitet und
  schwerer als nötig. Siehe `assets/img/README.md`.
- **Pflichtangaben in Impressum und Datenschutz.** Beide Seiten stehen, die
  noch fehlenden Angaben sind gelb markiert (`<span class="fill">`). Nach dem
  Ausfüllen die Regel `.fill` und die beiden `.notice`-Kästen aus dem
  Quelltext löschen. Ein dritter Kasten steht auf `urlaubs-check.html`,
  siehe unten. Die Texte sind ein Gerüst, keine Rechtsberatung; vor dem
  Livegang anwaltlich prüfen lassen.
- **Kontaktformular.** Bewusst nicht gebaut: ein Formular braucht einen
  Empfänger auf dem Server. Aktuell führen alle Wege auf Telefon und Mail.

## Schriften

Barlow und Inter liegen als WOFF2 in `assets/fonts/` und werden vom eigenen
Server ausgeliefert. Die Seite baut keine Verbindung zu Google Fonts auf, es
verlässt also keine Besucher-IP den Server. Das war der Grund für die
Umstellung: Das Landgericht München I hat in der dynamischen Einbindung von
Google Fonts 2022 einen Verstoß gegen die DSGVO gesehen (Az. 3 O 17493/20).

Eingebunden wird über `@font-face` am Anfang des Stylesheets. Geladen werden
nur die Subsets latin und latin-ext; über `unicode-range` holt der Browser
latin-ext erst, wenn tatsächlich ein Zeichen daraus auf der Seite steht.
Inter ist eine Variable Font, eine Datei deckt die Strichstärken 400 bis 600 ab.

Beide Familien stehen unter der SIL Open Font License 1.1. Die Lizenztexte
liegen als `OFL-Barlow.txt` und `OFL-Inter.txt` daneben und müssen beim
Ausliefern der Schriften mitgeführt werden.

Kommt eine weitere Strichstärke dazu, muss die passende Datei nachgeladen und
ein `@font-face`-Block ergänzt werden. Fehlt sie, rechnet der Browser die
Stärke selbst hoch, und das sieht schlechter aus als der echte Schnitt.

## Zu prüfen

Der Festpreis von 19,50 Euro für den Urlaubs-Check stammt aus dem Beitrag von
2025. Auf `urlaubs-check.html` steht dazu ein gelber Hinweiskasten; er ist
nur für den Betrieb gedacht und muss vor dem Livegang raus, zusammen mit dem
geprüften Preis.

Die Termine der Reifenwechseltage sind bestätigt, der Hinweiskasten dort ist
entfernt. Saisonal bleiben sie trotzdem: Für die nächste Saison gehören die
Daten in `reifenwechseltage.html` und auf der Startseite nachgezogen.

## Anschrift

`Zeppelinstr. 1, 97228 Rottendorf` ist bestätigt und steht an allen 21
Fundstellen gleich: Kopfleiste jeder Seite, Kontaktbereich, Fußzeile,
Impressum, Datenschutzerklärung und die strukturierten Daten der Startseite.

OpenStreetMap führt den Betrieb dagegen unter Hausnummer 3. Das betrifft die
Karte nicht — der Marker sitzt auf dem Eintrag des Betriebs, also auf dem
richtigen Gebäude, unabhängig davon, welche Hausnummer dort als Merkmal
hinterlegt ist. Wer mag, kann die Nummer bei OpenStreetMap berichtigen; der
Eintrag heißt dort „Auto Hammer" an der Zeppelinstraße.

## Inhaltliche Quellen

Texte, Öffnungszeiten, Auszeichnungen und Kundenzitate stammen von
auto-hammer-ufr.de. Die strukturierten Daten am Seitenende (`AutoRepair`) geben
Adresse, Telefon und Öffnungszeiten für Suchmaschinen an und müssen mit dem
Impressum übereinstimmen.
