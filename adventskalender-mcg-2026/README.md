# Digitaler Adventskalender 2026 · Marie-Curie-Gymnasium Düsseldorf

Vom Arbeitskreis Digitalisierung für das Kollegium.

24 kurze, praxisnahe Digital-Tipps für das Kollegium. Jeden Tag im Dezember öffnet sich ein Türchen.
Die Seite ist rein statisch (HTML/CSS/JS), braucht keinen Server, keine Cookies und lädt nichts von fremden Servern.

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Seitengerüst |
| `tuerchen.js` | **Alle Texte der 24 Türchen + Einstellungen**: Hier wird bearbeitet. |
| `app.js` | Logik (Datum, Öffnen, Quiz, Schnee) |
| `style.css` | Design (winterliche Farben, Systemschrift) |
| `assets/` | Logo, Bildmarke, Favicon |

## Auf GitHub Pages veröffentlichen

1. Alle Dateien (inkl. Ordner `assets/`) ins Repository hochladen, z. B. in den Hauptordner.
2. Im Repository: **Settings → Pages → Build and deployment → Source: „Deploy from a branch“**, Branch `main`, Ordner `/ (root)` → **Save**.
3. Nach ca. 1 Minute ist der Kalender unter `https://<benutzername>.github.io/<repo-name>/` erreichbar.

> Hinweis: Mit einem kostenlosen GitHub-Konto muss das Repository dafür **öffentlich** sein. Alle Inhalte (auch die noch geschlossenen Türchen) sind dann im Quelltext einsehbar. Deshalb gehören keine internen oder personenbezogenen Daten in den Kalender.

## Wie das Öffnen funktioniert

- Maßgeblich ist die **Uhr des Geräts** (lokale Zeit). Türchen *n* öffnet sich am *n*. Dezember um 0:00 Uhr.
- Ab dem 24.12. (und im Januar) sind alle Türchen offen und können nachgelesen werden.
- Bleibt die Seite über Nacht offen, schaltet sie das neue Türchen automatisch frei.
- Gelesene Türchen bekommen einen Haken. Das wird nur lokal im Browser gespeichert.

## Testen (nur für dich)

Hänge `?datum=JJJJ-MM-TT` an die Adresse, z. B.

```
index.html?datum=2026-12-24
```

Dann tut die Seite so, als wäre dieses Datum (rotes „Testmodus“-Etikett). Direkt-Links auf ein Türchen gehen mit `#t5` (öffnet Türchen 5, sofern es schon offen ist).

## Vorschau für den Arbeitskreis (Passwort)

Ganz unten auf der Seite gibt es ein kleines Feld „Vorschau für den Arbeitskreis“. Wer dort das Passwort eingibt, sieht in **diesem Browser** alle 24 Türchen geöffnet. Das funktioniert auch offline (einfach `index.html` per Doppelklick öffnen). „Vorschau beenden“ stellt die normale Ansicht wieder her.

- Das Passwort steht nicht im Klartext im Code, sondern nur als Prüfsumme. Ein echter Schutz ist das nicht, weil der Quelltext öffentlich ist. Es verhindert aber, dass jemand aus Versehen alles aufdeckt.
- Gelesene Türchen werden in der Vorschau getrennt gespeichert. Die normale Ansicht bleibt deshalb unberührt.

## Inhalte ändern

In `tuerchen.js` – jeder Block `{ … }` ist ein Türchen. Oben in der Datei stehen Jahr, Absender und Stand.
Formatierung: `**fett**`, `*kursiv*`, `` `Kürzel` ``. Nach dem Ändern einfach die Datei im Repository ersetzen.

## Vor dem Start bitte prüfen

- **Impressum:** Eine öffentlich erreichbare Seite, die nicht rein privat ist, braucht in Deutschland Anbieterangaben (§ 18 MStV). Am einfachsten im Footer von `index.html` auf das Impressum der Schulhomepage verlinken, nach Absprache mit der Schulleitung.
- **Rechts-Türchen (2, 8, 14, 16, 21):** Stand November 2026, mit Quellen belegt. Kurz von Schulleitung oder Datenschutzbeauftragter/m gegenlesen lassen.
- **Schrift:** Es werden die Systemschriften des Geräts genutzt (Segoe UI, San Francisco, Roboto …). Es wird nichts nachgeladen, und Umlaute werden überall korrekt dargestellt.
