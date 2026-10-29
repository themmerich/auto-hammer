# Auto Hammer GmbH — Website

Statische Seite ohne Build-Schritt. HTML, CSS und ein kleines Skript für die
mobile Navigation. Lässt sich auf jedem Webspace ablegen.

## Aufbau

```
index.html              Startseite

leistungen.html         Übersicht der Leistungen
unfall.html             Leistungen, je eine Seite
karosserie.html
lackierung.html
mechanik.html
kundendienst.html

ueber-uns.html          Geschichte, Ansprechpartner, Team
kontakt.html            Erreichbarkeit, Anfahrt, Karte

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

robots.txt              erlaubt alles, verweist auf die Sitemap
sitemap.xml             alle 32 Adressen mit Änderungsdatum
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

Namen und Funktionen der acht Ansprechpartner stammen aus den
Bildunterschriften der alten Seite und von den Leistungsseiten dort. Wer
dazukommt oder geht, wird in `ueber-uns.html` von Hand nachgezogen; das
Raster steht auf vier Spalten, acht Personen füllen zwei volle Reihen.

Im Mediarchiv der alten Seite liegt ein neuntes Porträt, das dort auf
keiner Seite eingebunden ist und dessen Name nur im Dateinamen steht.
Siehe `assets/img/README.md`.

## Lokal ansehen

```bash
npx --yes serve --listen 4321 .
```

Dann http://localhost:4321 öffnen.

## Was noch fehlt

Alles davon ist im Quelltext mit einem Kommentar markiert.

- **Angaben auf der Kontaktseite.** Weg ins Industriegebiet, Parkplätze,
  Schlüsselrückgabe und die Nummer des Abschleppservice sind gelb markiert.
  Die bisherige Seite nennt davon nichts.
- **Pflichtangaben in Impressum und Datenschutz.** Beide Seiten stehen, die
  noch fehlenden Angaben sind gelb markiert (`<span class="fill">`). Nach dem
  Ausfüllen die Regel `.fill` und die beiden `.notice`-Kästen aus dem
  Quelltext löschen. Ein dritter Kasten steht auf `urlaubs-check.html`,
  siehe unten. Die Texte sind ein Gerüst, keine Rechtsberatung; vor dem
  Livegang anwaltlich prüfen lassen.
- **Kontaktformular.** Bewusst nicht gebaut: ein Formular braucht einen
  Empfänger auf dem Server. Aktuell führen alle Wege auf Telefon und Mail.

## Sichtbarkeit in Suchmaschinen

Die Angaben gehen von `https://auto-hammer-ufr.de/` als endgültiger Adresse
aus, die neue Seite ersetzt dort also die alte. Wird es eine andere Domain,
müssen alle `canonical`- und `og:`-Adressen sowie `robots.txt` und
`sitemap.xml` darauf umgestellt werden.

### Im Kopf jeder Seite

Zwischen `<!-- seo:anfang -->` und `<!-- seo:ende -->` stehen auf jeder
Seite dieselben Angaben:

- `canonical` mit der vollständigen Adresse. Wichtig, weil manche Server
  dieselbe Seite auch ohne `.html` ausliefern. Ohne diese Zeile wären das
  für Suchmaschinen zwei Seiten mit gleichem Inhalt.
- Open Graph und Twitter-Card für die Vorschau beim Teilen. `og:image` zeigt
  auf das Leitbild der jeweiligen Seite, bei Seiten ohne eigenes Foto auf
  `assets/img/og.jpg`.
- Favicon und Apple-Touch-Symbol.

Bei einer neuen Seite diesen Block aus einer bestehenden kopieren und
Adresse, Titel, Beschreibung und Bild anpassen.

### Am Fuß jeder Seite

Zwischen `<!-- daten:anfang -->` und `<!-- daten:ende -->` steht ein
Graph aus JSON-LD. Jede Seite trägt darin drei bis vier Knoten:

