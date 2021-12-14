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
| Gebruikers kunnen veilig inloggen om gebruik te maken van de website en contact op te nemen met producteigenaren | :x: | Contact opnemen met producteigenaar is onmogelijk
| Gebruikers kunnen zelfstandig gebruik maken van onze website | :white_check_mark:
| Zowel klant als verkoper moeten veilig gebruik kunnen maken van de website zonder zich te verdwalen in een groot assortiment aan vragen en criteria | :white_check_mark:
| Door logging en monitoring toe te voegen, kunnen we onze applicatie verbeteren en bugs veel sneller detecteren | :white_check_mark:



## Testen evaluatiecriteria

## HTTPs

- De website is beschikbaar over HTTPs. De Firebase API dat gebruikt is eveneens beschikbaar over HTTPs.
Verder gebeurt er een 301 redirect van HTTP naar HTTPs.
- De website beschikt over een SSL certificaat geverifieerd door Google Trust Services LLC.
- Het domein krijgt een A+ score bij de SSL Labs server test
- Iedere respons bevat een Strict-Transport-Security header, namelijk: strict-transport-security max-age=31556926; includeSubDomains; preload
- Het domein zit in de HSTS preload list
- Er bestaat een CAA record voor het domein. Deze is geautoriseerd door pki.goog.



## Aanmelden

- Een gebruiker kan zich afmelden
- De applicatie geeft ten all tijde duidelijk aan of de gebruiker al dan niet aangemeld is.
Bij het heropenen van een venster, nadat deze gesloten werd, is de gebruiker nog steeds ingelogd.
- Na aanmelden kan de gebruiker zijn of haar gegevens opvragen én updaten via zijn profielpagina. 
- Na registratie kan de gebruiker direct inloggen. Dit betekent dat er geen controle wordt uitgevoerd 
op het email adres via een bevestigingsmail bijvoorbeeld. (Severity: Medium)
- Via de admin dashboard is het mogelijk om audit logs te bekijken.



## Wachtwoorden

- Bij registratie ...: 
	- Kan het wachtwoord minimaal 6 karakters bevatten, hierop wordt er geen 
	controle uitgevoerd. Dit betekent dat er niet wordt gecontroleerd of het wachtwoord speciale karakters, 
	cijfers ... bevat. Dit is een voorbeeld van een geaccepteerde wachtwoord: aaaaaa (Severity: High)
	- Is het mogelijk om een zeer lange wachtwoord mee te geven van minstens 64 karakters. 
	- Is het mogelijk om elk 'printable' ASCII karakter op te nemen in het wachtwoord. 
	- Is het mogelijk om een wachtwoord te kiezen dat vaak voorkomt. Hier wordt geen gebruikt gemaakt
	van de HIBP Pwned Passwords API. (Severity: Medium)
	- Wordt er gebruik gemaakt van Firebase Authentication. Firebase Authentication gebruikt een 
	intern aangepaste versie van Scrypt om wachtwoorden te hashen. 

- Bij herhaalde mislukte pogingen wordt het account niet geblokkeerd / De tijdsinterval wordt niet verhoogd tussen de herhaalde misklukte pogingen. (Severity: Medium)



## Beveiliging tegen typische web vulnerabilities

- Access Denied maakt gebruik van JSX, JSX voorkomt injectie-aanvallen. Dankzij React DOM 
is het onmogelijk om iets te kunnen injecteren dat niet expliciet in de toepassing is geschreven. 
Alles wordt geconverteerd naar een string voordat het wordt weergegeven. Dit helpt XSS-aanvallen te voorkomen. 
- De X-Frame-Options header is niet teruggevonden in de response headers. (Severity: Medium)
- De X-Content-Type-Options header is niet teruggevonden in de response headers. (Severity: Low)


## REST APIs

De toepassing omvat geen REST API, maar maakt wel gebruik van de React Router library voor routing. 


--------------------------------------------------------------------------------------------------------------------

## Aanbevelingen

### Aanmelden
Bekijk de documentatie van Firebase Authentication (https://firebase.google.com/docs/auth/web/email-link-auth)
om een email verificatie uit te voeren na registratie.

### Wachtwoorden

- Bekijk de documentatie van Firebase (https://firebase.google.com/docs/reference/security/database/regex)
om ervoor te zorgen dat het ingevoerde wachtwoord speciale karakters moet bevatten.
- Gebruik de HIBP Pwned Passwords API. Hiermee kan je bij registratie controleren of een wachtwoord gelekt 

### Web vulnerabilities

- Bekijk de documentatie van Firebase Hosting Headers (https://firebase.google.com/docs/hosting/full-config#headers)
om de X-Frame-Options Header en X-Content-Type-Options in te stellen. 
- Maak gebruik van een reverse proxy service, BV. Cloudflare, om de toepassing te beschermen tegen DDoS attacks zoals rate limiting.

### Code

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
	- SSL Labs: https://www.ssllabs.com/ssltest/
