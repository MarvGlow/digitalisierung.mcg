/* =====================================================================
   INHALTE DES ADVENTSKALENDERS – hier kannst du alles bearbeiten.
   ---------------------------------------------------------------------
   Jedes Türchen ist ein Block zwischen { und }. Felder:

   tag         Zahl 1–24 (an welchem Dezembertag es sich öffnet)
   kategorie   "nrw" | "tool" | "unterricht" | "fuerdich"
   titel       Überschrift
   problem     1–2 Sätze: Welches Alltagsproblem löst das Türchen?
   loesungTitel (optional) Überschrift über den Schritten, Standard: "So geht's"
   loesung     Liste von Schritten/Punkten  [ "…", "…" ]
   beispielTitel (optional) Standard: "Beispiel"
   beispiel    Liste von Beispielen         [ "…", "…" ]
   hinweis     (optional) kleiner Kasten mit Tipp/Warnung
   challenge   Mini-Challenge (1 Satz)
   quellen     Liste von Links  [ { titel: "…", url: "https://…" } ]

   Formatierung in Texten: **fett**, `Kürzel`, und normale HTML-Links.
   Achte auf Kommas zwischen den Einträgen und auf "Anführungszeichen".
   ===================================================================== */

window.KALENDER_CONFIG = {
  jahr: 2026,                         // Jahr, in dem der Kalender läuft
  absender: "Euer Arbeitskreis Digitalisierung am MCG", // erscheint in Türchen 24 und im Footer
  stand: "November 2026"              // Stand der Inhalte (Footer)
};

