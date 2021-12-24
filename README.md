# Demo 2




<hr>

# Demo 1 webtoepassing - Access Denied
Onze website in "productie" : https://accessdeniedproduction.web.app

> Onze website om te "developpen" https://access-denied-79d03.web.app

## Hoe start je dit project op?

Je kan een uitgebreid stappenplan terugvinden in de `README_GET_STARTED.md` file, te vinden in de ``documentatie`` folder.

In twee woorden: 
1. Open een terminal en voer `npm i` uit.
> Indien er zich een probleem voordoet gelieve de `README_GET_STARTED.md` file te lezen.
2. Als er geen prblemen zijn bij het invoeren van het voorgaande commando, kan je meteen het project opstarten door `npm start` uit te voeren in je terminal.

# Wat hebben we verwezenlijkt?

## De grote lijnen van de vooropgesteld functionaliteit
<br>

1. Een gebruiker heeft toegang tot onze webapplicatie, via https://
> Een gebruiker kan toegang krijgen tot de ``public routes ``van onze webapplicaite.

> Een gebruiker kan zich authenticeren en vervolgens toegang verkrijgen tot de ``private routes`` van onze webapplicatie.
<hr>

2. Een gebruiker kan zich authenticeren.
> Een gebruiker kan een account aanmaken (email, naam en wachtwoord) 

> Een gebruiker kan inloggen met zijn credentials.
<hr>

3. Onze applicatie houdt controle over de auhtenticatie toestand van onze gebruiker.
> Dit gebeurt aan de hand van een Authentication Wrapper die gebruik maakt van een Auhtentication Provider. Meer hierover in `FIREBASE_README.md` file.
<hr>

4. Een gebruiker kan zijn profiel waarnemen en aanpassen
> Een gebruiker kan persoonlijke informatie, beschikbaar op zijn profiel, aanpassen.
> Een gebruiker kan zijn email en wachtwoord veranderen.
<hr>

5. Een gebruiker kan indieen hij zijn wachtwoord vergeten is, een email toegestuurd krijgen om een nieuw wachtwoord in te stellen.<hr>

6. Een gebruiker kan ons(eigenaars van de website) contacteren doormiddel van een contactformulier.
> De email wordt verstuurd aan de hand van Emailjs. De data wordt hierbij versleuteld. Vervolgens krijgen wij (eigenaars van de website) de plaintext data in een email (Gmail account).<hr>

7. Een gebruiker kan een advertentie plaatsen om zijn auto te verkopen. <hr>
8. Een gebruiker kan een auto zoeken aan de hand vooropgestelde criteria's.<hr>
9. Een gebruiker kan de details waarnemen van een advertentie.<hr>
10. Een gebruiker kan via de home pagina kennis maken met onze hoofdfunctionaliteiten.
<hr>

### Publieke Routes - Pagina's
`Home`<br>`Search Car` , `Evaluate Car`<br>`Login` , `Registration` , `Password Forgotten`

### Private Routes - Pagina's
`Place Announcement`
`Profile`, `Update Profile`

## Beveiliging van onze toepassing. 

