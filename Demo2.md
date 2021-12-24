

- :white_check_mark: HTTPS
- ✅ Wachtwoorden: 

De evaluatiecriteria waaraan wij niet aan voldeden ivm wachtwoorden, hebben we allemaal kunnen wegwerken door gebruik te maken van passwordless authentication.
Passwordless authentication zal onze beveiliging versterken doordat het al de riskante wachtwoordbeheerpraktijken elimineert en aanvalsvectoren te bepeperkt.  

- ✅ Beveiliging tegen typische web vulnerabilities

Wij hebben deze vulnerabilities opgelost door de X-Frame-Options en X-Content-Option headers toe te voegen in de response headers

- ✅ Conform Europese privacy regelgeving

Onze domein werd geanalyseerd door Cookiebot. Om GDPR compliant te kunnen zijn op CookieBot, moet het domein eerst voldoen aan verschillende vereisten. Wij voldoen aan alle vereiste. 
Ook hebben we ons thread model geregeld aangepast, in de laatste versie hebben we steeds een risico-level vermeld bij elke thread met bijkomende uitleg en waar nodig een oplossing.

- ✅ Er wordt ook rekening gehouden met de bevindingen en aanbevelingen van de security testers - behoudens een goede argumentatie ga ik ervan uit dat ze allemaal geïmplementeerd worden.


# Evaluatiecriteria ivm privacy

- :white_check_mark: Wij gebruiken geen Cookies noch trackers.
- ✅ iedere pagina van de toepassing een duidelijk zichtbare link moet bevatten naar de privacyverklaring.



# Bevindingen en aanbevelingen van de security testers
- ✅ Gebruikers kunnen de interessantste auto's vinden door een formulier in te vullen zonder enige kennis van auto's te hebben 	


- ✅ Contact opnemen met de eigenaars is nu mogelijk via email

- :white_check_mark: Bij herhaald mislukte pogingen wordt het account tijdelijk geblokkeerd. We hadden echter graag ingesteld dat de tijd exponentieel stijgt. Echter is dit een betalende feature.

- :white_check_mark: XSS-aanvallen voorkomen
- :white_check_mark: Toevoegen van X-Frame-Options
- :white_check_mark: Toevoegen van X-Content-Type-Options

- :white_check_mark: Bijkomend hebben we X-XSS-Protection toegevoegd
- :white_check_mark: Bovendien hebben we ook X-UA-Compatible toegevoegd
- :white_check_mark: Als laatste hebben we ook CORS policies toegevoegd voor onze font files, afbeeldingen en css

- :white_check_mark: We hebben ons best gedaan om code duplicatie te vermijden, bovendien hebben we aandacht besteed aan performance en network testen op onze eigen website om onze gebruiker een aangename webervaring te garanderen.



