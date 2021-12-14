<aside>
💡 Client: Angry Nerds |                                                        Security testers: Access Denied

</aside>
<br>

### Preface

---

In the following document we try to test the security of the application of our customer, Angry Nerds.

We perform and document a security analysis in order to provide our customer with constructive and concrete feedback regarding their web application and the documentation we had at our disposal, for example a thread model, acceptance criteria, goal, etc.

We strive for a critical security analysis in order to provide valuable feedback and points of attention to our customer.

We will be using several tools such as Codacy, Snyk, SonarQube and ZAP.

---
<br> 

### Our goal

---

This document provides an overview of the different security tests that have been performed. Additionally, we provide valuable advice and observations to help our customer further develop a secure web application.

The focus of the tests is on the security of the web application.  
→ This means that functionalities, risks and business logic will be tested.

The authentication system will be checked, to estimate how secure this authentication is. Additionally, authentication and password requirements will be thoroughly reviewed and reported. If we testers know or find solutions or alternatives, we will write them down to further assist our customer.

Security involves the attribution of roles, so it is extremely important that we check the various roles and their privileges.

In addition, extra attention will be paid to the purposes (of the application) of our customer. For this purpose, we will use the information that we as testers have available with respect to our customer, namely: the thread model, risk assessments, acceptance criteria and our customer's best practices.

In this report we answer the following questions, among others:

- Do we (testers) agree with our client's risk estimate?
- Are the most important risks being properly addressed?
    - Are access rights enforced correctly?
    - How secure is the authentication system? Does it meet the requirements?
    - Do password credentials meet standard requirements?
    - Can we "pass along" cost-effective suggestions to our client to make authentication more robust?
- Are sensible actions logged - audit logs ?
    - We can manage these ?