window.TUERCHEN = [

/* ---------------------------------------------------------------- 1 */
{
  tag: 1,
  kategorie: "tool",
  titel: "Der 4-Bausteine-Prompt: Bessere KI-Ergebnisse in jedem Tool",
  problem: "Du fragst eine KI nach einem Arbeitsblatt und bekommst etwas Generisches, das zu keiner deiner Klassen passt?",
  loesungTitel: "So geht's: vier Bausteine",
  loesung: [
    "**Rolle:** Wer soll die KI sein? („Du bist eine erfahrene Biologielehrkraft an einem Gymnasium in NRW.“)",
    "**Aufgabe:** Was genau soll entstehen? („Erstelle ein Arbeitsblatt mit drei Aufgaben …“)",
    "**Kontext:** Klasse, Vorwissen, Ziel, Besonderheiten („Klasse 7, erste Stunde zur Fotosynthese, zwei Kinder mit DaZ-Hintergrund“).",
    "**Format:** Wie soll das Ergebnis aussehen? („Tabelle, Operatoren fett, Lösungen getrennt am Ende“)",
    "Danach **nachschärfen**, statt neu anzufangen: „Mach Aufgabe 2 schwieriger“, „Kürze die Texte auf 60 Wörter“."
  ],
  beispielTitel: "Ein Prompt zum Kopieren",
  beispiel: [
    "„Du bist erfahrene Deutschlehrkraft. Erstelle zu dem folgenden Sachtext drei Aufgaben in drei Niveaustufen (Basis, Standard, Experte) für Klasse 8. Nutze Operatoren wie im Kernlehrplan und gib Hilfen für die Basisstufe. Format: Tabelle, Lösungen getrennt am Ende.“"
  ],
  hinweis: "Das Prinzip funktioniert in jedem KI-Tool, also auch in dem, das am MCG freigegeben ist. Es gilt immer: keine Namen oder andere personenbezogenen Daten von Schüler:innen eingeben.",
  challenge: "Schreib heute einen 4-Bausteine-Prompt für eine Aufgabe, die du jede Woche erledigst, und speicher ihn für die Fachschaft.",
  quellen: [
    { titel: "Schulministerium NRW: Handlungsleitfaden zu textgenerierender KI", url: "https://www.schulministerium.nrw/textgenerierende-ki" },
    { titel: "Bildungsmediathek NRW: Themenfeld „KI in der Schule“", url: "https://www.schulministerium.nrw/kuenstliche-intelligenz-der-schule-eine-sammlung-hochwertiger-unterrichtsmaterialien-und" }
  ]
},

/* ---------------------------------------------------------------- 2 */
{
  tag: 2,
  kategorie: "nrw",
  titel: "Darf ich diese Schulbuchseite scannen und verschicken?",
  problem: "Du willst deiner Klasse ein Kapitel als PDF geben – aber wie viel ist eigentlich erlaubt?",
  loesungTitel: "Die Faustregel (Gesamtvertrag, gilt auch in NRW)",
  loesung: [
    "Höchstens **15 % eines Werkes, maximal 20 Seiten** – kopiert oder gescannt, für deinen **eigenen** Unterricht und deine **eigenen** Schüler:innen.",
    "Bei **Schulbüchern** digital nur, wenn sie **2005 oder später** erschienen sind.",
    "Aus jedem Werk nur **einmal pro Schuljahr und Lerngruppe** (also nicht jede Woche weitere 15 %).",
    "Immer mit **Quellenangabe**.",
    "Weitergabe digital z. B. per Mail oder in einem LOGINEO-Kurs **nur für deine Lerngruppe** – nicht in Kurse, auf die andere Gruppen oder Lehrkräfte zugreifen."
  ],
  beispielTitel: "Komplett kopieren darfst du",
  beispiel: [
    "Noten bis 6 Seiten, Bilder/Fotos/Abbildungen, vergriffene Werke sowie Texte bis 20 Seiten – **außer** Unterrichtswerken.",
    "Ein 20-seitiger Comic darf also komplett kopiert werden, aus einem 20-seitigen **Arbeitsheft** aber nur 3 Seiten."
  ],
  hinweis: "Der aktuelle Gesamtvertrag läuft bis 31.12.2027. Bei Zweifelsfällen: Medienberatung oder Bezirksregierung fragen.",
  challenge: "Schau beim nächsten Scan kurz ins Impressum (Erscheinungsjahr?) und setz die Quelle in die Fußzeile.",
  quellen: [
    { titel: "Bezirksregierung Münster: „Urheberrecht trifft Schule“ (PDF)", url: "https://www.bezreg-muenster.de/de/schule_und_bildung/a-z/urheberrecht/_ablage/Urheberrecht-trifft-Schule_v1_0.pdf" },
    { titel: "Übersicht zum Gesamtvertrag 2023–2027 (Nds. Kultusministerium)", url: "https://www.mk.niedersachsen.de/startseite/schule/schulorganisation/mediennutzung/kopien_und_scans_in_der_schule/fotokopieren-an-schulen-6405.html" },
    { titel: "Checkliste: Was darf auf die Lernplattform? (LFB Baden-Württemberg, PDF)", url: "https://www.lehrerfortbildung-bw.de/st_recht/urheber/checkl/text_bild/checkliste-text-2020-3.pdf" }
  ]
},

/* ---------------------------------------------------------------- 3 */
{
  tag: 3,
  kategorie: "unterricht",
  titel: "Hausaufgaben KI-fest machen – ohne Verbot",
  problem: "„Fasse den Text zusammen“ erledigt eine KI in zehn Sekunden. Was nun?",
  loesungTitel: "Der Trick",
  loesung: [
    "Mach den KI-Text zum **Material** statt zur Konkurrenz: Die Schüler:innen **prüfen, verbessern, begründen** – das nimmt ihnen keine KI ab.",
    "Den „fehlerhaften“ Text erzeugst du selbst mit eurem schulischen KI-Tool, z. B.: *„Schreib eine Gedichtanalyse zu […] mit drei subtilen inhaltlichen Fehlern.“*"
  ],
  beispielTitel: "Vorher → Nachher",
  beispiel: [
    "**Deutsch:** „Analysiere das Gedicht“ → „Diese KI-Analyse enthält drei Fehldeutungen. Finde sie und belege mit Zeilenangaben.“",
    "**Bio/Chemie:** „Erkläre Osmose“ → „Diese KI-Erklärung für Klasse 7 ist fachlich ungenau. Markiere zwei Stellen und formuliere sie fachsprachlich korrekt.“",
    "**Englisch:** „Write a letter of complaint“ → „Vergleiche deinen Brief mit der KI-Version: Übernimm drei Formulierungen und begründe – oder begründe, warum deine besser sind.“"
  ],
  challenge: "Bau eine Hausaufgabe der nächsten Woche nach diesem Muster um.",
  quellen: [
    { titel: "Schulministerium NRW: Handlungsleitfaden „Umgang mit textgenerierenden KI-Systemen“", url: "https://www.schulministerium.nrw/textgenerierende-ki" }
  ]
},

/* ---------------------------------------------------------------- 4 */
{
  tag: 4,
  kategorie: "tool",
  titel: "Was weiß die Klasse schon? In 5 Minuten, ohne Anmeldung",
  problem: "Neues Thema – aber wo steht die Klasse? Melden tun sich immer dieselben drei.",
  loesungTitel: "So geht's mit der Oncoo-Kartenabfrage",
  loesung: [
    "Auf **oncoo.de** eine „Kartenabfrage“ erstellen und deine Frage eintragen. Kostenlos, keine Accounts – weder für dich noch für die Klasse.",
    "Den angezeigten Code an die Tafel. Die Schüler:innen schreiben auf dem iPad je **einen Gedanken pro Karte**.",
    "Am Beamer die Karten per Drag & Drop gemeinsam **clustern**."
  ],
  beispiel: [
    "**Geschichte, Kl. 8:** „Was fällt euch zu ‚Revolution‘ ein?“ – und direkt sehen, welche Vorstellungen schief sind.",
    "**Biologie, EF:** „Was passiert eurer Meinung nach bei einer Impfung im Körper?“",
    "**Als Exit-Ticket:** „Was ist noch unklar?“ – die nächste Stunde startet mit den Karten."
  ],
  hinweis: "Der Zugang läuft nur über den Code – Schüler:innen sollen keine Namen auf die Karten schreiben.",
  challenge: "Nutze die Kartenabfrage diese Woche einmal als Exit-Ticket. Anonym kommen ehrlichere Antworten.",
  quellen: [
    { titel: "oncoo.de", url: "https://www.oncoo.de/" },
    { titel: "Kurzinfo ONCOO (Landesbildungsserver BW)", url: "https://schule-bw.de/resolveuid/5344a45689f546b9b0ce97e32276b7e5" }
  ]
},

/* ---------------------------------------------------------------- 5 */
{
  tag: 5,
  kategorie: "fuerdich",
  titel: "Klausurkommentare nie wieder ausschreiben",
  problem: "Bei 30 Klausuren schreibst du 30-mal „Belege deine Aussage am Text“.",
  loesungTitel: "Textkürzel einrichten",
  loesung: [
    "**iPad:** Einstellungen → Allgemein → Tastatur → Textersetzung → „+“.",
    "**Word (Windows):** Datei → Optionen → Dokumentprüfung → AutoKorrektur-Optionen.",
    "Setz ein Zeichen wie `;` davor, damit nichts aus Versehen ausgelöst wird."
  ],
  beispielTitel: "Starter-Set",
  beispiel: [
    "`;zit` → „Belege deine Aussage mit einem Zitat (Zeilenangabe).“",
    "`;op` → „Achte auf den Operator: ‚Erläutern‘ verlangt mehr als ‚Nennen‘.“",
    "`;fs` → „Verwende hier den Fachbegriff.“",
    "`;gut` → „Sehr präzise formuliert – genau so!“"
  ],
  hinweis: "Die Textersetzung funktioniert in allen Apps mit der Standard-Tastatur – also auch beim Korrigieren in PDF-Apps.",
  challenge: "Leg heute fünf Kürzel an – bei der nächsten Korrektur sparst du locker eine halbe Stunde.",
  quellen: [
    { titel: "Anleitung: Textersetzung auf iPhone & iPad (schieb.de)", url: "https://www.schieb.de/716034/iphone-und-ipad-texte-automatisch-ergaenzen" }
  ]
},

/* ---------------------------------------------------------------- 6 */
{
  tag: 6,
  kategorie: "fuerdich",
  titel: "Nikolaus-Special: Fünf Dinge über unsere Namensgeberin",
  problem: "Wir heißen jeden Tag „Marie-Curie-Gymnasium“ – aber wie gut kennst du sie wirklich?",
  loesungTitel: "Wusstest du …?",
  loesung: [
    "1903 bekam sie als **erste Frau** einen Nobelpreis (Physik). Ursprünglich waren nur Pierre Curie und Henri Becquerel vorgeschlagen – Pierre bestand darauf, dass Marie die Ehrung teilt.",
    "Sie ist bis heute die **einzige Person mit Nobelpreisen in zwei verschiedenen Naturwissenschaften** (1911 folgte Chemie).",
    "Polonium benannte sie nach ihrem Geburtsland **Polen**.",
    "Ihre Laborhefte sind **bis heute radioaktiv** und liegen in bleiausgekleideten Boxen in der französischen Nationalbibliothek. Wer sie lesen will, unterschreibt einen Haftungsausschluss und trägt Schutzkleidung.",
    "Radiumpräparate **leuchten im Dunkeln** – ein bisschen wie das Türchen des Tages in diesem Kalender."
  ],
  beispielTitel: "Mini-Impuls für Mathe/Physik/Chemie",
  beispiel: [
    "Radium-226 hat eine Halbwertszeit von rund 1.600 Jahren. Wie viel Prozent der Strahlung der Hefte von ca. 1900 sind heute noch übrig? (Lösung: 0,5<sup>126/1600</sup> ≈ 95 %.)"
  ],
  challenge: "Erzähl morgen einer Klasse einen dieser Fakten – Wetten, dass jemand nachfragt?",
  quellen: [
    { titel: "NobelPrize.org: Marie Curie – Facts", url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/" },
    { titel: "NobelPrize.org: Marie Curie (Artikel)", url: "https://nobelprize.org/prizes/physics/1903/marie-curie/article" },
    { titel: "Christian Science Monitor: Why her papers are still radioactive", url: "https://www.csmonitor.com/Innovation/Horizons/2011/1107/Marie-Curie-Why-her-papers-are-still-radioactive" }
  ]
},

/* ---------------------------------------------------------------- 7 */
{
  tag: 7,
  kategorie: "tool",
  titel: "LOGINEO LMS: Kurs nicht jedes Jahr neu bauen",
  problem: "Neues Schuljahr, neuer Kurs – und du baust alles wieder von Hand nach?",
  loesungTitel: "So geht's: Import",
  loesung: [
    "Im **neuen** Kurs: **Mehr → Kurs wiederverwenden → Import** (je nach Version leicht anders benannt).",
    "Den alten Kurs auswählen, dann ankreuzen, welche Abschnitte und Aktivitäten mitkommen sollen.",
    "**Import ausführen** – fertig. Importiert werden nur Inhalte, **keine Nutzerdaten** (also keine Abgaben oder Bewertungen der alten Klasse)."
  ],
  beispiel: [
    "Deinen Q1-Kurs vom letzten Jahr in den neuen Q1-Kurs holen, nur die Abschnitte „Klausurvorbereitung“ und „Material“ auswählen.",
    "Bonus: Wenn du einen **Test** importierst, landen die Fragen gleich mit in der Fragensammlung."
  ],
  hinweis: "Du kannst nur aus Kursen importieren, in denen du Bearbeitungsrechte hast.",
  challenge: "Schau dir heute die Import-Seite in einem deiner Kurse an – nur mal klicken, nicht ausführen.",
  quellen: [
    { titel: "MoodleDocs: Import course data", url: "https://docs.moodle.org/en/Import_course_data" }
  ]
},

/* ---------------------------------------------------------------- 8 */
{
  tag: 8,
  kategorie: "nrw",
  titel: "Handyregeln: Was gilt eigentlich – und was kann ich tun?",
  problem: "Ein Handy liegt unter dem Tisch. Darfst du eingreifen und wie?",
  loesungTitel: "Die Rechtslage in NRW",
  loesung: [
    "Alle öffentlichen Schulen sollten bis Herbst 2025 eigene Regeln zur **privaten** Handynutzung in die **Schulordnung** aufnehmen.",
    "Beschlossen wird die Schulordnung von der **Schulkonferenz** (§ 65 Abs. 2 Nr. 25 SchulG).",
    "Ein Verstoß ist eine **Pflichtverletzung**: Es folgen erzieherische Einwirkungen, bei schweren oder wiederholten Verstößen auch **Ordnungsmaßnahmen** nach § 53 SchulG."
  ],
  beispielTitel: "Praxis-Tipp: einheitlich reagieren",
  beispiel: [
    "Kenn den genauen Wortlaut **unserer** Schulordnung – welche Maßnahme sie vorsieht, gilt für alle gleich.",
    "Ruhig, kurz, ohne Diskussion im Plenum: „Du kennst die Regel – [Maßnahme laut Schulordnung].“",
    "Bei Wiederholung: dokumentieren und die Klassenleitung informieren.",
    "Handys im Unterricht **auf deine Anweisung** (z. B. für eine Umfrage) bleiben davon unberührt."
  ],
  challenge: "Lies die Handyregel unserer Schulordnung heute einmal im Original.",
  quellen: [
    { titel: "Schulministerium NRW: Handynutzung in der Schule", url: "https://www.schulministerium.nrw/handynutzung-schule" },
    { titel: "Handlungsempfehlung „Smarter Umgang mit Handys“ (PDF)", url: "https://www.schulministerium.nrw/system/files/media/document/file/handlungsempfehlung-handynutzung_250325.pdf" }
  ]
},

/* ---------------------------------------------------------------- 9 */
{
  tag: 9,
  kategorie: "unterricht",
  titel: "Quellencheck in 5 Minuten: „Seitwärts lesen“",
  problem: "Schüler:innen glauben der ersten Website, die gut aussieht, oder der KI-Antwort, die überzeugend klingt.",
  loesungTitel: "Die Methode",
  loesung: [
    "**Nicht auf der Seite bleiben**: Neuer Tab – wer steckt hinter der Seite oder Behauptung?",
    "**Gegencheck**: Steht das auch in zwei unabhängigen, seriösen Quellen?",
    "**Bilder prüfen**: Über eine Bilder-Rückwärtssuche den Ursprung finden.",
    "Passt zum Medienkompetenzrahmen NRW, **Bereich 2.3 Informationsbewertung**."
  ],
  beispielTitel: "Quellen-Steckbrief (4 Fragen an die Tafel)",
  beispiel: [
    "**Wer?** Wer hat es veröffentlicht und welches Interesse steckt dahinter?",
    "**Wann?** Ist es aktuell?",
    "**Belegt?** Werden Quellen genannt – und stimmen sie?",
    "**Bestätigt?** Finde ich es woanders unabhängig wieder?"
  ],
  challenge: "Häng den Steckbrief an die nächste Rechercheaufgabe – egal in welchem Fach.",
  quellen: [
    { titel: "Medienkompetenzrahmen NRW", url: "https://medienkompetenzrahmen.nrw/" },
    { titel: "DigitalCheck NRW: Methodenblatt „Informieren & Recherchieren“ (PDF)", url: "https://www.digitalcheck.nrw/fileadmin/user_upload/digitalcheck/website/methoden/02-methodenblatt_02.pdf" }
  ]
},

/* ---------------------------------------------------------------- 10 */
{
  tag: 10,
  kategorie: "tool",
  titel: "WebUntis: Stundenplan direkt im iPad-Kalender",
  problem: "Du öffnest mehrmals am Tag WebUntis, nur um zu sehen, wo du als Nächstes hinmusst?",
  loesungTitel: "So geht's (iCal-Abo)",
  loesung: [
    "In **WebUntis** (Browser) deinen Stundenplan öffnen. Über das **Drei-Punkte-Menü unter dem Stundenplan** den persönlichen **iCal-Link** kopieren (in älteren Versionen über dein Profil).",
    "Auf dem iPad: **Einstellungen → Kalender** (ab iPadOS 18: Einstellungen → Apps → Kalender) **→ Accounts bzw. Kalender-Accounts → Account hinzufügen → Andere → Kalenderabo hinzufügen** und den Link einfügen.",
    "Ab jetzt stehen deine Stunden neben den privaten Terminen."
  ],
  beispiel: [
    "Ein Blick aufs Sperrbildschirm-Widget: „3. Std. 8b, Raum 204“ – ohne App-Wechsel."
  ],
  hinweis: "Abos aktualisieren sich zeitverzögert. Für kurzfristige Vertretungen gilt weiterhin WebUntis bzw. die Untis-App. Der Link ist persönlich, also nicht weitergeben. Findest du die Option nicht, ist sie an der Schule evtl. nicht freigeschaltet – dann den WebUntis-Admin fragen.",
  challenge: "Richte das Abo heute ein und prüfe morgen früh, ob alles stimmt.",
  quellen: [
    { titel: "Untis Hilfe: Kalender-Import und -Export im neuen Stundenplan", url: "https://help.untis.at/hc/en-150/articles/17526144631964" },
    { titel: "Untis Webhilfe: iCal-Kalender-Abonnement", url: "https://webhelp.untis.at/HTML/WebHelp/uk/untis/wu_ical_kalender_abonnement.htm" }
  ]
},

/* ---------------------------------------------------------------- 11 */
{
  tag: 11,
  kategorie: "nrw",
  titel: "Bildungsmediathek NRW: Filme ohne Urheberrechts-Kopfschmerzen",
  problem: "Du willst einen Film zeigen oder verlinken – aber ist das YouTube-Video rechtlich sauber?",
  loesungTitel: "Was du kostenlos bekommst",
  loesung: [
    "Lehrkräfte in NRW haben über die **Bildungsmediathek NRW** kostenfreien Zugriff auf **über 1.300 Medienpakete** des FWU – Filme (oft mit Transkript), Arbeitsblätter, Grafiken, interaktive Aufgaben.",
    "Die Medien dürfen im Rahmen der Lizenz **für den eigenen Unterricht angepasst** werden.",
    "Du darfst in Lernmanagement-Systemen **per Link** auf Medien verweisen, also auch im LOGINEO-Kurs.",
    "Ansprechpartner sind die **kommunalen Medienzentren**, z. B. für die Registrierung."
  ],
  beispiel: [
    "Fach + Thema suchen → **Medienliste** für die Unterrichtsreihe anlegen → Link in den LOGINEO-Kurs.",
    "Fertige Themenfelder nutzen, z. B. „Künstliche Intelligenz in der Schule“."
  ],
  challenge: "Melde dich an und such einen Film für deine nächste Unterrichtsreihe.",
  quellen: [
    { titel: "Bildungsmediathek NRW", url: "https://www.bildungsmediathek-nrw.de" },
    { titel: "Schulministerium NRW: Über 1.300 FWU-Medienpakete kostenfrei", url: "https://www.schulministerium.nrw/fwu-medien-der-bildungsmediathek-nrw-ueber-1300-medienpakete-fuer-den-unterricht-kostenfrei-nutzbar" },
    { titel: "Schulministerium NRW: Themenfeld „KI in der Schule“", url: "https://www.schulministerium.nrw/kuenstliche-intelligenz-der-schule-eine-sammlung-hochwertiger-unterrichtsmaterialien-und" }
  ]
},

/* ---------------------------------------------------------------- 12 */
{
  tag: 12,
  kategorie: "fuerdich",
  titel: "Samstags schreiben, Montags senden",
  problem: "Du erledigst Mails am Wochenende – und setzt damit unbeabsichtigt Eltern, Schüler:innen oder Kolleg:innen unter Antwortdruck.",
  loesungTitel: "„Später senden“ nutzen",
  loesung: [
    "**Apple Mail (iPad/iPhone, ab iOS 16):** Mail schreiben → **lange auf den blauen Senden-Pfeil drücken** → Zeitpunkt wählen oder „Später senden“ für eine eigene Uhrzeit.",
    "Geplante Mails liegen bis dahin im Postfach **„Später senden“**. Dort kannst du sie noch ändern oder löschen.",
    "Kann dein Mailprogramm das nicht: als Entwurf speichern und Montag früh abschicken."
  ],
  beispiel: [
    "Elternmail am Samstagabend geschrieben → geht Montag um 7:30 Uhr raus.",
    "Für dich gut: Der Kopf ist frei, die Mail ist trotzdem erledigt."
  ],
  challenge: "Plane deine nächste Wochenend-Mail für Montagmorgen.",
  quellen: [
    { titel: "Anleitung: Später senden mit Mail (Apfelpatient)", url: "https://www.apfelpatient.de/tipps-tricks/spaeter-senden-mit-mail-so-wird-die-ios-16-neuerung-verwendet" }
  ]
},

/* ---------------------------------------------------------------- 13 */
{
  tag: 13,
  kategorie: "fuerdich",
  titel: "Fokus „Feierabend“: Das iPad schweigt, wenn du frei hast",
  problem: "Um 21 Uhr blinkt noch der Messenger – und schon bist du gedanklich wieder in der Schule.",
  loesungTitel: "So geht's",
  loesung: [
    "**Einstellungen → Fokus → „+“ → Eigene** – Name z. B. „Feierabend“.",
    "Festlegen, wer und welche Apps **durchdürfen** (z. B. Familie), und dienstliche Apps (Messenger, Mail, WebUntis) **stummschalten**.",
    "Unter **Zeitplan** eine Uhrzeit festlegen, z. B. Mo–Fr ab 19 Uhr, am Wochenende ganztags. Ab dann aktiviert sich der Fokus automatisch."
  ],
  beispiel: [
    "Mitteilungen landen weiter im Hintergrund. Du siehst sie, wenn **du** willst – nicht, wenn sie kommen."
  ],
  challenge: "Richte den Fokus ein und teste ihn heute Abend.",
  quellen: [
    { titel: "Apple Community: Fokus einrichten und verwenden", url: "https://communities.apple.com/de/docs/DOC-250007295" }
  ]
},

/* ---------------------------------------------------------------- 14 */
{
  tag: 14,
  kategorie: "nrw",
  titel: "Noten auf dem privaten Gerät? Nur mit Genehmigung",
  problem: "Die Notentabelle mit Namen liegt auf deinem privaten Laptop? Das ist in NRW genehmigungspflichtig.",
  loesungTitel: "Was gilt",
  loesung: [
    "Schülerdaten auf **privaten** Geräten zu verarbeiten, muss seit 1995 **vorher von der Schulleitung genehmigt** werden (§ 2 Abs. 2 VO-DV I). Dazu gehört eine **Verpflichtungserklärung** der Lehrkraft.",
    "**Welche** Daten erlaubt sind, ist abschließend in **Anlage 3 der VO-DV I** aufgezählt.",
    "Förderpläne und AO-SF-Gutachten dürfen **nicht** auf privaten Geräten erstellt werden.",
    "Auf **dienstlichen** Geräten ist die Verarbeitung zulässig, wenn technische und organisatorische Schutzmaßnahmen greifen."
  ],
  beispielTitel: "Quick-Check",
  beispiel: [
    "Ist dein iPad **dienstlich** (vom Schulträger) oder **privat**?",
    "Privat → Genehmigungsformular ausfüllen und bei der Schulleitung einreichen.",
    "Gerät mit Code/Passwort sichern und nur die erlaubten Daten verarbeiten."
  ],
  challenge: "Kläre heute für dich: Liegen Schülerdaten auf einem privaten Gerät – und hast du die Genehmigung?",
  quellen: [
    { titel: "Schulministerium NRW: Datenschutz im Schulbereich", url: "https://www.schulministerium.nrw/themen/recht/datenschutz-im-schulbereich" },
    { titel: "Genehmigungsformular private Endgeräte (BASS, PDF)", url: "https://bass.schul-welt.de/anlagen/17580-1.pdf" },
    { titel: "Bezirksregierung Düsseldorf: Info zur VO-DV I (PDF)", url: "https://www.brd.nrw.de/document/20220503_4_Schule_Personalrat_Foerderschule_Info_2018_03.pdf" }
  ]
},

/* ---------------------------------------------------------------- 15 */
{
  tag: 15,
  kategorie: "unterricht",
  titel: "Ehrliches Schülerfeedback in 5 Minuten – im LOGINEO-Kurs",
  problem: "Du würdest gern wissen, wie dein Unterricht ankommt – aber niemand sagt es dir ins Gesicht.",
  loesungTitel: "So geht's: Aktivität „Feedback“",
  loesung: [
    "Im Kurs **Bearbeiten einschalten → Aktivität anlegen → Feedback**.",
    "Bei den Einstellungen für Fragen und Einträge **„Anonym“** wählen.",
    "Die Auswertung zuerst nur für dich sichtbar lassen und dann die wichtigsten Punkte mit der Klasse besprechen."
  ],
  beispielTitel: "Drei Fragen reichen",
  beispiel: [
    "„Das Tempo war: zu langsam / genau richtig / zu schnell.“",
    "„Am meisten geholfen hat mir …“",
    "„Ich wünsche mir mehr / weniger …“"
  ],
  hinweis: "Einmal gebaut, kannst du das Feedback per Import (Türchen 7) in jeden Kurs übernehmen.",
  challenge: "Starte vor den Ferien in einem Kurs eine Feedback-Runde.",
  quellen: [
    { titel: "Anleitung Feedback-Aktivität (LFB Baden-Württemberg, PDF)", url: "https://www.lehrerfortbildung-bw.de/st_digital/moodle/02_anleitungen/03trainer/03aktivitaeten/08feedback/20210430_anleitung_feedback.pdf" }
  ]
},

/* ---------------------------------------------------------------- 16 */
{
  tag: 16,
  kategorie: "nrw",
  titel: "Die neue Oberstufe in 2 Minuten",
  problem: "„Projektkurs, Präsentationsprüfung, keine Facharbeit mehr …?“ – Was kommt wann?",
  loesungTitel: "Das Wichtigste",
  loesung: [
    "Der Schulausschuss des Landtags hat der neuen **APO-GOSt** am 8. Juli 2026 zugestimmt.",
    "Sie gilt erstmals für den Jahrgang, der **2027/28 in die EF** kommt und **2030 Abitur** macht – bei uns also die **aktuelle Jahrgangsstufe 10**.",
    "Die neuen **Kernlehrpläne** treten am **1. August 2027** in Kraft, aufwachsend ab der EF.",
    "Ein **Projektkurs wird für alle verpflichtend**, dafür **entfällt die Facharbeit**.",
    "Neu sind **Präsentationsprüfungen**, Projektarbeit und neue Formen der Leistungsbewertung, außerdem landesweit **einheitliche Klausurzeiten**.",
    "KI-Systeme dürfen z. B. beim Ordnen von Ideen oder beim Faktencheck helfen. Ihr **Einsatz wird dokumentiert**."
  ],
  beispielTitel: "Was jetzt sinnvoll ist",
  beispiel: [
    "In der Fachschaft: neuen KLP sichten und das schulinterne Curriculum planen.",
    "Erste Ideen für Projektkurs-Themen sammeln, gern fachübergreifend."
  ],
  challenge: "Lies die offiziellen FAQ einmal quer – das dauert 10 Minuten.",
  quellen: [
    { titel: "Schulministerium NRW: Weiterentwicklung der gymnasialen Oberstufe", url: "https://schulministerium.nrw/weiterentwicklung-der-gymnasialen-oberstufe" },
    { titel: "Schulministerium NRW: Fragen und Antworten", url: "https://www.schulministerium.nrw/fragen-und-antworten-zur-weiterentwicklung-der-gymnasialen-oberstufe" },
    { titel: "Land NRW: Oberstufe moderner und näher an der Praxis", url: "https://www.land.nrw/pressemitteilung/nordrhein-westfalen-stellt-die-oberstufe-neu-auf-moderner-und-naeher-der-praxis" }
  ]
},

/* ---------------------------------------------------------------- 17 */
{
  tag: 17,
  kategorie: "unterricht",
  titel: "„Erläutern“ heißt nicht „aufzählen“: Operatoren als Spickzettel",
  problem: "Auf „Erläutere …“ antworten Schüler:innen mit drei Stichpunkten.",
  loesungTitel: "So geht's",
  loesung: [
    "Für jedes Abiturfach gibt es auf den Seiten zum Zentralabitur NRW eine **offizielle Operatorenübersicht** mit Definition und Anforderungsbereich.",
    "Mach daraus eine Karte mit drei Spalten: **Operator | Was ist gefordert? | Satzanfänge**.",
    "Gib die Karte schon in der Sek I aus – dann ist sie bis zum Abitur vertraut."
  ],
  beispielTitel: "Beispielzeile",
  beispiel: [
    "**erläutern** | Sachverhalt veranschaulichen und verständlich machen | „Das bedeutet …, weil … Ein Beispiel dafür ist …“",
    "**beurteilen** | mit Kriterien zu einem begründeten Urteil kommen | „Unter dem Aspekt … spricht für …, dagegen … Insgesamt …“"
  ],
  hinweis: "Mit der neuen Oberstufe können sich Listen ändern. Nimm immer die Fassung für den jeweiligen Abiturjahrgang.",
  challenge: "Erstell die Karte für deine fünf häufigsten Operatoren. Eine KI kann dir beim Formulieren der Satzanfänge helfen.",
  quellen: [
    { titel: "Zentralabitur NRW (GOSt): Fächerübersicht – dort je Fach die Operatoren", url: "https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/faecher" },
    { titel: "Beispiel: Operatoren Sozialwissenschaften (PDF)", url: "https://standardsicherung.schulministerium.nrw.de/cms/zentralabitur-gost/faecher/getfile.php?file=3947" }
  ]
},

/* ---------------------------------------------------------------- 18 */
{
  tag: 18,
  kategorie: "tool",
  titel: "Alte Kopiervorlage, keine Datei? In 30 Sekunden digital",
  problem: "Das beste Arbeitsblatt existiert nur noch als zerknitterte Papierkopie.",
  loesungTitel: "So geht's am iPad",
  loesung: [
    "**Scannen:** App **Dateien** → Zielordner öffnen → Menü **„…“** → **Dokumente scannen**. Das iPad erkennt die Seite automatisch und richtet sie gerade aus. Am Ende **Sichern** – fertig ist das PDF.",
    "**Text herauskopieren (Live Text):** Foto oder Scan öffnen → **Live-Text-Symbol** antippen → Text markieren → kopieren und z. B. in Pages einfügen.",
    "Live Text muss aktiv sein: Einstellungen → Allgemein → Sprache & Region."
  ],
  beispiel: [
    "Alten Lückentext scannen → Text kopieren → mit dem 4-Bausteine-Prompt (Türchen 1) in drei Niveaustufen umbauen lassen.",
    "Tafelbild am Stundenende abfotografieren → als PDF in den LOGINEO-Kurs."
  ],
  hinweis: "Beim Scannen aus Büchern gelten die Grenzen aus Türchen 2.",
  challenge: "Digitalisiere heute eine Vorlage, die du nur noch auf Papier hast.",
  quellen: [
    { titel: "Apple Support: Live Text mit der iPad-Kamera", url: "https://support.apple.com/te-in/guide/ipad/use-live-text-ipad50e4cb3d/16.0/ipados/16.0" },
    { titel: "Anleitung: Dokumente scannen in der Dateien-App (schieb.de)", url: "https://www.schieb.de/dokumente-scannen-in-der-dateien-app" }
  ]
},

/* ---------------------------------------------------------------- 19 */
{
  tag: 19,
  kategorie: "unterricht",
  titel: "Die letzte Stunde vor den Ferien – ohne Vorbereitung",
  problem: "Montag und Dienstag sind die letzten Schultage. Die Köpfe sind schon im Urlaub – und deiner vielleicht auch.",
  loesungTitel: "Drei Ideen, maximal 5 Minuten Vorbereitung",
  loesung: [
    "**KI-Halbjahresquiz:** Mit eurem KI-Tool: „Erstelle 10 Quizfragen zu [Themen des Halbjahres] für Klasse [x], mit Lösungen, eine davon als Scherzfrage.“ → am Beamer in Teams spielen.",
    "**Fachbegriff-Activity:** Per Oncoo-Kartenabfrage (Türchen 4) sammelt die Klasse die Begriffe des Halbjahres. Die Karten sind dann die Spielkarten für Erklären, Zeichnen oder Pantomime.",
    "**Wer bin ich? – Fachversion:** Stirnzettel mit Elementen, Epochen, Vokabeln oder Persönlichkeiten aus dem Fach. Wer mag, nimmt Marie Curie dazu."
  ],
  beispiel: [
    "Physik Kl. 9: „Bin ich ein Teilchen?“ – „Habe ich eine Ladung?“ – „Bin ich das Elektron?“"
  ],
  challenge: "Such dir eine Idee aus und speicher den Prompt bzw. die Karten schon heute ab.",
  quellen: [
    { titel: "oncoo.de", url: "https://www.oncoo.de/" }
  ]
},

/* ---------------------------------------------------------------- 20 */
{
  tag: 20,
  kategorie: "fuerdich",
  titel: "Sonntags-Quiz: Was ist hängen geblieben?",
  problem: "Sieben Fragen zu den bisherigen Türchen – nur für dich, ohne Noten. 😉",
  quiz: [
    { frage: "Wie viel eines Schulbuchs (Erscheinungsjahr 2015) darfst du für deine Klasse einscannen?",
      antworten: ["10 %, maximal 10 Seiten", "15 %, maximal 20 Seiten", "25 %, maximal 30 Seiten", "So viel ich will – für die eigene Klasse"],
      richtig: 1, erklaerung: "15 %, höchstens 20 Seiten – einmal pro Schuljahr und Lerngruppe (Türchen 2)." },
    { frage: "Wer beschließt die Handyregeln in der Schulordnung?",
      antworten: ["Die Schulleitung allein", "Die Lehrerkonferenz", "Die Schulkonferenz", "Das Schulministerium"],
      richtig: 2, erklaerung: "Die Schulkonferenz nach § 65 Abs. 2 Nr. 25 SchulG (Türchen 8)." },
    { frage: "Für welchen Jahrgang gilt die neue APO-GOSt zuerst?",
      antworten: ["Abitur 2027", "EF 2027/28 – Abitur 2030", "EF 2026/27 – Abitur 2029", "Erst ab 2032"],
      richtig: 1, erklaerung: "Erstmals für die EF 2027/28, also Abitur 2030 (Türchen 16)." },
    { frage: "Was ersetzt in der neuen Oberstufe die Facharbeit?",
      antworten: ["Eine zusätzliche Klausur", "Ein verpflichtender Projektkurs", "Eine mündliche Prüfung", "Nichts – sie fällt einfach weg"],
      richtig: 1, erklaerung: "Ein Projektkurs wird für alle verpflichtend (Türchen 16)." },
    { frage: "Wie viele FWU-Medienpakete findest du kostenlos in der Bildungsmediathek NRW?",
      antworten: ["Rund 100", "Rund 500", "Über 1.300", "Über 10.000"],
      richtig: 2, erklaerung: "Über 1.300 Medienpakete (Türchen 11)." },
    { frage: "Was brauchst du, um Schülerdaten auf deinem privaten Laptop zu verarbeiten?",
      antworten: ["Nichts, solange er ein Passwort hat", "Eine Genehmigung der Schulleitung", "Die Zustimmung der Eltern", "Eine Fortbildung"],
      richtig: 1, erklaerung: "Eine vorherige Genehmigung der Schulleitung nach § 2 Abs. 2 VO-DV I (Türchen 14)." },
    { frage: "Warum sind Marie Curies Laborhefte heute noch in Bleiboxen?",
      antworten: ["Wegen Schimmel", "Sie sind mit Radium kontaminiert", "Zum Schutz vor Licht", "Aus Tradition"],
      richtig: 1, erklaerung: "Radium-226 hat eine Halbwertszeit von rund 1.600 Jahren (Türchen 6)." }
  ],
  challenge: "Teil das Quiz mit einer Kollegin oder einem Kollegen – wer hat mehr Punkte?",
  quellen: []
},

/* ---------------------------------------------------------------- 21 */
{
  tag: 21,
  kategorie: "nrw",
  titel: "KI und Leistungsbewertung: Die Ampel-Regel",
  problem: "Ein Referat klingt verdächtig glatt. Durfte KI benutzt werden – und wie bewertest du das?",
  loesungTitel: "Was hilft",
  loesung: [
    "NRW hat im Februar 2023 als erstes Bundesland einen **Handlungsleitfaden zum Umgang mit textgenerierenden KI-Systemen** herausgegeben. Das Ministerium betont: Ein generelles Verbot von KI-Anwendungen steht nicht zur Debatte.",
    "Am meisten bringt **Transparenz vorab**: Lege bei jeder Aufgabe fest, ob und wie KI erlaubt ist.",
    "Lass die KI-Nutzung **dokumentieren** – so sieht es auch die neue Oberstufe vor.",
    "Bewerte stärker den **Prozess**: Zwischenstände, kurze Gespräche, mündliche Nachfragen."
  ],
  beispielTitel: "Die Ampel auf dem Aufgabenblatt",
  beispiel: [
    "🔴 **Rot:** ohne KI, z. B. bei Übungen zur Basiskompetenz.",
    "🟡 **Gelb:** KI für Ideen und Feedback erlaubt, der Text ist selbst geschrieben. Die Nutzung wird kurz dokumentiert (Prompt + was übernommen wurde).",
    "🟢 **Grün:** KI ausdrücklich Teil der Aufgabe, z. B. „Prüfe und verbessere den KI-Text“ (Türchen 3)."
  ],
  hinweis: "Zur Vertiefung gibt es einen kostenfreien Moodle-Kurs der QUA-LiS NRW auf der LOGINEO-NRW-LMS-Instanz.",
  challenge: "Setz die Ampel auf die nächste Hausaufgabe oder Referatsvergabe.",
  quellen: [
    { titel: "Schulministerium NRW: Textgenerierende KI (Leitfaden + Vertiefungskurs)", url: "https://www.schulministerium.nrw/textgenerierende-ki" },
    { titel: "Handlungsleitfaden KI (MSB NRW, PDF)", url: "https://www.schulministerium.nrw/system/files/media/document/file/handlungsleitfaden_ki_msb_nrw_230223.pdf" }
  ]
},

/* ---------------------------------------------------------------- 22 */
{
  tag: 22,
  kategorie: "tool",
  titel: "KI als Gesprächspartner: Interview mit Marie Curie",
  problem: "Ein Rollenspiel mit einer historischen Person kann ein Thema lebendig machen. Aber wie setzt man das sinnvoll und kritisch ein?",
  loesungTitel: "Das Prinzip: Rollenspiel + Faktencheck",
  loesung: [
    "**Rolle festlegen:** Die KI bekommt eine klare Rolle, ein Jahr und Regeln, zum Beispiel: *„Du bist Marie Curie im Jahr 1903. Antworte kurz und in einfacher Sprache. Wenn du etwas nicht weißt, sag das.“*",
    "**Fragen vorbereiten:** Die Klasse formuliert vorab Interviewfragen. So wird gezielt gefragt statt drauflos geplaudert.",
    "**Faktencheck:** Danach werden die Antworten mit seriösen Quellen abgeglichen. Was stimmt, was ist erfunden?",
    "Ohne Schülerzugang geht es auch am Beamer: Du stellst die Fragen der Klasse."
  ],
  beispielTitel: "Beispiel für Physik, Chemie oder Geschichte",
  beispiel: [
    "Die Schüler:innen fragen „Marie Curie“ nach der Entdeckung von Polonium und Radium und danach, warum sie Polonium nach Polen benannt hat.",
    "Danach der Abgleich mit NobelPrize.org. Jede gefundene Abweichung ist ein Lernanlass zur Quellenkritik (siehe Türchen 9)."
  ],
  hinweis: "Wichtig ist die Einordnung: Die KI spielt eine Rolle, sie ist keine Quelle. Genau das sollen die Schüler:innen dabei erkennen.",
  challenge: "Probier das Rollenspiel einmal selbst aus und notier dir drei Antworten, die du überprüfen würdest.",
  quellen: [
    { titel: "NobelPrize.org: Marie Curie – Facts", url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/" },
    { titel: "Schulministerium NRW: Handlungsleitfaden zu textgenerierender KI", url: "https://www.schulministerium.nrw/textgenerierende-ki" }
  ]
},

/* ---------------------------------------------------------------- 23 */
{
  tag: 23,
  kategorie: "unterricht",
  titel: "Ferienlektüre light: Fertige KI-Stunden aus NRW",
  problem: "Ferien! Kein Muss – aber falls du im Januar eine fertige KI-Stunde suchst …",
  loesungTitel: "KIMADU in einem Satz",
  loesung: [
    "Im Projekt **KIMADU** („KI im Mathematik- und Deutschunterricht“) haben Lehrkräfte mit der Universität Siegen praxiserprobte Unterrichtsbeispiele für die **Sek I** entwickelt.",
    "Die Lehr-Lernszenarien und **„didaktischen Agenten“** gibt es als **OER** (CC BY-SA) auf lernen-digital.nrw – kostenlos und anpassbar.",
    "Auch für andere Fächer lohnt der Blick: Viele Ideen lassen sich übertragen."
  ],
  beispiel: [
    "Mathe: KI-Agenten als Lernbegleiter, z. B. der „Fürst Stochastikus“.",
    "Deutsch: KI-Agenten zum Schreiben und Überarbeiten."
  ],
  challenge: "Keine. Es sind Ferien. ☕ (Lesezeichen setzen reicht.)",
  quellen: [
    { titel: "Schulministerium NRW: KIMADU-Beispiele", url: "https://www.schulministerium.nrw/beispiele-fuer-den-lernfoerderlichen-einsatz-von-ki-im-mathematik-und-deutschunterricht" },
    { titel: "lernen-digital.nrw: KIMADU-Materialien Mathematik", url: "https://www.lernen-digital.nrw/kimadu-materialien-fuer-den-mathematikunterricht" }
  ]
},

/* ---------------------------------------------------------------- 24 */
{
  tag: 24,
  kategorie: "fuerdich",
  titel: "Frohe Weihnachten! 🎄",
  problem: "Heute gibt's keinen Tipp, nur ein Danke – für ein ganzes Halbjahr Unterricht, Korrekturen, Elterngespräche und Geduld.",
  loesungTitel: "Ein Satz unserer Namensgeberin",
  loesung: [
    "Marie Curie schrieb einmal sinngemäß, es sei gewesen, als öffne sich ihr eine neue Welt – die Welt der Wissenschaft.",
    "Vielleicht war in diesem Kalender ja auch ein kleines neues Türchen für dich dabei."
  ],
  beispielTitel: "Alle 24 Türchen bleiben offen",
  beispiel: [
    "Du kannst jederzeit nachlesen – auch im Januar, wenn der Alltag zurück ist.",
    "Welches Türchen hat dir am meisten gebracht? Sag es uns gern – das hilft für den nächsten Kalender."
  ],
  challenge: "Mach jetzt Pause. Wirklich. ✨",
  quellen: [
    { titel: "NobelPrize.org: Marie Curie – Women who changed science", url: "https://nobelprize.org/womenwhochangedscience/stories/marie-curie" }
  ]
}

];
