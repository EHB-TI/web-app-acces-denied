# Goal
Our website will be selling used cars (“second-hand”).
Unlike any other car buying website, we are targeting our customers first. Instead of letting the customer getting lost in a list of choices, this website helps the customer to find the perfect car for him. Are you looking for your first car to learn how to drive? Or maybe you have a large family and need some more space? 

Our website shows what is best for you, after answering a few questions. We will also keep the users search data stored so we can optimize our customer's interests with A.I. 
>This is a Proof of Concept: 
<br>By storing all data from our customers on our website, we will have enough data to populate our own recommendation AI (neural network), but therefore we need data which will be time-expensive -.
 
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
>	Users can find the best cars for their interests, by filling in a form without having any knowledge of cars in the first place

* Basic questions will be asked about the customer himself, able to target the best car-category

*  Basic questions about what the customer would like to have, to be sure it is matching his budget and other criteria.


*  Picking some random users of different ages and different knowledge about cars and let them use/test our website. Able to check if our application is giving good         results.

<hr>

>	Users can only sell cars or parts by filling in all criteria points

* An advertisement must contain specific information, all advertisements will have descriptions, images, and a list of characteristics.

*  	This will help us improve our recommendation AI and improve our car selection.

*  	This way we will be able to display the same amount of information for each advertisement placed on our website.
<hr>

>	Users can log in safely to make use of the website and contact product owners

*	A system will be created to securely send messages using our website.

<hr>

>	Users can make use of our website independently without having trouble doing so

*	Mobile devices: smartphones and tablets, independent of the OS should be able to see a decent version of our website.

*  Mobile compatibility test ( using Google bot engines we can easily find out if our website is completely compatible with mobile devices)

* The desktop version of the application will be irreproachable 

*	Performance tests, devices tests, form and dataflow testing

<hr>

>	Both customer and seller have to be able to make use of the website in a safe and secure way without getting lost in a large assortment of questions and criteria.

* A user will be to easily create an advertisement, able to create the best advertisement and have descent information about the     vehicles and car-parts we will be asking a lot of information and images. 

*	We will create a clean and interactive design able to keep our users interested and don not borrow them with exhausting questions

* We will also provide questions with prefilled in answers or examples able to help our customers creating an advertisement of quality without losing too much time

<hr>

>	Adding logging and monitoring will help us improve our application and detect bugs much faster.

* Adding Crashlytics will helps us discover whenever a user encounter a problem. We will have a detaild log of the error in question.

* Adding Analytics will help us improve the usability of our website, and also retrieve very valueble data about user experiences, such as access to search data, time user spent on the website, amount of clicks …

* Adding Google Search (Google indexation) will improve our website in the long term and provide more data, also search data, timestamp, location …

<hr>
<br>

### Extra: Busniness Model

<hr>
After a user bought a car, he will be able to keep all information about his car stored on our website. This way if one day he needs to sell it, he will have a complete history of the car (description, reparations, images, damages…)

This way the user will also be tempted to sell his car using our website again the same way he initially bought his car on our website.
Each advertisement placed will be free, only if you provide all information about the car. Otherwise, you can buy the services to let us fill in all the characteristics and creating the descriptions.

Also, you can invest money to get your advertisement in the top rank whenever a user is looking in the rubric “all cars”…

# Threat model

## Flow of our webapplication

Flow of the Front-end and the Back-end.
>The communication between our users, webapplication and Firebase Services.

