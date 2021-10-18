# Goal
Our website will be selling used cars (“second-hand”).
Unlike any other car buying website, we are targeting our customers first. Instead of letting the customer getting lost in a list of choices, this website helps the customer to find the perfect car for him. Are you looking for your first car to learn how to drive? Or maybe you have a large family and need some more space? 

Our website shows what is best for you, after answering a few questions. We will also keep the users search data stored so we can optimize our customer's interests with A.I. – this is a Proof of Concept: by storing all data from our customers on our website, we will have enough data to populate our own recommendation AI (neural network), but therefore we need data which will be time-expensive -.
 
Our goal is to make our application user-friendly and focus on clients who have no knowledge about cars or car pieces. 
A customer will be able to find a selection of cars that match what he is looking for, without getting lost in a large assortment of cars.
A seller will be able to sell a car or car parts and pieces.

We are only asking and storing personal information able to improve our application, we do care about the privacy of our customers so at any moment you will be able to get access to all the data stored, you concerning.

There are a few requirements needed before you can sell a car, on our website.
We do not want customers to worry anymore about the vehicle inspection, not enough images,... or other insufficient information. 

For example: creating an advertisement requires images (sides, front, back, inside), descriptions about exterior and interior of the car, descriptions of the customer (new driver, occasional driver..), car conditions, car-pass… 

Maybe you don't need or want to sell an entire car or maybe you are looking for some car pieces to repair a car?
The main reason to add car-pieces on our website is that some cars will be potentially damaged or in some cases, some car-pieces will need to be changed in the future. 
Able to help our customers to also take care of their car, we offer the possibility to buy and sell separated car-pieces. There will be some restrictions too before putting an advertisement online.

# Acceptance criteria
Criteria:
•	Users can find the best cars for their interests, by filling in a form without having any knowledge of cars in the first place
  •	Basic questions will be asked about the customer himself, able to target the best car-category
  •	Basic questions about what the customer would like to have, to be sure it is matching his budget and other criteria.
  •	Picking some random users of different ages and different knowledge about cars and let them use/test our website. Able to         check if our application is giving good results.
•	Users can only sell cars or parts by filling in all criteria points
  •	An advertisement must contain specific information, all advertisements will have descriptions, images, and a list of               characteristics.
  •	This will help us improve our recommendation AI and improve our car selection.
  •	This way we will be able to display the same amount of information for each advertisement placed on our website.
•	Users can log in safely to make use of the website and contact product owners
  •	A system will be created to securely send messages using our website.
•	Users can make use of our website independently without having trouble doing so
  •	Mobile devices: smartphones and tablets, independent of the OS should be able to see a decent version of our website.
    •	Mobile compatibility test ( using Google bot engines we can easily find out if our website is completely compatible with           mobile devices)
  •	The desktop version of the application will be irreproachable 
    •	Performance tests, devices tests, form and dataflow testing
•	Both customer and seller have to be able to make use of the website in a safe and secure way without getting lost in a large assortment of questions and criteria.
  •	A user will be to easily create an advertisement, able to create the best advertisement and have descent information about the     vehicles and car-parts we will be asking a lot of information and images. 
      •	We will create a clean and interactive design able to keep our users interested and don not borrow them with exhausting           questions
    •	We will also provide questions with prefilled in answers or examples able to help our customers creating an advertisement of       quality without losing too much time
•	Adding logging and monitoring will help us improve our application and detect bugs much faster.
  •	Adding Crashlytics will helps us discover whenever a user has a problem using our application and detect in code what the         error is.
  •	Adding Analytics will help users improve the usability
  •	Access to search data, time user spent on the website, amount of clicks …
  •	Adding Google Search (Google indexation) will improve our website in the long term and provide more data, also search data,       timestamp, location …

## Busniness Model
After a user bought a car, he will be able to keep all information about his car stored on our website. This way if one day he needs to sell it, he will have a complete history of the car (description, reparations, images, damages…).
This way the user will also be tempted to sell his car using our website again the same way he initially bought his car on our website.
Each advertisement placed will be free, only if you provide all information about the car.
Otherwise, you can buy the services to let us fill in all the characteristics and creating the descriptions.
Also, you can invest money to get your advertisement in the top rank whenever a user is looking in the rubric “all cars”…

