# Auto-Webseite Projekt

## Inhaltsverzeichnis

1. [Projektübersicht](#projektübersicht)
2. [Ziel der Webseite](#ziel-der-webseite)
3. [Technologien](#technologien)
4. [Bild- und Video-Planung](#bild-und-video-planung)
5. [Wireframe-Übersicht](#wireframe-übersicht)
6. [Umsetzung und Planung](#umsetzung-und-planung)
7. [Backend-Inegration](#backend-integration)
8. [Tests und Optimierungen](#tests-und-optimierungen)
9. [GitHub/Projektmanagement](#github-projektmanagement)
10. [Umsetzung des Ergebnisses](#umsetzung-des-ergebnisses)
11. [Umsetzung der Projektdokumentation](#umsetzung-der-projektdokumentation)
12. [Persönliche Bewertung](#persönliche-bewertung)

## 1. Projektübersicht

Dieses Projekt wurde im Rahmen eines Schulprojekts im Fach Informatik erstellt. Die Webseite dient dazu, meine eigenen Fotografien und Videos von Autos zu präsentieren und gleichzeitig Informationen zu den abgebildeten Automodellen bereitzustellen. Die Bilder und Videos wurden auf der Automesse in Genf aufgenommen, was den Inhalt der Seite besonders authentisch macht.

## 2. Ziel der Webseite

Die Webseite soll eine informative und visuell ansprechende Präsentation meiner Auto-Fotografien bieten. Sie richtet sich an Autoliebhaber, Enthusiasten und potenzielle Käufer, die mehr über die gezeigten Automodelle erfahren möchten. Neben beeindruckenden Bildern sollen detaillierte Informationen über die Fahrzeuge zur Verfügung stehen.

## 3. Technologien

- **React:** Für die Entwicklung der interaktiven Benutzeroberfläche.
- **Tailwind CSS:** Für das Styling und Design der Webseite, um eine konsistente und ansprechende Benutzeroberfläche zu gewährleisten.
- **GitHub:** Für Versionskontrolle und Projektmanagement.

## 4. Bild- und Video-Planung

### 4.1 Fahrzeugauswahl

Ich habe mich entschieden, die folgenden Fahrzeuge auf der Automesse in Genf zu fotografieren und zu filmen:

- **McLaren P1**
- **Bugatti Veyron**
- **Ferrari LaFerrari**
- **Porsche 959**
- **Formel 1 Alfa Romeo**

### 4.2 Videoaufnahmen

Ziel der Videoaufnahmen ist es, dynamische Einblicke in die Details und Designs der Fahrzeuge zu geben. Die Videos zeigen die Fahrzeuge aus verschiedenen Winkeln und beinhalten Nahaufnahmen, um das Design und die technischen Details hervorzuheben.

### 4.3 Bildaufnahmen

Die Bilder wurden aufgenommen, um die Schönheit und Kraft der Autos einzufangen. Es gibt sowohl Gesamtaufnahmen als auch Detailaufnahmen, die den Charakter jedes Fahrzeugs widerspiegeln.

## 5. Wireframe-Übersicht

### 5.1 Startseite Wireframe

![alt text](https://github.com/Giu1447/Autogalerie/blob/main/src/pictures/Home.png)

- **Header:** Links das Logo, rechts die Navigationsleiste (Startseite, Modelle, Galerie, Videos, Kontakt).
- **Hero-Bereich:** Grosses Auto-Bild mit Slogan und CTA-Button („Mehr erfahren“).
- **Kurze Einführung:** Ein Textabschnitt, der die Webseite vorstellt.
- **Modelle-Vorschau:** Drei bis vier quadratische Bilder mit Kurzbeschreibungen der beliebtesten Modelle und einem „Weitere Modelle“-Button.
- **Footer:** Kontaktinformationen, Links zu sozialen Medien, Impressum/Datenschutz.

### 5.2 Modelleseite Wireframe

![alt text](https://github.com/Giu1447/Autogalerie/blob/main/src/pictures/Modelle.png)

- **Header:** Links das Logo, rechts die Navigationsleiste (Startseite, Modelle, Galerie, Videos, Kontakt).
- **Dropdown-Bereich:** Drodown Bereich um die Marken und Modelle auszusuchen.
- **Carousel-Vorschau:** Carousel Vorschau der Bilder.
- **Footer:** Kontaktinformationen, Links zu sozialen Medien, Impressum/Datenschutz.

Bisher habe ich das Wireframe für die Startseite erstellt, das als Grundlage für die Implementierung dient. Die weiteren Seiten wie Modelle, Galerie, Videos und Kontakt werden in den nächsten Schritten ebenfalls als Wireframes entworfen.

### 5.3 Galerieseite Wireframe

![alt text](https://github.com/Giu1447/Autogalerie/blob/main/src/pictures/Galerie.png)

- **Header:** Links das Logo, rechts die Navigationsleiste (Startseite, Modelle, Galerie, Videos, Kontakt).
- **Carousel-Vorschau:** Carousel Vorschau der Bilder geordnet nach den Marken.
- **Footer:** Kontaktinformationen, Links zu sozialen Medien, Impressum/Datenschutz.

Bisher habe ich das Wireframe für die Startseite erstellt, das als Grundlage für die Implementierung dient. Die weiteren Seiten wie Modelle, Galerie, Videos und Kontakt werden in den nächsten Schritten ebenfalls als Wireframes entworfen.

### 5.4 Bewertungseite Wireframe

![alt text](https://github.com/Giu1447/Autogalerie/blob/main/src/pictures/Bewertung.png)

- **Header:** Links das Logo, rechts die Navigationsleiste (Startseite, Modelle, Galerie, Videos, Kontakt).
- **Carousel-Vorschau:** Carousel Vorschau der Bilder.
- **Review:** Ein kurzes Review über das Auto.
- **Review-Video:** Ein embedded Review Video auf Youtube.
- **Footer:** Kontaktinformationen, Links zu sozialen Medien, Impressum/Datenschutz.

Bisher wurde das Wireframe für die Startseite erstellt, das als Grundlage für die Implementierung dient. Die weiteren Seiten wie Modelle, Galerie, Videos und Kontakt werden in den nächsten Schritten ebenfalls als Wireframes entworfen.

## 6. Umsetzung und Planung

### Aktueller Status:

- **Wireframe-Erstellung:** Das Wireframe für die Startseite ist fertiggestellt.
- **Technologieauswahl:** React und Tailwind CSS wurden als Haupttechnologien für die Entwicklung festgelegt.

### Geplante Schritte:

1. **Erstellung der Wireframes für die restlichen Seiten:** Modelle, Galerie, Videos und Kontakt.
2. **Umsetzung der Startseite in React:** Aufbau der Basisstruktur und Implementierung des Header- und Hero-Bereichs.
3. **Styling mit Tailwind CSS:** Anwendung des Designs auf die Startseite und Anpassung für mobile Geräte.
4. **Implementierung der Navigationslogik:** Einrichtung des React-Routers für die Navigation zwischen den verschiedenen Seiten.

### Aufgabenstatus:

- **Offen:** Gestaltung und Umsetzung der Modelle-Seite, Galerie und Kontaktseite.
- **In Bearbeitung:** Entwicklung und Design der Startseite.
- **Erledigt:** Auswahl der Technologien und Erstellung des ersten Wireframes.

## 7. Backend-Integration

### 7.1 Ziele des Backends

Das Backend wurde entwickelt, um die Bild- und Videodaten zentral zu speichern und für das Frontend bereitzustellen. Es ermöglicht:  

- Eine REST-API, um Bilder und Videos hochzuladen und abzurufen.  
- Speicherung von Mediendaten in einer Datenbank (z. B. MySQL oder H2).  
- Effiziente Verwaltung der Mediendaten über Endpunkte.  

### 7.2 Technologien im Backend

- **Spring Boot:** Für die Entwicklung der REST-API.  
- **MySQL:** Für die persistente Speicherung der Daten.  
- **Maven:** Für das Dependency Management und die Build-Konfiguration.

### 7.3 Backend-Funktionalitäten

1. **API-Endpunkte:**  
   - **`GET /images`**: Gibt eine Liste der gespeicherten Bilder zurück.  
   - **`POST /images`**: Ermöglicht das Hochladen von neuen Bildern.  
   - **`GET /videos`**: Gibt eine Liste der gespeicherten Videos zurück.  
   - **`POST /videos`**: Ermöglicht das Hochladen von neuen Videos.  

2. **Bild- und Video-Verwaltung:**  
   - Speicherung der Dateien auf dem Server oder in der Datenbank.  
   - Bereitstellung von URLs, die im Frontend verwendet werden können.  

3. **Frontend-Integration:**  
   - API-Aufrufe über Axios/`fetch()` im Frontend, um dynamische Inhalte anzuzeigen.  

## 8. Tests und Optimierungen

### 8.1 Teststrategie

Um die Qualität und Zuverlässigkeit der Webseite sicherzustellen, wurden verschiedene Tests durchgeführt:  

1. **Backend-Tests:**  
   - Unit Tests für die REST-API-Endpunkte (z. B. mit JUnit).  
   - Integrationstests, um die Kommunikation zwischen Backend und Datenbank zu überprüfen.  

2. **Frontend-Tests:**  
   - Component Tests mit Jest und Testing Library.  
   - Tests der API-Aufrufe, um sicherzustellen, dass die Endpunkte korrekt integriert sind.  

3. **Google Lighthouse:**  
   - Durchführung von Analysen zur Leistung, Barrierefreiheit, Best Practices und SEO.  
   - Optimierungen auf Basis der Ergebnisse:  
     - **Leistung:** Lazy Loading für Bilder, Reduzierung der Bildgröße.  
     - **Barrierefreiheit:** Verbesserungen bei Farbkontrasten und Screenreader-Kompatibilität.  
     - **Best Practices:** Konsistenz bei Meta-Tags und sicherer Zugriff.  
     - **SEO:** Hinzufügen von Alt-Texten für Bilder, strukturierte Daten.

### 8.2 Testresultate

- **Backend:** Alle Endpunkte liefern die erwarteten Ergebnisse und bestehen die Tests.  
- **Frontend:** Komponenten wie das Bildkarussell und die Navigation sind fehlerfrei.  
- **Lighthouse:**  
  - Leistung: 90+  
  - Barrierefreiheit: 95+  
  - Best Practices: 100  
  - SEO: 90+

## 9. GitHub/Projektmanagement

- Das Projekt wird auf GitHub gehostet und regelmässig aktualisiert.
- Alle Änderungen werden in kleinen, nachvollziehbaren Commits festgehalten.
- Der Fortschritt wird über GitHub Issues und Project Boards dokumentiert.

## 10. Umsetzung des Ergebnisses

- Die Webseite wird gemäss den entworfenen Wireframes und unter Verwendung der festgelegten Technologien entwickelt.
- Der aktuelle Fokus liegt auf der Implementierung der Startseite.
- Die geplante Funktionalität und das Design entsprechen den Projektzielen und Anforderungen.

## 11. Umsetzung der Projektdokumentation

- Die Projektdokumentation wird fortlaufend im Git-Repository gepflegt.
- Das Readme-Dokument enthält eine vollständige Übersicht über die Projektziele, Technologien und den aktuellen Stand der Entwicklung.
- Änderungen und Fortschritte werden zeitnah dokumentiert, um einen transparenten Entwicklungsprozess sicherzustellen.

## 12. Persönliche Bewertung

Die bisherige Arbeit an der Auto-Webseite hat mir ein tieferes Verständnis für die Anwendung von React und Tailwind CSS vermittelt. Die Erstellung des Wireframes war ein wichtiger Schritt, um die Struktur und das Design der Webseite zu planen. In den nächsten Schritten freue ich mich darauf, die Webseite weiterzuentwickeln und die geplanten Funktionen umzusetzen, um meine Fotografien in einem ansprechenden Rahmen zu präsentieren.

**Giulian Mazzeo**  
**Klasse:** 5IM22a  
**Modul:** Informatik Prog 2