![alt text](https://github.com/EHB-TI/web-app-acces-denied/blob/main/Frontend-Backend.png)

Basic flow of administration access to our webapplication.
> Additionally:
<br>The Security Rules that garantee access to our services, and the set up of privileges for access control.

![alt text](https://github.com/EHB-TI/web-app-acces-denied/blob/main/AdminAccess.png)


## STRIDE
<hr>

### Spoofing: Authentication
> Threat
<br> 
*A hacker can gain access to our application pretending to be another user.
Or a hacker can pretend to be our application.*
#### Defence/ Solution | Mitigate
<hr>

Firebase Cloud Services
<hr>

  We will use Firebase SDK, which is a open-source library.
  
  > Important, because it makes it more accessible, more people can discover possible threads or important issues and errors)

  The Firebase SDK provides access to the initialization of a Firebase App.
  
  We will initialiaze this application using our Firebase Configuration, which contains an API key. This API key is not private. 
  > Which means it is not a thread that everyone can have access to thsi API key. 
  
    But we deside to put this variables into a `.env` file.
    This way it will protect use against a user that obtain illegal access to our version control platform - github.

  Once our Firebase App is intialized we can start using Firebase Serverless Services like Authentication and Cloud Firestore database.

    Using an authentication provider, combined with an authentication wrapper, we will be able to distinguish authenticated users from non autheticated users.
  
  From the Firebase Authentication we can access the `authStateChanged() or onIdStateChanged()` which provides all information about the authentication state.

  >  We will also ensure that whenever a user logs in on a new device an email or a notification will be sent.

  The Authentication functions as well as the Cloud Firestore functions run in a trusted environment. Important is the fact they are Serverless.

  Firebase provides build-in CA, this way it becomes impossible for a hacker to act as a Firebase service.

HTTPS: 
<hr>

  By hosting our website using ``Firebase Hosting``, we will provide a valid SSL-CA. This way our website will be secure and available as a HTTPS website ‘https://..’, and prevent us from spoofing. A hacker will not be able to act as our website.

Mitigation:
<hr>

  As mentioned before the Firebase API key is not private.
  Therefor it is important to activate Security Rules.
  The Security rules is the way Firebase handles access control.

  By providing strong Security Rules in our Cloud Firestore database, we will prevent users without privileges to manipulate our database.
  
  > In this case, whenever a hacker gain access to a user account he won't be able to do destroy or copy our entire database.

  If we provide strong and good Security Rules we will be protected against ransomware attacks.
<hr>


### Tampering: Integrity

#### Threat
<hr>

    Modifying data or code whenever it crosses the network.

#### Defence/ Solution | Mitigate
<hr>

Firebase: Cloud-services

> Principle of least privileges:

Each user will only have the necessary privileges. Using Firebase rules we will be able to widely set those rules to prevent users to modify data from other users and maintain our database integrity.
Our website will be manually hosted, using Firebase Hosting. The only way to change code, and apply this on our hosted website, will be to have our credentials and make the changes on our local computer.
<hr>

### Repudiation: Non-repudiation
#### Threat

    Modifying data or code whenever it crosses the network.

#### Defence/ Solution | Mitigate

1. Monitoring and logging whenever a user is commiting a sensible action is part of our job.

    Not only we will use this logs for intern working, or whenever a user needs information about is actions, but also we will create a security feature where our client will be able to see his actions. 
    > Actions will be database interaction or sensible actions like changing email address or password.

    Beside the fact of logging actions we can also log device and ip-information. This way we can put actions in place whenever a user is logging in on other devices or from a different network.

2. Before doing/submitting important information/action the user will need to confirm these actions. This way repudiation will be avoided.

    Whenever a user visits our website he will need to accept our conditions and cookie policies. It will be popped up, this way a user needs to accept or to decline it. 
    > This way a user wont be able to then say “I certainly didn’t visit that website”, because he accepted or declided or policies, he made an action to enforce access to our website.
<hr>
<br>

### Information Disclosure: Confidentiality
#### Threat
<hr>

    Exposing information to someone who is not authorized is.
#### Defence/ Solution | Mitigate
<hr>
Using AAA and configure each page where a user must be logged in with an authentication service wrapper, a user won't be able to access other private resources.
Each of our developers is aware of the dangers of losing or publishing their credentials, this is the only way to modify or erase our application, database, or services.
<hr>
<br>

### Denial of Service: Availability 
#### Threat
<hr>

    Deny or degrade service to users

#### Defence/ Solution | Mitigate
<hr>
Setting up logging and monitoring will help us know whenever a DOS attack is happening.

> Monitoring and logging abusive traffic 

> Set up Alerts depending of this logs

> Set up actions whenever a specific maximum traffic is reached. This actions will have effect on the back-end of the Firebase Services.

In addition Firebase itself is providing a form of DOS protection. This is for the Cloud Firestore Database and Authentication.
Whenever a certain abusive traffic is reached and API restriction will be triggered and have effect on the back-end. This is an action that is automatically triggered when using Firebase services. 
<hr>
 
  
### Elevation of Privilege: Authorization
<hr>

#### Threat
<hr>

    Gain capabilities without proper Oauth2
#### Defence/ Solution | Mitigate
<hr>

Using AAA and configure each page where a user must be logged in with an authentication service wrapper, a user won't be able to access other private resources. We will use an Auhtentication Provider to garanty this authentication.

They way Firebase works is 'they wont put efforst in defending internal code from the front-end, but they will on the back-end. Most of Firebase Services are Serverless, this mean they act as a server but internal actions can't be changed. This way whenever we access functions through the Firebase SDK like a Firestore function to write data, it is runned from a trusted environment'. 

So this means that we can accept the fact a bad intensioned user modifies our code.

#### Firebase Security Rules
<hr>
In our Cloud Firestore database we will add Security Rules. 

> This way are doing access control for our database.

By specifing a standard ``deny all`` we restrict any user to make a modification into our database. After that we can use the ``principle of least privileges``: only add privilege to a specific user and specific parts of our database. Additionaly we can manage the permissions of actions in our database like a read, write, delete operation.

If we set up correctly our Security rules, it wont matter if a user tries to inject code, or modify code related to our Cloud Firestore functionalities. 

    We are building a website, so clicking F12 will always display all the content, scripts, links … We will isolate functions and logic, to avoid making it realy easy for anyone to make changes but of course we can't and we dont care that anyone tries to make any changes, like mentioned before.
  
## Extra: Security analysis 

### Firebase as backend 

![alt text](https://github.com/EHB-TI/web-app-acces-denied/blob/main/BasicFlowFirebase.png)

<hr>

For our project, we will use Firebase as back-end service.

Firebase porvides many Cloud based Services.
The main services that we will use are the Authentication Service and the Cloud Firestore database.

> Cloud Firestore is a flexible, NoSQL, scalable Cloud database for mobile, web, and server development from Firebase and Google Cloud Platform. 

Cloud Firestore

The Cloud Firestore database works with collections and documents, which makes it easy to communicate with the backend services of our Applications working with models. We can pass and get data as a map to push it to our database or populate our models.

<hr>

Furthermore, we also use other services from Firebase, like Firebase Messaging, Cloud Storage (for images), Machine Learning kit, and of course the Firebase Authentication. 

> The main reason we chose Firebase is that it is a Cloud service. Each feature works with one principle: real-time connection. 

Using Firebase as back-end Service will give us a lot of extra possibilities.

For example:  
• Cloud Firestore will keep data in-sync across client apps through realtime listeners.  
• Using the Firestore Rules we can prevent every non-authorized user to access our database.  
• The Firebase Authentication will provide us with a high-security log-in. Using the FirebaseUser class we can access IdToken and the authStateChanged of all users.  

> Creating a real-time website and improve the security of our backend service are the objectives we are trying to accomplish through this project. 

<hr>

### Top vulnerabilities and how we deal with them  
 
### Injection  
<hr>

This type of attack allows an attacker to inject code into a program or query or inject malware onto a computer in order to execute remote commands that can read or modify a database structure, or change data on a website. However, for our project, we will use Firestore which is a No-SQL Cloud Database. With Firestore, developers don’t build an SQL command (or any string command composed of various parts that require escaping) in order to execute a query. Instead, they use an API provided by the SDK and pass strings that are automatically managed by the API, which means that injection is not an issue with Firestore.  
<hr>

### Poor code quality 

Mistakes we will avoid  
<hr>

  * Avoiding that too many actions or functions or triggered inside one function or scope.  
  * Never comment code -> commented-out code can be destructive
  * Always provide descriptive-naming for variables
  * Writing code will have different parts: code review and code testing will be a part of it!
  * Avoid hardcoding

What we will do to avoid mistakes
<hr>

  * Visual demonstration using whiteboard, lucidchart and mockups or wireframes
  * Write comments in the code, only for documentation purpose, it should not contain code.
  * During the development activly use the debugger and console logs. Not in production mode!
  * When an error occurs, we will communicate that to the whole team. 
  * We will use github for Version Control. We will use protected branches and use .env files to keep variables locally.
  * We will try to use a form of automated testing. 
 
To be able to exploit code issues is a difficult task. The attacker will typically exploit vulnerabilities in this category by supplying carefully crafted inputs to the victim. Typical types of attacks will exploit memory leaks and buffer overflows. Some vulnerabilities are hard to detect and the impact of such attacks are most likely not critical, but they can still deal a great amount of damage to the system.
> Being aware of this threads is important as a developper.

#### Reverse engineering 
<hr>

    By looking at the source code of a website you can understand how a website is made, which is called reverse engineering.  

The technical Impacts of this attack are quite moderate. An attacker may exploit reverse engineering to achieve any of the following:  

1. Reveal information about back-end services
2. Reveal cryptographic constants and ciphers  
3. Perform attacks against back end systems 
<hr

#### How to protect a website from reverse engineering?  
<hr>

> It is impossible to protect a website 100% from reverse engineering. 

However, it is possible to make it harder for an attacker to extract data from the website.

* Obfuscation: 

      Modifying a website’s binary to make it harder for humans to read.
    Obfuscation hides function and class names in your code, making it difficult for an attacker to reverse engineer your proprietary website.  
    
* .Env file
  
  Important variables or credentials should be store inside a .env file.
 
 #### Data encryption 
 <hr>

    Converting plain text into unintelligible text and vice-versa. 
  
  Firebase services also encrypt data in transit using HTTPS and logically isolate customer data. 

  Firestore will automatically encrypt all the data before it is written to disk and will also be encrypted at rest. 
  
  Using the Firebase Authentication Services, data is automatically and transparently decrypted when read by an authorized user. Each Firestore object's data is encrypted``*`` and each encryption key is itself encrypted with a regularly rotated set of master keys. 

  * Firebase Passwod Hashing

        hash_config {
          algorithm: SCRYPT,
          base64_signer_key: 9l+S1DuMqC ... tazpA==,
          base64_salt_separator: Bw==,
          rounds: 8,
          mem_cost: 14,
        }
<hr>  

#### Security threats  
<hr>  

#### What if someone is logged in on a user's account without knowing it?
<hr>  

We have solved this issue by alerting the user by email whenever someone is logged in on his account on another device. 

By realizing this feature, we needed something unique in every device. The first thing that came up in our minds was the mac-address. But we didn’t choose the mac address due to security reasons.

 Therefore, we will use Firebase Messaging to get this unique number. The first time a user signs in, he will get a unique id which will be stored in Firestore and whenever someone logs in, the first thing that happens is checking whether his unique id matches the one in the Firestore. If that is not the case, then the user will get alerted by receiving an email. 

#### What if someone made multiple fake accounts?  
<hr>
We solved this issue by adding email verification to our website. So, whenever a user registers, he will get an email to the email he put in the registration field. If the user does not click on the link sent to his email, it will not be possible for the user to go to the home page, and even when the user found a way to get to the home page, the Firestore rules will be there to block him. 
<hr>
<br>

### Architecture
 <hr>
To build our architecture we chose to use IriusRisk. 

IriusRisk is a platform that makes it easier to make and visualize clear architectures. It also helps in analysing which threats exists in the current architecture and gives advice to defend against it. 
We currently have a basic architecture but plan on working on it as the project progresses 


![alt text](https://github.com/EHB-TI/web-app-acces-denied/blob/main/iriusrisk.png)


# Deployment

https://

* Protection against version control - illegal github access and then modify our code
* Protection against changing hosted version of the website - manual action required
* Principle of least priveleges
* Separation of privileges - not all developers have same privileges
* Protected branches on github

*minimally, this section contains a public URL of the app. A description of how your software is deployed is a bonus. Do you do this manually, or did you manage to automate? Have you taken into account the security of your deployment process?*

# *More information?*
*You can find in on repository many other readme files that contains specific information about our code, security principle  and services we used.*

If you have any other question, please feel free to contact us.