- Is the application sufficiently secure from a **network** point of view?
- Does it meet the [Evaluation criteria regarding HTTPS](https://ehb.instructure.com/courses/22745/pages/evaluatiecriteria-ivm-https)?

---

# Overview of security risks

Using SAST / DAST tools,  OWASP ZAP,  codacy en SonarQube

### **High risk** : None !

---

### **Medium risk** :

---

1. **CSP Wildcard Directive**
    
    **Description**: some directives allow wildcard sources, are not defined or are overly broadly defined: style-src,img-src …, missing/excluding them is the same as allowing anything
    
    **Evidence** : script-src ‘self’ 
    
    <aside>
    💡 Solution
    
    Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.
    
    </aside>
    

1. **Cross-Domain Misconfiguration**
    
    **Description** : Web browser data loading may be possible, due to a Cross Origin Resource Sharing (CORS) misconfiguration on the web server
    
    **Evidence** : Access-Control-Allow-Origin 
    
    <aside>
    💡 Solution : 
    
    Ensure that sensitive data is not available in an unauthenticated manner (using IP address white-listing, for instance).
    
    Configure the "Access-Control-Allow-Origin" HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.
    
    </aside>
    

1. **Vulnerable JS Library**
    
    **Description** : The identified library jquery, version 1.12.4 is vulnerable
    
    **Evidence** : /1.12.4/jquery.min.js 
    
    <aside>
    💡 Solution :
    
    Please upgrade to the latest version of jquery.
    
    </aside>
    

1. **X-Frame Options Header not set**
    
    **Description** : X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.
    
    <aside>
    💡 Solution :
    
    Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive.
    
    </aside>
    

---

### **Low Risk :**

---

1. **Application Error Disclosure**
    
    **Description :** The page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page
    
    **Evidence :** HTTP/1.1 500 Internal Server Error 
    
    <aside>
    💡 Solution :
    
    Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.
    
    </aside>
    

1. **Server Leaks Information**
    
    **Description :** The web/application server is leaking information via one or more "X-Powered-By" HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon and the vulnerabilities such components may be subject to.
    
    **Evidence :** X-Powered-By: ASP.NET
    
    <aside>
    💡 Solution :
    
    Ensure that your web server, application server, load balancer, etc. is configured to suppress "X-Powered-By" headers.
    
    </aside>
<hr>
<br>

# Codacy

### High **Risk :**

---

```csharp
await LoadAsync(user);
```

### **Why is this an issue?**

After an `await`ed `Task` has executed, you can continue execution in the original, calling thread or any arbitrary thread. Unless the rest of the code needs the context from which the `Task` was spawned, `Task.ConfigureAwait(false)` should be used to keep execution in the `Task` thread to avoid the need for context switching and the possibility of deadlocks.

<aside>
💡 Solution : 

`awaitLoadAsync(user).ConfigureAwait(false);`

</aside>

---

**Add '.ConfigureAwait(false)' to this call to allow execution to continue in any thread**

```csharp
await LoadAsync(user);
```

### **Why is this an issue?**

After an `await`ed `Task` has executed, you can continue execution in the original, calling thread or any arbitrary thread. Unless the rest of the code needs the context from which the `Task` was spawned, `Task.ConfigureAwait(false)` should be used to keep execution in the `Task` thread to avoid the need for context switching and the possibility of deadlocks.

<aside>
💡 Solution :

 `awaitLoadAsync(user).ConfigureAwait(false);`

</aside>

**Use the overloading mechanism instead of the optional parameters**

```csharp
public bool RememberMe { get; set; }

        public async Task OnGetAsync(string returnUrl = null)

        {
            if (!string.IsNullOrEmpty(ErrorMessage))
```

### **Why is this an issue?**

The overloading mechanism should be used in place of optional parameters

<aside>
💡 Solution : 

Optional parameter should not be used

</aside>

```csharp
void Notify(string company)
{
  Notify(company, "QJZ");
}
void Notify(string company, string office)
{
}
```


# SonarQube

---

### **Security Hotspots**

### **Medium risk** :

---

1. **DoS** 
    
    **Description**: Most of the regular expression engines use backtracking to try all possible execution paths of the regular expression when evaluating an input, in some cases it can cause performance issues, called **catastrophic backtracking** In the worst case, the complexity of the regular expression is exponential in the size of the input, this means that a small carefully-crafted input (like 20 chars) can trigger catastrophic backtracking and cause a denial of service of the application. Super-linear regex complexity can lead to the same impact too with, in this case, a large carefully-crafted input (thousands chars).
    
    This rule determines the runtime complexity of a regular expression and informs you if it is not linear.
    
    <aside>
    💡 Solution :
    
   `[ref to img-05]`
    
    </aside>
    

### Low **risk** :

---

1. **Log Injection**
    
    **Description**: Configuring loggers is security-sensitive. It has led in the past to a couple vulnerabilities: [CVE-2018-0285](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-0285) [CVE-2000-1127](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2000-1127) [CVE-2017-15113](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15113) [CVE-2015-5742](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-5742)
    
    <aside>
    💡 Solution : 

    →Check that your production deployment doesn't have its loggers in " debug" mode       as it might write sensitive information in logs. 
    
    →Log relevant information such as time of events and the hostname.
    
    →Choose an easy to parse logging method.
    
    →Add size limits to the logs that a user can not fill the disk with logs.
    
    </aside>
    

## SCA-tool synk

---

| Risk level | Number of Alerts |
| --- | --- |
| High | 7 |
| Medium | 1 |

The only risks that we get from the SCA took are related to **cross-site scripting (XSS) and prototype pollution**. But these errors are **only** related to their packages (jquery) which is not related to the developer team.

<aside>
⚠️ "Unsanitized input from an exception flows into append, where it is used to dynamically construct the HTML page on client side." This may result in a DOM Based Cross-Site Scripting attack (DOM**XSS**).

</aside>

<aside>
⚠️ "Unsanitized input from an exception flows into a member access and is used to access a property of this object by name." This may allow a malicious user to pollute the Object.prototype and cause a crash, remote code execution or logic bypasses.

</aside>

# Network & Performance tests


We used GT Metrix - free online tool - to check the performance of the web application and discover optimization opportunities.

<aside>
⚠️ Results from this tests are available on [https://gtmetrix.com/reports/ss.angrynerdy.com/1bExKkB8/](https://gtmetrix.com/reports/ss.angrynerdy.com/1bExKkB8/)

</aside>

<aside>
💡 Note: 

→ Performance gets an A- score  ~96% 

→ LCP: 1.1s 
// LCP measures how long it takes for the largest content element

→ Page Details

        Fully Loaded Time: 1.2s
        Total Page Size - 328KB
        // Total Page Requests - 7


IMPACT	       |          AUDIT	

<hr>

**Med-High**	|         Eliminate render-blocking resources

**Med-Low**	    |     Serve static assets with an efficient cache policy

**Med-Low**	    |     Enable text compression

Low	             |            Reduce unused CSS

Low	            |             Reduce unused JavaScript
<hr>

You can find for each issue a solution and learn how to improve this issue,
on the website of GT Metrix:
[https://gtmetrix.com/reports/ss.angrynerdy.com/1bExKkB8/](https://gtmetrix.com/reports/ss.angrynerdy.com/1bExKkB8/)

</aside>
<hr>

## Test My Site with Google - ThinkWithGoogle

[https://www.thinkwithgoogle.com/intl/en-154/feature/testmysite/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzpO4aMZvN83e1Mc9mzAlmw86fBU6OrV0s2HAADl7YqqOdhMZS75coQaAr6SEALw_wcB&gclsrc=aw.ds](https://www.thinkwithgoogle.com/intl/en-154/feature/testmysite/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzpO4aMZvN83e1Mc9mzAlmw86fBU6OrV0s2HAADl7YqqOdhMZS75coQaAr6SEALw_wcB&gclsrc=aw.ds)

### Speed results for ss.angrynerdy.com

**Mobile page speed is 3 seconds on a 4G connection. RATING - Slow!**

**[Learn more](https://www.thinkwithgoogle.com/intl/en-154/feature/testmysite/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzpO4aMZvN83e1Mc9mzAlmw86fBU6OrV0s2HAADl7YqqOdhMZS75coQaAr6SEALw_wcB&gclsrc=aw.dsfaq/?section=2#section-2)**

<aside>

⚠️ **Note**: 

Improving your load time by 0.1s can boost conversion rates by 8%.

</aside>

<aside>
💡 Solutions:

→ Eliminate render-blocking resources 

→ Defer unused CSS

→ Serve static assets with an efficient cache policy

→ Enable text compression

</aside>

---

## **Conclusion**

---

After conducting several tests in different areas, we can conclude that the website is quite secure.

- Besides the fact the website is not in the HSTS preload list, the website is running securely on HTTPS
- Network & performance tests are revealing A-scores.
[For network penetration tests, we could not find free tools to make some relevant diagnostics.]

However, there were some problems with the following points:

- We could not sufficiently test the authentication system without the assistance of the developer team. So we were not able to verify if access rights are enforced correctly everywhere inside the web application. However, users that were not logged in do not have access to some features
- We were not able (no access to the database nor monitoring platform) to verify if all audit logs are properly sent because we could only test admin logs. Neither verifies who can access or modify those audit logs.
- It was not possible for an admin user to create other users in the admin panel.
- The forgot password feature did not work and  gave an error message "invalid token".

## Standaard vereisten -  Evaluatiecriteria

---

### 1. Evaluatiecriteria ivm wachtwoorden

---

**Voldoet niet aan:**

- Bij herhaalde mislukte pogingen verhoogt het tijdsinterval tussen pogingen exponentieel.
- Bij herhaalde mislukte pogingen wordt het account geblokkeerd. Het kan terug worden geactiveerd met een link verzonden per email.

### 2. Evaluatiecriteria ivm aanmelden

---

**Voldoet aan alle criteria.**

### 3. Evaluatiecriteria ivm HTTPS

---

**Voldoet niet aan:**  "domein of domeinen staan in de HSTS preload list of wachten op toevoeging."

<aside>
💡 Note: kan misschien ondertussen wel het geval zijn ?

</aside>
<br>

### 4. Evaluatiecriteria ivm beveiliging tegen typische web vulnerabilities

---

**Voldoet niet aan :** 

- XSS protection
- Zet de X-Frame-Options header om clickjacking te vermijden of vermijd het met frame-ancestors in je CSP;
[https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)

**Belangrijke punten:**

- De sessie afloopt na verloop van tijd
- Definieer een strikte CSP voor je toepassing
- Laad geen overbodige code, dit vergroot enkel de 'attack surface' van je toepassing;
- X-Content-Type-Options: nosniff wordt gebruikt om MIME sniffing tegen te gaan.