1. **Der Betrieb**, immer unter derselben Kennung
   `https://auto-hammer-ufr.de/#betrieb`. Daran erkennt eine Maschine,
   dass alle 34 Seiten von einem Betrieb handeln und nicht von 34
   verschiedenen.
2. **Die Seite selbst**, je nach Art `WebPage`, `CollectionPage`,
   `ContactPage` oder `AboutPage`.
3. **Der Brotkrumenpfad**, wo es einen gibt.
4. **Die Sache, um die es geht**: `Service` auf den fünf
   Leistungsseiten, `BlogPosting` auf den Meldungen, `ItemList` auf der
   Leistungsübersicht.

Die Startseite hat ihren Graphen von Hand, mit den vollständigen Angaben
zum Betrieb: Adresse, Telefon, Öffnungszeiten, Gründungsjahr,
Einzugsgebiet, Facebook-Seite und ein Katalog, der auf die fünf
Leistungen verweist. Diese Angaben müssen mit dem Impressum
übereinstimmen.

Auf allen anderen Seiten steht vom Betrieb nur die Kurzfassung, damit
jede Seite für sich lesbar bleibt. Beide tragen dieselbe Kennung und
ergänzen sich dadurch, statt sich zu widersprechen.

### Warum der Aufwand

Suchmaschinen sind nicht mehr der einzige Weg. Immer mehr Leute fragen
einen Assistenten, wo sie in der Gegend einen Unfallschaden reparieren
lassen können. Was so ein Assistent über den Betrieb weiß, hängt davon
ab, wie gut die Seite maschinell zu lesen ist: ein Betrieb statt 34,
benannte Leistungen statt Überschriften, ein Einzugsgebiet statt
Fließtext.

`robots.txt` erlaubt allen Zugriffen alles. Das schließt die Crawler der
KI-Anbieter ein. Wer das nicht will, muss sie dort einzeln ausschließen.

### Sitemap

`sitemap.xml` führt alle Seiten mit ihrem Änderungsdatum auf, `robots.txt`
verweist darauf. Eine neue Seite muss dort von Hand eingetragen werden.
Nach dem Livegang lohnt es sich, die Sitemap einmal in der Google Search
Console anzumelden.

## Bilder im Netz

Die Dateien sind auf die Breite verkleinert, in der sie tatsächlich
angezeigt werden, und neu komprimiert. Fotos liegen zusätzlich in einer
schmalen Fassung mit dem Zusatz `-720` beziehungsweise `-320` bei den
Porträts. Welche davon geladen wird, entscheidet der Browser anhand von
`srcset` und `sizes` am Bild.

Die `sizes`-Angabe beschreibt, wie breit das Bild an dieser Stelle steht,
nicht wie groß die Datei ist. Wer das Layout ändert, muss sie mit ändern,
sonst lädt der Browser die falsche Fassung. Die Werte je Einbauort stehen
in `assets/img/README.md`.

Die Originale in voller Auflösung liegen nicht mehr im Verzeichnis. Sie
stecken in der Versionsgeschichte und auf der alten Seite.

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

## Navigation

Vier Punkte, alle auf einer Ebene und alle auf echte Seiten:
**Leistungen · Über uns · Aktuelles · Kontakt**, rechts die Telefonnummer.
Das ist die Reihenfolge, in der ein Besucher denkt: Was macht ihr, wer seid
ihr, was gibt es Neues, wie erreiche ich euch.

Vorher standen „Leistungen" und „Unfall" nebeneinander, obwohl Unfall eine
der fünf Leistungen ist. Beide zeigten außerdem auf Anker der Startseite,
und „Unfall" führte je nach Seite woanders hin: auf der Startseite zum
blauen Abschnitt, sonst auf `unfall.html`.

Unfallinstandsetzung ist weiterhin gut erreichbar: als erste Karte in
`leistungen.html`, auf der Startseite als Leitkarte und im eigenen blauen
Abschnitt mit dem Knopf „Unfallschaden melden", dazu am Fuß jeder
Leistungsseite unter „Weitere Leistungen".