# Threat model

## STRIDE
### Spoofing: Authentication
#### Threat
  A hacker can gain access to our application pretending to be another user.
  Or a hacker can pretend to be our application.
#### Defence/ Solution | Mitigate
Firebase: Cloud-services
  GetAuth() from Firebase will help us verify if a user is correctly logged in and verify if the user stays logged in – returns a   unique authentication key to determine if a user is correctly logged in -. A service from Firebase Authentication.
  We will also ensure that whenever a user logs in on a new device an email or a notification will be sent.
  Firebase provides build-in CA, this way it becomes impossible for a hacker to act as a Firebase service.
HTTPS: 
  By hosting our website using Firebase hosting, we will provide a valid SSL-CA. This way our website will be secure and available   as ‘https://..’, and prevent us from spoofing. A hacker will not be able to act as our website.
Mitigation:
   By providing extra Rules in our Database, security features for adding rules to our cloud database, we will prevent users to      manipulate our database. In this case, whenever a hacker gain access to a user account he won't be able to do destroy or get      our entire database.
   
### Tampering: Integrity
#### Threat
  Modifying data or code whenever it crosses the network.
####Defence/ Solution | Mitigate
  Firebase: Cloud-services
    Principle of least privileges:
    Each user will only have the necessary privileges. Using Firebase rules we will be able to widely set those rules to prevent       users to modify data from other users and maintain our database integrity.
    Our website will be manually hosted, using Firebase Hosting. The only way to change code, and apply this on our hosted             website, will be to have our credentials and make the changes on our local computer.

### Repudiation: Non-repudiation
#### Threat
Modifying data or code whenever it crosses the network.
#### Defence/ Solution | Mitigate
  Before doing/submitting important information/action the user will need to confirm these actions. This way repudiation will be    avoided.
  Whenever a user visits our website he will need to accept our conditions and cookie policies. It will be popped up, this way a user needs to accept to decline it. 
  A user will not be able to then say “I certainly didn’t visit that website” because he clicked first on the link and then accepted our conditions.
  
### Information Disclosure: Confidentiality
#### Threat
Exposing information to someone is not authorized is.
#### Defence/ Solution | Mitigate
  Using AAA and configure each page where a user must be logged in with an authentication service wrapper, a user won't be able to access other private resources.
  Each of our developers is aware of the dangers of losing or publishing their credentials, this is the only way to modify or erase our application, database, or services.
  
### Denial of Service: Availability 
#### Threat
Deny or degrade service to users
#### Defence/ Solution | Mitigate
  Setting up logging and monitoring will help us know whenever a DDOS attack is happening.
  Additionally, by using Cloudflare we provide an extra security layer for DDOS attacks. Normally using Cloudflare it becomes very difficult to get a website down.
  
 ### Elevation of Privilege: Authorization
#### Threat
Gain capabilities without proper auth2
#### Defence/ Solution | Mitigate
  Using AAA and configure each page where a user must be logged in with an authentication service wrapper, a user won't be able to access other private resources.
  It is not possible to inject code or modify code related to our functionalities. We are building a website, so clicking F12 will always display all the content, scripts, links … We need to isolate all our database functions and other sensible functionalities, this way it will not be possible to modify them. 
  
## Security analysis 
### Cloud Firestore as backend 
For our project, we will use Cloud Firestore as our backend. Cloud Firestore is a flexible, NoSQL, scalable cloud database for mobile, web, and server development from Firebase and Google Cloud Platform. The Firestore works with collections and documents, which makes it easy to communicate with the backend services of our Applications. Furthermore, we also use other services from Firebase, like Firebase Messaging, Cloud Storage, Machine Learning kit, and of course the Firebase Authentication. The main reason we chose Firebase is that it is a Cloud service. Each feature works with one principle: real-time connection. 
Using Firebase as a backend service will give us a lot of extra possibilities. For example:  
• Cloud Firestore will keep data in-sync across client apps through realtime listeners.  
• Using the Firestore Rules we can prevent every non-authorized user to access our database.  
• The Firebase Authentication will provide us with a high-security log-in. Using the FirebaseUser class we can access IdToken and the authStateChanged of all users.  
Creating a real-time website and improve the security of our backend service are the objectives we are trying to accomplish through this project. 
 
