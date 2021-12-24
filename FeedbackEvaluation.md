# Software security: Security testen
- [Acceptance criteria](#Acceptance%20criteria)
- [Testen evaluatiecriteria](#Testen%20evaluatiecriteria)
  - [HTTPs](#HTTPs)
  - [Aanmelden](#Aanmelden)
  - [Wachtwoorden](#Wachtwoorden)
  - [Beveiliging tegen typische web vulnerabilities](#Beveiliging%20tegen%20typische%20web%20vulnerabilities)
  - [REST APIs](#REST%20APIs)
- [Aanbevelingen](#Aanbevelingen)
- [Gebruikte tools](#Gebruikte%20tools)
## Acceptance criteria
| Criteria                                                                              |  Geslaagd |  Opmerkingen |
| ------------------------------------------------------------------------------------- |  :----: | :----: |
| Gebruikers kunnen de interessantste auto's vinden door een formulier in te vullen zonder enige kennis van auto's te hebben | :x: 
| Gebruikers kunnen enkel auto's of onderdelen verkopen door alle criteriapunten in te vullen | :x: | Auto's verkopen werkt niet, auto-onderdelen verkopen werkt
| Gebruikers kunnen enkel auto's of onderdelen verkopen door alle criteriapunten in te vullen | :white_check_mark:
| Gebruikers kunnen veilig inloggen om gebruik te maken van de website en contact op te nemen met producteigenaren | :x: | Contact opnemen met producteigenaar is onmogelijk
| Gebruikers kunnen zelfstandig gebruik maken van onze website | :white_check_mark:
| Zowel klant als verkoper moeten veilig gebruik kunnen maken van de website zonder zich te verdwalen in een groot assortiment aan vragen en criteria | :white_check_mark:
@@ -44,21 +44,19 @@ Verder gebeurt er een 301 redirect van HTTP naar HTTPs.
Bij het heropenen van een venster, nadat deze gesloten werd, is de gebruiker nog steeds ingelogd.
- Na aanmelden kan de gebruiker zijn of haar gegevens opvragen én updaten via zijn profielpagina. 
- Na registratie kan de gebruiker direct inloggen. Dit betekent dat er geen controle wordt uitgevoerd 
op het email adres via een bevestigingsmail bijvoorbeeld. (Severity: Medium)
op het email adres via een bevestigingsmail bijvoorbeeld. (Severity: High)
- Via de admin dashboard is het mogelijk om audit logs te bekijken.



## Wachtwoorden

- Bij registratie ...: 
	- Kan het wachtwoord minimaal 6 karakters bevatten, hierop wordt er geen 
	controle uitgevoerd. Dit betekent dat er niet wordt gecontroleerd of het wachtwoord speciale karakters, 
	cijfers ... bevat. Dit is een voorbeeld van een geaccepteerde wachtwoord: aaaaaa (Severity: High)
	- Kan het wachtwoord minimaal 6 karakters bevatten, hierop wordt er controle op de lengte uitgevoerd.
	- Is het mogelijk om een zeer lange wachtwoord mee te geven van minstens 64 karakters. 
	- Is het mogelijk om elk 'printable' ASCII karakter op te nemen in het wachtwoord. 
	- Is het mogelijk om een wachtwoord te kiezen dat vaak voorkomt. Hier wordt geen gebruikt gemaakt
	van de HIBP Pwned Passwords API. (Severity: Medium)
	van de HIBP Pwned Passwords API. (Severity: High)
	- Wordt er gebruik gemaakt van Firebase Authentication. Firebase Authentication gebruikt een 
	intern aangepaste versie van Scrypt om wachtwoorden te hashen. 

@@ -104,7 +102,6 @@ om de X-Frame-Options Header en X-Content-Type-Options in te stellen.

- Maak gebruik van de commande npm audit fix om de onveilige dependencies op te lossen.
Dit zijn de resultaten van een npm audit scan: 14 vulnerabilities (8 moderate, 5 high, 1 critical).
- Hou het framework steeds up to date met de laatst stabiele versie.
- Let op code duplicatie (SonarQube).

--------------------------------------------------------------------------------------------------------------------
## Gebruikte tools 
- Website scanner for malicious URLs: https://urlscan.io
- DAST: https://www.zaproxy.org/download/
- Secret leaks: https://github.com/zricethezav/gitleaks
- SCA: npm audit
- SAST: 
	- https://www.sonarqube.org/downloads/
	- https://www.codacy.com/
- Network test: 
	- Port scan: https://nmap.org/
	- Malware scan: 
		- https://quttera.com/
		- https://sitecheck.sucuri.net
	- X-Frame-Options Header: https://gf.dev/x-frame-options-test
	- MIME: https://gf.dev/mime-sniffing-test
	- HSTS: https://hstspreload.org/
	- CAA: https://www.entrust.com/resources/certificate-solutions/tools/caa-lookup
