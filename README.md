[IriusRisk](https://www.notion.so/IriusRisk-35ac170914384bab8275252e7f34c5c5)

# Goal

Our website will be selling used cars (“second-hand”).

Unlike any other car buying website, we are targeting our customers first. Instead of letting the customer getting lost in a list of choices, this website helps the customer to find the perfect car for him. Are you looking for your first car to learn how to drive? Or maybe you have a large family and need some more space?

Our website shows what is best for you, after answering a few questions. We will also keep the user's search data stored so we can optimize our customer's interests with A.I.

>This is a Proof of Concept:

<br>By storing all data from our customers on our website, we will have enough data to populate our recommendation AI (neural network), but therefore we need data that will be time-expensive -.

Our goal is to make our application user-friendly and focus on clients who do not know cars, or car pieces.

A customer will be able to find a selection of cars that match what he is looking for, without getting lost in a large assortment of cars.

A seller will be able to sell a car or car parts and pieces.

We are only asking and storing personal information able to improve our application, we do care about the privacy of our customers so at any moment you will be able to get access to all the data stored, you concerned.

There are a few requirements needed before you can sell a car, on our website.

We do not want customers to worry anymore about the vehicle inspection, not enough images,... or other insufficient information.

For example: creating an advertisement requires images (sides, front, back, inside), descriptions about exterior and interior of the car, descriptions of the customer (new driver, occasional driver..), car conditions, car-pass…

Maybe you don't need or want to sell an entire car or maybe you are looking for some car pieces to repair a car?

The main reason to add car-pieces on our website is that some cars will be potentially damaged or in some cases, some car-pieces will need to be changed in the future.

Able to help our customers to also take care of their car, we offer the possibility to buy and sell separated car-pieces. There will be some restrictions too before putting an advertisement online.

**# Acceptance criteria**

1. Users can find the best cars for their interests, by filling in a form without having any knowledge of cars in the first place
- Basic questions will be asked about the customer himself, able to target the best car-category
- Basic questions about what the customer would like to have, to be sure it is matching his budget and other criteria.
- Picking some random users of different ages and different knowledge about cars and let them use/test our website. Able to check if our application is giving good results.

<hr>

1. Users can only sell cars or parts by filling in all criteria points
- An advertisement must contain specific information, all advertisements will have descriptions, images, and a list of characteristics.
- This will help us improve our recommendation AI and improve our car selection.
- This way we will be able to display the same amount of information for each advertisement placed on our website.

<hr>

3. Users can log in safely to make use of the website and contact product owners

- A system will be created to securely send messages using our website.

<hr>

> Users can make use of our website independently without having trouble doing so

- Mobile devices: smartphones and tablets, independent of the OS should be able to see a decent version of our website.
- Mobile compatibility test ( using Google bot engines we can easily find out if our website is completely compatible with mobile devices)
- The desktop version of the application will be irreproachable
- Performance tests, devices tests, form and dataflow testing

<hr>

1.  Both customer and seller have to be able to make use of the website safely and securely without getting lost in a large assortment of questions and criteria.
- A user will be to easily create an advertisement, able to create the best advertisement and have descent information about the vehicles and car-parts we will be asking a lot of information and images.
- We will create a clean and interactive design able to keep our users interested and don not borrow them with exhausting questions
- We will also provide questions with prefilled in answers or examples able to help our customers create an advertisement of quality without losing too much time

<hr>

5. Adding logging and monitoring will help us improve our application and detect bugs much faster.

- Adding Crashlytics will help us discover whenever a user encounters a problem. We will have a detailed log of the error in question.
- Adding Analytics will help us improve the usability of our website, and also retrieve very valuable data about user experiences, such as access to search data, time user spent on the website, amount of clicks …
- Adding Google Search (Google indexation) will improve our website in the long term and provide more data, also search data, timestamp, location …

<hr>

<br>

### Extra: Busniness Model

<hr>

After a user bought a car, all information about his new car will be stored. This way if one day he wants to sell his car, he will find all information of his car with a complete history with a description,  images, list of reparations or damages, … Additionally, the user will be tempted to sell his car using our website, the same way he initially bought his car on our website.

A user can place an advertisement for free, the requirements are to have an account on our website and to provide all information about the car by filling in the form correctly.

→ We could offer a service to our clients that creates and advertisement for them.

In addition, you can pay a ‘fee’ to get your advertisement in the top rank whenever a user is looking in the rubric “all cars”.

# Threat model

## The flow of our web application

Flow of interaction between the Front-end and the Back-end.

> Communication between clients ⇒ web application ⇒  Firebase Services.

![alt text](https://github.com/EHB-TI/web-app-acces-denied/blob/main/Frontend-Backend.png)

The basic flow of administration access to our web application.

![alt text](https://github.com/EHB-TI/web-app-acces-denied/blob/main/AdminAccess.png)

> Additionally, we defined Security Rules that guarantee users and admins to access our services securely, using the principle of least privileges. For security reasons “an admin can not be made” on our website. More information can be found below

# **Threats**


<aside>
⚠️ Attackers bring the service down by exhausting it (D)DoS [Risk VERY HIGH]

> [Confidentiality: Very High] 
[Integrity: Very High]
[Availability: Very High]
[Ease of Exploitation: Very High]
> 
</aside>

<aside>
⚠️ An attacker crafts malicious web links and distributes them hoping to induce users to click on the link and execute a malicious action. [Risk VERY HIGH]

> [Confidentiality: Very High] 
[Integrity: Very High]
[Availability: Very High]
[Ease of Exploitation: Very High]
> 
</aside>

<aside>
⚠️ Attackers gain unauthorised access to the application through an environment flaw  or attackers subvert the intended workflow in order to perform unauthorized operations
[Risk VERY HIGH]

> [Confidentiality: Very High] 
[Integrity: Very High]
[Availability: Very High]
[Ease of Exploitation: Medium]
> 
</aside>

<aside>
⚠️ Attackers attempt to bypass authorization flow
[Risk VERY HIGH]

> [Confidentiality: Very High] 
[Integrity: Medium]
[Availability: Very High]
[Ease of Exploitation: Medium]
> 
</aside>

<aside>
⚠️ Attackers gain access by stealing user information through common vulnerabilities
An adversary exploits common weaknesses like phishing, spoofing, etc. to escalate privileges [Risk VERY HIGH]

> [Confidentiality: Very High]
[Integrity: High]
[Availability: High]
[Ease of Exploitation: High]
> 
</aside>

<aside>
⚠️ Attackers gain control of the connection through a Man In The Middle attack.
[Risk HIGH]

> [Confidentiality: High]
[Integrity: High]
[Availability: None]
[Ease of Exploitation: Low]
> 
</aside>

<aside>
⚠️ Functionality could be subverted through mass assignment
If the application binds parameters to back-end objects, then attackers could potentially set fields on those objects that were not designed to be modified by the user. 
[Risk HIGH]

> [Confidentiality: High]
[Integrity: High]
[Availability: None]
[Ease of Exploitation: High]
> 
</aside>

<aside>
⚠️ Attackers encode potentially harmful input and submit it to bypass input filtering protections.
This attack leverages the possibility of encoding potentially harmful input and submitting it to applications not expecting or effective at
validating this encoding, thus, thwarting the validation. 
[Risk Very HIGH]

> [Confidentiality: High]
[Integrity: High]
[Availability: Very High]
[Ease of Exploitation: Very  High]
> 
</aside>

<aside>
⚠️ Attackers gain control of the system through a source code leakage.
Attackers gain unauthorized access to a service by reading raw source code returned by the service, and this code contains confidential information such as authentication credentials or other secrets that can be used to access the service. [Risk Medium]

> [Confidentiality: Medium]
[Integrity: Medium]
[Availability: Medium]
[Ease of Exploitation: Medium]
> 
</aside>

## Web client

---

<aside>
⚠️ Application contains security vulnerabilities not identified during the development process. [Risk Very HIGH]
(VULN-DEV-PROCESS)

[Confidentiality: Very High] 

[Integrity: Very High] 

[Availability: Very High]

[Ease of Exploitation: Very High]

<aside>
💡 Application security should be embedded into a project's development environment, allowing developers to monitor their code regularly in order to avoid security vulnerabilities when the application is deployed in the production environment.

</aside>

Solution:  Scan the code with code analysis tools

</aside>

<aside>
⚠️ Attackers gain unauthorised access to data or services by accessing a client side secret [Risk Very HIGH]

[Confidentiality: Very High] 

[Integrity: Medium] 

[Availability: Medium]

[Ease of Exploitation: High]

<aside>
💡 Secrets stored in any client side components, such as a mobile 
application, thick client application or in JavaScript used by a 
browser, can be accessed by users/attackers who have access to this 
client.
Attackers could then gain access to the data or services that are 
protected by this secret, if no other credentials are required.

</aside>

Solution:  Implement simple logic and do some data validation! Do not include passwords nor sensitive API keys in your code or online repositories!

</aside>

<aside>
⚠️ Attackers could gain access to sensitive data through a man in the middle attack.
[Risk Very HIGH]

[Confidentiality: Very High] 

[Integrity: Very High]] 

[Availability: Very High]]

[Ease of Exploitation: Medium]

<aside>
💡 This type of attack targets the communication between two components (typically client and server). The attacker places himself in the communication channel between the two components. Whenever one component attempts to communicate with the other (data flow, authentication challenges, etc.), the data first goes to the attacker, who has the opportunity to observe or alter it, and it is then passed to the other component as if it were never intercepted. This interposition is transparent leaving the two compromised components unaware of the potential corruption or leakage of their communications. The potential for Man-in-the-Middle attacks yields an implicit lack of trust in communication or identity between two components.

</aside>

Solution:  Validate the CA presented by the server. Encrypt sensitive data between client and server/services. Validate the TLS implementation in use. 

→ All handle by our Firebase backend services, additionally this services are running from a trusted environment.

</aside>

## Google Cloud Firestore

---

<aside>
⚠️ Attackers gain unauthorized access to the root account due to lack of configuration of the account - Authentication [Risk Very HIGH]
(LOSS-CONTROL_ENV)

[Confidentiality: Very High] 

[Integrity: Very High] 

[Availability: Very High]

[Ease of Exploitation: Low]

<aside>
💡 Attackers could gain unauthorized access to the administrator account due to lack of configuration of the account and its security mechanisms, such as modifying credentials and adding/removing user accounts.

</aside>

Solution: Create individual accounts for admins. Use Security Key for 2-Step Verification for administrator or co-administrator accounts

</aside>

<aside>
⚠️ Exploitation of insufficient logging and monitoring. [Risk Very HIGH]
(OWASP A10:2017)

[Confidentiality: Very High] 

[Integrity: Very  High] 

[Availability: Very High]

[Ease of Exploitation: Low]

<aside>
💡 Exploitation of insufficient logging and monitoring is the bedrock of nearly every major incident. Attackers rely on the lack of monitoring and timely response to achieve their goals without being detected.

</aside>

Solution: Enable Google Analytics, use Google Cloud Hosting to be able to monitor hosting activity. Enable all access logs. Audit logs for all users.

</aside>

<aside>
⚠️ Attackers gain unauthorized access to the control of the environment - Authorization [Risk HIGH]

[Confidentiality: High] 

[Integrity: High] 

[Availability: High]

[Ease of Exploitation: Medium]

<aside>
💡 Attackers could potentially gain unauthorized access to the control of the environment, due to user accounts - or role groups - not being well defined and configured. As a consequence attackers may be able to make changes without root approval.

</aside>

Solution: Principle of least privileges. Control access with Security Rules. Define roles for the Google Service Accounts

</aside>

<aside>
⚠️ Attackers destroy the data and the data cannot be recovered or sensitive data is compromised through unauthorized access to data storage. [Risk HIGH]
(LOSS-DATA-REMOVED)

[Confidentiality: High] 

[Integrity: High] 

[Availability: High]

[Ease of Exploitation: Medium]

Solution: Securely store your credentials. Enable data storage versioning

</aside>

## **Google Cloud Platform**

---

<aside>
⚠️ Attackers gain unauthorized access to the root account due to lack of configuration of the account [Risk HIGH]

[Confidentiality: Very High] 

[Integrity: Very High] 

[Availability: Very High]

[Ease of Exploitation: Low]

<aside>
💡 Attackers could gain unauthorized access to the administrator account due to lack of configuration of the account and its security mechanisms, such as modifying credentials and adding/removing user accounts.

</aside>

Solution: Use Security Key for 2-Step Verification for administrator or co-administrator accounts. Create Individual Accounts for the administrator users

</aside>

<aside>
⚠️ Sensitive data is compromised through unauthorized access to data storage [Risk HIGH]

[Confidentiality: Risk High] 

[Integrity: Risk Low] 

[Availability: Risk Medium]

[Ease of Exploitation: Risk Medium]

<aside>
💡 A data breach is a security violation in which sensitive, protected or confidential data is copied, transmitted, viewed, stolen or used by an individual unauthorized to do so. Sensitive data could be exposed due to a bad configuration in user permissions.

</aside>

Solution: Avoid obsolete applications to have access to the resources. Credentials and resources should be stored securely and never exposed. 

</aside>

<aside>
⚠️ Attackers destroy data, and data cannot be recovered [Risk Medium-High]

[Confidentiality: Risk High] 

[Integrity: Risk High] 

[Availability: Risk Medium]

[Ease of Exploitation: Risk Low]

<aside>
💡 Attackers gain access to the systems and data with excessive permissions and they remove all the information from the system, which might lead to permanent loss of data, including sensitive or personal data.

</aside>

The only possible way to protect us from such an attack is by enabling Data Storage versioning, which is not possible in our case because it is paying feature.

</aside>

## Firebase as Backend Service - Firebase Cloud Services

We will use Firebase SDK, which is an open-source library.

<aside>
⚠️ Important, because it makes it more accessible, more people can discover possible threads or important issues and errors.

</aside>

The **Firebase SDK** provides access to the initialization of a Firebase App. We will initialize this application using our Firebase Configuration, which contains an API key. 

**This API key is not private.** This means it is not a thread that everyone can have access to the API key. But, we decided to put these variables into a `.env` file, this way it will protect us against a user that obtain illegal access to our version control platform(GitHub).

Once our Firebase App is initialized  we can start using **Firebase Serverless Services** like Authentication and Cloud Firestore database.

> Using an **authentication provider**, combined with an authentication wrapper, we will be able to distinguish authenticated users from non-authenticated  users.

<aside>
💡 From the Firebase Authentication, we can access the `authStateChanged() or onIdStateChanged()` which provides all information about the authentication state.

</aside>

>  We will also ensure that whenever a user logs in on a new device an email or a notification will be sent.

The Authentication functions,as well as the Cloud Firestore functions, run in a trusted environment. Important is the fact they are Serverless.

Firebase provides build-in CA, this way it becomes impossible for a hacker to act as a Firebase service.

<hr>

By hosting our website using ``Firebase Hosting``, we will provide a valid SSL-CA. This way our website will be secure and available as an HTTPS website ‘https://..’, and prevent us from spoofing**.** **A hacker will not be able to act as our website**.

<hr>

Mitigation:

As mentioned before the **Firebase API key is not private**. Therefore it is important to activate **Security Rules**.

The way Firebase works is 'they won't put efforts in defending internal code from the front-end, but they will on the back-end. Most Firebase Services are Serverless, this means they act as a server but internal actions can't be changed. This way whenever we access functions through the Firebase SDK like a Firestore function to write data, it is run from a trusted environment'.

The Security rules are the way Firebase handles access control. By providing strong Security Rules to our Cloud Firestore project, we will prevent users without privileges to manipulate our database.

> In this case, whenever a hacker gains access to a user account he won't be able to do destroy or copy our entire database.

If we provide **strong** and **good** Security Rules we will be protected against ransomware attacks.
One way to guarantee this is to use the principle of least privileges.

<aside>
💡 Principle of least privileges:
Each user will only have the necessary privileges. Using Firebase rules we will be able to widely set those rules to prevent users to modify data from other users and maintain our database integrity.
Our website will be manually hosted, using Firebase Hosting. The only way to change code, and apply this on our hosted website, will be to have our credentials and make the changes on our local computer.

</aside>

# **STRIDE**

<hr>

### Spoofing: Authentication

> Threat: *A hacker can gain access to our application pretending to be another user.

Or a hacker can pretend to be our application.*

### Tampering: Integrity

<hr>

> Threat: **Modifying data or code whenever it crosses the network.**

#### Defence/ Solution | Mitigate

<hr>

Using Firebase Firestore functions all data sent over the network are encrypted, by default. Additionally, password are hashed and salted by Firebase Authentication. 

Whenever a hacker modifies our code, for example: by changing the parameters of our cloud functions, the Firebase Security Rules, if set correctly, will block that request.

<hr>

### Repudiation: Non-repudiation

<hr>

> Threat: **Permitting malicious manipulation or forging the identification of new actions.**

**#### Defence/ Solution | Mitigate**

<hr>

1. Monitoring and logging, whenever a user is committing a sensible action, is part of our job.

Not only we will use logs available from our Firebase backend services, accessing the Google Cloud Platform, but also integrate alerts(notifications). For example: we created a connectivity test, whenever the website is not reachable for more then 60 seconds, then an email will be send(= alert) to the admins and chief-developers. 

Additionally we will use logs for intern working, or whenever a user needs information about his actions. But more important we will  provide Audit Logs for all users, this way a user can keep control of his account by checking his audit logs. 

All actions committed by Admins are logged, for example if an admin goes to the dashboard-panel this will be logged, when he deletes an advertisement not only it is logged but also the advertisement is stored in a temp collection - in case the admin makes an error and to restore back the announcement, only high admins can then delete this backups.

> Actions like database interaction and sensible actions, such as changing email addresses or passwords.

<aside>
💡 Besides the fact of logging actions, we would like to add specific logs depending on the user’s device: by logging information like IP-information and device characteristics. This way could put in place some actions or alerts whenever a user is logging in on other devices or from a different network.

</aside>

<hr>

2. Before performing an important action(for example a delete) we will ask our user to confirm these action. This way repudiation will be avoided.

Whenever a user visits our website, he need to accept our conditions and cookie policies. It will be popped up, this way a user needs to accept, or to decline the pop-up. By providing this pop-up a user won't be able to then say “I certainly didn’t visit that website” because he accepted or declined  our pop-up(in other words: “he made an action to enforce access to our website”).

<hr>

### Information Disclosure: Confidentiality

<hr>

>Threat: **Exposing information to someone who is not authorized is.**

#### Defence/ Solution | Mitigate

<hr>

Like mentioned before, we changed our authentication system to something kind of ‘new’. Instead of using an email and password to login. A client only need to give his email, an email will then be send to that email. If the user press the link provided in the email, the user will be redirected to our website and logged in! Remember, if need we could provide a password. We decided to implement this only based on our security criteria. We agree it is not the most user-friendly login system, but it is a very same one.

In some way we are using AAA. Important to notice is we still use Firebase Authentication system, this means a user is still created like before, only difference “he has no password”. 

<aside>
💡 Notice: some routes are private some are public. This means we are currently checking the user is signed in correctly. We can achieve this by adding an authentication wrapper as mentioned before. 
→ src\firebase\context.js

</aside>

Additionally, each of our developers is aware of the dangers of losing or publishing their credentials, this is the only way to modify or erase our application, database, or services.

Admins and users can always report some suspicious activities, remember each user has access to it’s own audit logs.

<hr>

### Denial of Service: Availability

<hr>

>Threat: **Deny or degrade service to users**

#### Defence/ Solution | Mitigate

<hr>

Setting up logging and monitoring will help us know whenever a DOS attack is happening, like mentioned before we will use a network connectivity-test linked to an email-alert and we have access to monitoring dashboards of all the backend services, through the Google Cloud Platform.

- Monitoring and logging abusive traffic
- Set up Alerts depending on these logs
- Set up actions whenever maximum traffic is reached. These actions will have effect on the back-end of the Firebase Services.

In addition, Firebase itself is providing a form of DOS protection. This is for the Cloud Firestore Database and Authentication.

Whenever certain abusive traffic is reached and API restriction will be triggered and have an effect on the back-end. This is an action that is automatically triggered when using Firebase services.

After the security test feedback we have done some research to understand if we should use Cloudflare or not.

<aside>
⚠️ ”There is currently no way to rate-limit based on IP address with 
Firebase Hosting. Our CDN partner includes some built-in protection 
against (D)DoS attacks, but this is not presently configurable. We find that this generally isn't a problem. If you *do* run into usage that you suspect is abuse, please reach out to Firebase support and we'll work with you to resolve the situation to everyone's 
satisfaction.”
[https://stackoverflow.com/questions/46776551/rate-limiting-on-firebase-hosting](https://stackoverflow.com/questions/46776551/rate-limiting-on-firebase-hosting)

</aside>

So we decided to stay stick to our plan, and **not** implement Cloudflare.

<hr>

### Elevation of Privilege: Authorization

<hr>

> Threat: **Gain capabilities without proper Oauth2**

#### Defence/ Solution | Mitigate

<hr>

Using AAA and configuring  each page where a user must be logged in with an authentication service wrapper, a user won't be able to access other private resources. We will use an Authentication  Provider to guaranty this authentication.

The way Firebase works is 'they won't put efforts in defending internal code from the front-end, but they will on the back-end. Most Firebase Services are Serverless, this means they act as a server but internal actions can't be changed. This way whenever we access functions through the Firebase SDK like a Firestore function to write data, it is run from a trusted environment'.

So this means that we can accept the fact a bad-intentioned user modifies our code.

#### Firebase Security Rules

<hr>

We will add Security Rules to our Cloud Firestore database, this way we provide **access control** for our database.

By specifying, a standard **deny all** we restrict any user to modify our database. After that we can use the **principle of least privileges**: only add privilege to a specific user and specific parts of our database. Additionally, we can manage the **permissions and actions** like read, write, delete operation.

If we set up correctly our Security rules, it won't matter if a user tries to inject code, or modify code related to our Cloud Firestore functionalities.

>We are building a website, so clicking F12 will always display all the content, scripts, links … We will isolate functions and logic, to avoid making it really easy for anyone to make changes but of course, we can't and we don't care that anyone tries to make any changes like mentioned before.

## Specific Front-end Security threads 

<aside>
⚠️ Cross-Site Scripting

*How do we prevent cross-site scripting in React?*
**Avoid properties that are completely user-controllable.** If you do allow user input as a value of certain properties, make sure that attackers can’t insert any script code.
**This includes properties such as src, href, srcdoc, and possibly others.
Where React really shines is when the only user-controllable input is the child parameter, then it automatically applies sanitization without any action or thought required by the programmer.**

</aside>

<hr>

## Extra: Security analysis

### Firebase as backend

<hr>

![alt text](https://github.com/EHB-TI/web-app-acces-denied/blob/main/BasicFlowFirebase.png)

For our project, we will use Firebase as a back-end service. Firebase provides many **Cloud-based Services**.

The main services that we will use are the **Authentication Service** and the **Cloud Firestore**.

<aside>
💡 Cloud Firestore is a flexible, NoSQL, scalable Cloud database for mobile, web, and server development from Firebase and Google Cloud Platform.

</aside>

### Cloud Firestore

The Cloud Firestore database works with collections and documents, which makes it easy to communicate with the backend services of our Applications working with models. We can pass and get data as a map to push it to our database or populate our models.

<hr>

Furthermore, we also use other services from Firebase, like Firebase Messaging, Cloud Storage (for images), Machine Learning kit, and of course the Firebase Authentication.

<aside>
⚠️ The main reason we chose Firebase is that it is a Cloud service. Each feature works with one principle: real-time connection.
Using Firebase as a back-end Service will give us a lot of extra possibilities.

For example:

- Cloud Firestore will keep data in sync across client apps through real-time listeners.
- Using the Firestore Rules we can prevent every non-authorized user to access our database.
- The Firebase Authentication will provide us with a high-security log-in. Using the FirebaseUser class we can access IdToken and the authStateChanged of all users.
</aside>

<aside>
⚠️ 

**Creating a real-time website** and **improving** the **security** of our **front-end,** as well as the **connection with the Google Cloud Backend Services,** are **objectives** we are trying to accomplish through this project.

</aside>

<hr>

### Top vulnerabilities and how we deal with them

<aside>
⚠️ Injection

This type of attack allows an attacker to inject code into a program or query or inject malware onto a computer to execute remote commands that can read or modify a database structure, or change data on a website. However, for our project, we will use Firestore which is a No-SQL Cloud Database. With Firestore, developers don’t build an SQL command (or any string command composed of various parts that require escaping) to execute a query. Instead, they use an API provided by the SDK and pass strings that are automatically managed by the API, which means that injection is not an issue with Firestore.

</aside>

<aside>
⚠️  Poor code quality

This type of attack allows an attacker to inject code into a program or query or inject malware onto a computer to execute remote commands that can read or modify a database structure, or change data on a website. However, for our project, we will use Firestore which is a No-SQL Cloud Database. With Firestore, developers don’t build an SQL command (or any string command composed of various parts that require escaping) to execute a query. Instead, they use an API provided by the SDK and pass strings that are automatically managed by the API, which means that injection is not an issue with Firestore.

</aside>

<aside>
⚠️ Mistakes we will avoid

- Avoiding that too many actions or functions or triggered inside one function or scope.
- Never comment code -> commented-out code can be destructive
- Always provide descriptive naming for variables
- Writing code will have different parts: code review and code testing will be a part of it!
- Avoid hardcoding

**What we will do to avoid mistakes**

- Visual demonstration using Whiteboard, Lucidchart, and mockups or wireframes
- Write comments in the code, only for documentation purposes, it should not contain code.
- During the development actively use the debugger and console logs. Not in production mode!
- When an error occurs, we will communicate that to the whole team.
- We will use GitHub for Version Control. We will use protected branches and use .env files to keep variables locally.
- We will try to use a form of automated testing.
</aside>

<aside>
⚠️ To be able to exploit code issues, is a **difficult task**. The attacker will typically exploit vulnerabilities in this category by supplying carefully crafted inputs to the victim. Typical types of attacks will exploit memory leaks and buffer overflows. Some vulnerabilities are hard to detect and the impact of such attacks are most likely not critical, but they can still deal a great amount of damage to the system.
→  Being aware of these threads is important as a developer.

</aside>

<aside>
⚠️  Reverse engineerin: By looking at the source code of a website you can understand how a website is made, which is called reverse engineering.**

The technical Impacts of this attack are quite moderate. An attacker may exploit reverse engineering to achieve any of the following:

1. Reveal information about back-end services

2. Reveal cryptographic constants and ciphers

3. Perform attacks against back end systems

**How to protect a website from reverse engineering?**
It is **impossible** to protect a website 100% from reverse engineering.
However, it is possible to make it harder for an attacker to extract data from the website.

- Obfuscation:

**Modifying a website’s binary to make it harder for humans to read.**

Obfuscation hides function and class names in your code, making it difficult for an attacker to reverse engineer your proprietary website.

- .Env file

Important variables or credentials should be stored inside a .env file.

</aside>

### **Data encryption**

**Converting plain text into unintelligible text and vice-versa.**

<aside>
⚠️ Firebase services also encrypt data in transit using HTTPS and logically isolate customer data. Firestore will automatically encrypt all the data before it is written to disk and will also be encrypted at rest.

</aside>

<aside>
⚠️ Using the Firebase Authentication Services, data is automatically and transparently decrypted when read by an authorized user. Each Firestore object's data is encrypted``*`` and each encryption key is itself encrypted with a regularly rotated set of master keys.

</aside>

### **Security threats**

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

### Architecture

<hr>

To build our architecture we chose to use IriusRisk.

IriusRisk is a platform that makes it easier to make and visualize clear architectures. It also helps in analyzing which threats exist in the current architecture and advises to defend against them.

We currently have a basic architecture but plan on working on it as the project progresses

![alt text](https://github.com/EHB-TI/web-app-acces-denied/blob/main/iriusrisk.png)

# Deployment

https://accessdeniedproduction.web.app

- Protection against version control - illegal Github access and then modify our code
- Protection against changing hosted version of the website - manual action required
- Principle of least privileges
- Separation of privileges - not all developers have the same privileges
- Protected branches on Github

# **More information?**

- *You can find in on repository many other readme files that contain specific information about our code, security principle, and services we used.**

If you have any other questions, please feel free to contact us.