Ein Menüpunkt soll auf eine Seite zeigen, nicht auf einen Anker. Sonst lädt
jeder Klick von einer Unterseite aus die ganze Startseite nach. Wer die
Navigation erweitert, sollte das beibehalten; ab sieben Punkten wird die
Kopfleiste außerdem eng.

## Kontakt

`kontakt.html` ist die Anlaufstelle hinter dem Menüpunkt. Vorher sprang er
auf den Abschnitt der Startseite, was von jeder Unterseite aus bedeutete,
die ganze Startseite nachzuladen, nur um eine Telefonnummer zu sehen.

Die Seite führt Telefon, Mail, Anschrift, Öffnungszeiten und die Karte, dazu
Anfahrt, Parken, die Schlüsselrückgabe außerhalb der Zeiten und den Verweis
auf die Ansprechpartner. Der Abschnitt auf der Startseite bleibt bestehen
und verlinkt dorthin; wer dort landet, soll nicht erst klicken müssen.

Telefonnummer und Öffnungszeiten stehen damit an zwei Stellen im Quelltext,
dazu in der Kopfleiste jeder Seite und in den strukturierten Daten der
Startseite. Wenn sich etwas davon ändert, muss es überall nachgezogen
werden.

In der Fußzeile jeder Seite steht ein Link auf die Facebook-Seite des
Betriebs, wie auf der alten Website. Es ist ein gewöhnlicher Link, keine
eingebettete Schaltfläche: Solange niemand darauf klickt, geht keine
Anfrage an Facebook. In der Datenschutzerklärung steht dazu der Abschnitt
„Soziale Netzwerke" mit der gemeinsamen Verantwortlichkeit nach Artikel 26
DSGVO, die für Facebook-Seiten gilt.

Einen Newsletter gibt es nicht. Die alte Seite hat eine Anmeldeseite und
zwei Bestätigungsseiten; ein Newsletter braucht einen Dienst mit
Double-Opt-in, das ist keine Frage des HTML.

Ein Kontaktformular wie auf der alten Seite gibt es ebenfalls nicht. Ein Formular
braucht einen Empfänger auf dem Server; die `mailto:`-Krücke öffnet das
Mailprogramm des Besuchers und geht auf dem Telefon oft schief. Kann der
Webspace PHP, lässt sich ein Formular nachrüsten.

## Bewertungen

Die alte Seite hat eine eigene Rezensionsseite mit rund 56 Kundenstimmen.
Die neue hat keine. Auf der Startseite stehen drei Zitate als Kostprobe,
daneben ein Link auf das Google-Unternehmensprofil.

Der Grund: Die Stimmen auf der alten Seite sind von Hand abgetippte Kopien,
erkennbar an Anzeigenamen wie „Mr. KiRaTeCa" oder „Nico the 1000". Eine
solche Liste ist immer veraltet, macht Arbeit und wirkt schwächer als die
Bewertungen an der Quelle, die der Betrieb nicht bearbeiten kann. Nebenbei
entfällt die Frage, ob fremde Bewertungstexte samt Namen auf der eigenen
Seite gespiegelt werden dürfen.

Der Link ist vorläufig eine Google-Maps-Suche nach Name und Anschrift. Er
führt zum richtigen Eintrag, sollte aber durch die genaue Adresse aus dem
Google-Unternehmensprofil ersetzt werden, zu finden dort unter „Rezensionen
teilen". Die Stelle ist in `index.html` mit einem Kommentar markiert.

Der Menüpunkt „Rezensionen" ist entfallen. Für drei Zitate auf der
Startseite war ein eigener Punkt zu viel Gewicht, und die Kopfleiste hat
dadurch wieder Luft.

## Inhaltliche Quellen

Texte, Öffnungszeiten, Auszeichnungen und Kundenzitate stammen von
auto-hammer-ufr.de. Die strukturierten Daten am Seitenende (`AutoRepair`) geben
Adresse, Telefon und Öffnungszeiten für Suchmaschinen an und müssen mit dem
Impressum übereinstimmen.
