The attacker basically renders the validation message along with a malicious ``<script>``. This was possible because the application was modifying DOM directly using the append() method on the ``<div>``. Inside the ``<script>``, the attacker can write code that steals your confidential and sensitive information. On similar grounds, if you use innerHTML to mutate DOM directly, you're exposing your application to a potential XSS attack. 

Let's look at how React handles these situations and how far it secures our application against an XSS attack. 

<hr>

An example

Instead of  doing :

`<div id="validation"></div>`

We will do this :

`<div> {validationMessage}</div>`

> We create a function that that set the validationMessage. 

> The output is rendered using an empty div element using JSX.

*React JSX auto escape*

React outputs elements and data inside them using auto escaping. It interprets everything inside validationMessage as a string and does not render any additional HTML elements. This means that if validationMessage was somehow infiltrated by an attacker with some ``<script>`` tags, React would simply ignore it and render it as a string. 

> Thus, the above behavior protects our application from an attacker trying to execute a DOM-based XSS attack.

<hr>

Rules to follow:

1. Validate all data that flows into our application from the server or a third-party API. 
> This cushions our application against an XSS attack, and we may prevent them as well.

2. Don't mutate DOM directly. If we need to render different content, we will use innerText instead of innerHTML. 
> Don't use escape hatches like findDOMNode or createRef in React.

3. Always try to render data through JSX and let React handle the security concerns for you.

4. Don't use dangerouslySetInnerHTML.