![alt text](https://github.com/EHB-TI/web-app-acces-denied/blob/AuthWithProvider/documentation/FlowFirbase.png)

> Ref to FlowFirebase.png

### Prioritaire risico's

De belanrgijskte thread gedurende deze development is het correct aanmaken van een authenticatie systeem om hierop verder te bouwen in de volledige webtoepassing.

Vervolgens moet een duidelijke scheiding worden gemaakt tussen publieke en privé pagina's. 
Hierbij wordt opnieuw authenticatie gebruikt.

Onze applicatie is hoofdzakelijk gebasseerd op het online zetten van een advertensie en het ophalen van reeds geplaatste advertenties. Hierbij is een database nodig, met de nodige aanpassingen in onze architectuur. 

Het communiceren met onze database moet uiterst beveiligd zijn.

De uitdanging bestaat er in om onze thread boundaries beter te identificeren en te verduidelijken, om ze vervolgens concreet te kunnen aanpakken.

### Hoe worden bedreigingen aangepakt
<br>

Authentication is een ``back-end Firebase services``. Deze wordt aangeboden via de open-source libraries 'Auth SDK' en 'Auht UI'. Deze libraries bezorgen een streamline (for development) die we kunnen gebruiken in onze front-end.

#### Level of security

Aanvakelijk is de authenticatie met email en password, niet de "meest beveiligde" methode. Dit omwille van het feit dat nog steeds OAuth2 het meest aangeraden is,  zoals een 'Google sign in with provider'.

Dit is dan ook de reden waarom we overwegen om toch gebruik te maken van de Google SignIn method.

Het voordeel door zelf een authenticatie te gebruiken is voornamelijk dat we zelf de data van onze gebruiker bij het registreren kunnen configureren.

Dit is dan ook de voornaamste reden dat wanneer een gebruiker een account aanmaakt, de gebruiker een emailverrificatie toegestuurd krijgt.

Het meermaals aanloggen met slecht credentials wordt dan ook gelogd en de toegang voor de gebruiker wordt vergrendeld.

#### Separation of Privileges

Enerzijds beschermen we onze github, door de main branche te beschermen van een commit zonder deze te laten aanvaarden door een ander teamlid. Bovendien zorgen we ervoor dat de toegang tot de Firebase Console wordt gereduceert. Op deze wijze kunnen 'comprimised developers' geen belangrijke aanpassingen aanbrengen.

Bovendien zorgen we ervoor dat de gehoste file, onze website folders, niet zomaar kunnen aangepast worden. Hiervoor is een manuele ingrijp nodig!

We zorgen hiervoor om een duidelijk flow op te stellen tijdens de development, om in verschillende fases naar een productie omgevingen te kunnen overstappen.


### Firebase API key

Onze ``Firebase API key`` en ander configuratie variabelen om de Firebase App te kunnen initializern worden bijgehouden in de ``env.local`` file.

>De reden hiervoor is enkel voor protection against Version Control.

    Hierdoor worden de env-variabelen niet op Github geplaatst en kan dus een malifide user die toegang heeft verkregen tot onze github, niets doen zonder deze env-variabelen.

De ``Firebase API key is geen private key`` ten opzichte van de meeste APIs. 
    
    Dit betekent dat het technische gezien de bedoeling is om deze in plaintext 'inside our code' te plaatsen.

De Firebase API key wordt enkel gebruikt om de client aan te duiden welke Firebase App deze moet gebruiken.

Alles omtrent de security van onze Cloud database zoals toegang tot de database worden afgehandeld in de ``Security Rules``.

#### Principe of Least Privilege:

We zorgen ervoor dat default alles privileges staan op 'deny all'. Niemand heeft dus toegang tot de database.

Vervolgens geven we specifieke  toegang tot een gebruiker. Hierbij wordt gespecifieerd welke acties hij kan doen (read, write, delete) en bovendien op welke gedeelte van de Firestore deze gebruiker toegang zal verkrijgen.

Dit biedt ons ``protectie tegen ransomware attacks``.
    
    Een aanval waarbij een malifide gebruiker de database overneemt (kopieert) en vervolgens verwijdert uit het systeem. De hacker zal vervolgens meestal om geld vragen, om de data die hij gestolen en verwijdert heeft in ruil voor geld terug te bezorgen.


 ### Hosting
<br>
 Onze hosting gebeurt momenteel via ``Firebase Hosting``. Deze is gelinkt aan onze ``domeinnaam`` verkegen via Combell.com.

 We overwegen nog om misschien Cloudflare toe te voegen als extra beveiliging voor DOS aanvallen. Dit omdat we reeds met Firebase 'abusive traffic' kunnen monitoren, bijkomend kunnen we hierbij ook Alerts instellen. In ieder geval zal bij een te hoog traffiek een ``API-level restriction (triggers when abusive traffic)`` getriggerd worden.
 
 We hebben onze architectuur opgesteld om steeds de toestand van onze gebruik te kunnen opnemen. 
 Dankzij onze Auhtentication Provider kan steeds de authenticatie toestand worden opgenomen en als basis dienen om met onze Firestore te communiceren. De Firestore functie die we gebruiken runnen vanuit een trusted environment. Deze verkijgen we door de open-source Firebase SDK te gebruiken.

## HTTPS

Onze webtoepassing is beschikbaar via HTTPS.

Onze website: https://access-denied-79d03.web.app