Top vulnerabilities and how we deal with them  
 
#### Injection  
  This type of attack allows an attacker to inject code into a program or query or inject malware onto a computer in order to execute remote commands that can read or modify a database structure, or change data on a website. However, for our project, we will use Firestore which is a No-SQL Cloud Database. With Firestore, developers don’t build an SQL command (or any string command composed of various parts that require escaping) in order to execute a query. Instead, they use an API provided by the SDK and pass strings that are automatically managed by the API, which means that injection is not an issue with Firestore.  

#### Poor code quality 
##### Mistakes to avoid  
  -Too many things going on in one function  
  -Commented-out code  
  -Non-descriptive naming of variables  
  -Messy formatting code  
  -Hard coding  

##### Tips to avoid poor code quality 
  -Visual demonstration  
  -Write comments in the code  
  -Use the debugger  
  -Bug tracker 
  -Version control  
  -Automated test 
 
To be able to exploit code issues is a difficult task. The attacker will typically exploit vulnerabilities in this category by supplying carefully crafted inputs to the victim. Typical types of attacks will exploit memory leaks and buffer overflows. Some vulnerabilities are hard to detect and the impact of such attacks are most likely not critical, but they can still deal a great amount of damage to the system.

#### Reverse engineering 
By looking at the source code of a website you can understand how a website is made, which is called reverse engineering.  
The technical Impacts of this attack are quite moderate. An attacker may exploit reverse engineering to achieve any of the following:  
            1. Reveal information about back end servers  
            2. Reveal cryptographic constants and ciphers  
            3. Perform attacks against back end systems 

##### How to protect a website from reverse engineering?  
  It is impossible to protect a website 100% from reverse engineering. However, it is possible to make it harder for an attacker to extract data from the website, here are some examples: 

  -Obfuscation: modifying a website’s binary to make it harder for humans to read. Obfuscation hides function and class names in your compiled Dart code, making it difficult for an attacker to reverse engineer your proprietary website.  
  -Write important parts of code in C/C++ and add them as a library: C/C++ libraries can also be disassembled into assembly code, but it is extremely time-consuming to reverse engineer a large library from the assembly.  
  -Use algorithms: Do not store resources on the device in raw format. Store them in the form of some algorithm 
 
 #### Data encryption 
  Converting plain text into unintelligible text and vice-versa. Firebase services also encrypt data in transit using HTTPS and logically isolate customer data. 
  Firestore will automatically encrypt all the data before it is written to disk and will also be encrypted at rest. Using the Firebase Authentication Services, data is automatically and transparently decrypted when read by an authorized user. Each Firestore object's data is encrypted[1] and each encryption key is itself encrypted with a regularly rotated set of master keys. 

#### Security threats  
##### What if someone is logged in on a user's account without knowing it?
We have solved this issue by alerting the user via email whenever someone logged in on his account on another device. By realizing this feature, we needed something unique in every device. The first thing that came up in our minds was the mac-address. But we didn’t choose the mac address due to security reasons. Therefore, we will use Firebase Messaging to get this unique number. The first time a user signs in, he will get a unique id which will be stored in Firestore and whenever someone logs in, the first thing that happens is checking whether his unique id matches the one in the Firestore. If that is not the case, then the user will get alerted by receiving an email.  
##### What if someone made multiple fake accounts?  
We solved this issue by adding email verification to our website. So, whenever a user registers, he will get an email to the email he put in the registration field. If the user does not click on the link sent to his email, it will not be possible for the user to go to the home page, and even when the user found a way to get to the home page, the Firestore rules will be there to block him. 
 

# Deployment
*minimally, this section contains a public URL of the app. A description of how your software is deployed is a bonus. Do you do this manually, or did you manage to automate? Have you taken into account the security of your deployment process?*
# *you may want further sections*
*especially if the use of your application is not self-evident*


