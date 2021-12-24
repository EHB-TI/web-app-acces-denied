

- :white_check_mark: HTTPS
- :x: Aanmelden
- :x: Beveiliging tegen typische web vulnerabilities
- :x: Conform Europese privacy regelgeving


We hebben ons thread model geregeld aangepast, in de laatste versie hebben we steeds een risico-level vermeld bij elke thread met bijkomende uitleg en waar nodig een oplossing.

- :x: De huidige versie van het threat model inventariseert de bedreigingen waarvoor nog geen tegenmaatregelen werden genomen, m.a.w. de risico's die je, al dan niet voorlopig


- :x: Er wordt ook rekening gehouden met de bevindingen en aanbevelingen van de security testers - behoudens een goede argumentatie ga ik ervan uit dat ze allemaal geïmplementeerd worden.


# Evaluatiecriteria ivm privacy

- :white_check_mark: Wij gebruiken geen Cookies noch trackers.
- :x: iedere pagina van de toepassing een duidelijk zichtbare link moet bevatten naar de privacyverklaring,
- :x: betrokkenen hun wettelijke rechten moeten kunnen uitoefenen,
.........



# Bevindingen en aanbevelingen van de security testers
- :x: Gebruikers kunnen de interessantste auto's vinden door een formulier in te vullen zonder enige kennis van auto's te hebben 	


- :x: Contact opnemen met producteigenaar is onmogelijk!
Gebruikers kunnen veilig inloggen om gebruik te maken van de website en contact op te nemen met producteigenaren

- :white_check_mark: Bij herhaald mislukte pogingen wordt het account tijdelijk geblokkeerd. We hadden echter graag ingesteld dat de tijd exponentieel stijgt. Echter is dit een betalende feature.

- :white_check_mark: XSS-aanvallen voorkomen
- :white_check_mark: Toevoegen van X-Frame-Options
- :white_check_mark: Toevoegen van X-Content-Type-Options

- :white_check_mark: Bijkomend hebben we X-XSS-Protection toegevoegd
- :white_check_mark: Bovendien hebben we ook X-UA-Compatible toegevoegd
- :white_check_mark: Als laatste hebben we ook CORS policies toegevoegd voor onze font files, afbeeldingen en css

- :white_check_mark: We hebben ons best gedaan om code duplicatie te vermijden, bovendien hebben we aandacht besteed aan performance en network testen op onze eigen website om onze gebruiker een aangename webervaring te garanderen.



