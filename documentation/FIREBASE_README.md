# Development vs Production Environment

We can protect our Firebase environment from being tested, or used on a `Localhost`. This typically happens during `Development`, but it is not a good idea in a `production` environment.

> This way can set up two projects in our Firebase:
1. Project for `Development` (with Localhost)
2. Project for `Production` (without Localhost!)

Additionally, we can put our `FirebaseConfiguration` inside a `local env-file`. 

>This way we can easily change our configuration for development or production purpose. <br>
>In addition it will protect us against bad intentioned users that obtain access to our Github repository (protection against Version Control).
>Important credentials, as well as the FirebaseConfiguration (API key, DatabaseID, ...), will never be pushed with our code to Github.

# Authentication

We are using FirebaseAuthentication.
<br>

We can use the `FirebaseAuthentication` once the `FirebaseApp` has been initialized.<br>

> The initialization of the FirebaseApp happens inside the `firebase.js` file:

    const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env
    ....
    });

    export const auth = app.auth();


To provide continuous access to our Authentication Services inside our application, we use `Providers`.

To achieve this, we use the `useContext` from React which returns the current context value, as given by the nearest context provider for the given context.
<br>

We will create our Authentication context, that we will pass to the `useContext` from react. This way we can access safely to our Authentication Services through our entire application.

### AuthProvider

All the functions related to authentication, as well as functions to modify user data related to the authentication will be accessible through the AuthProvider.

1. Login, signup and logout
2. Reset password (send an email to reset password)
3. Update password, update the email address

The AuthProvider uses the react-hook `useEffect` -> this way the function triggered `auth.onAuthStateChanged` will only run when we mount our component.

We are also using the `useState` hook, to handle the user current value and the loading state(bool).

We can `access` our `AuthProvider` because of the return statement we wrote: 

    return(
            <AuthContext.Provider value={value}>
                {!loading && children}            
            </AuthContext.Provider>
    )

    # The value contains the currentUser value and the provider functions(described above)

    
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }


### App.js

Inside our main application, we will use our `Authentication Provider` to redirect a user to the login page, or to the desired page (if it is a public page - accessible for everyone, even an unlogged user - ).

To handle our Routes easily and effectively, we use `React-Routers`.

> The `App.js` contains a `Router`

> The `Router` contains a `Switch`

> The `Switch` is wrapped in our `AuthProvider`

> The `Switch` will handle the `Route(s)`

> The `Navbar` and the `Footer` are not a part of the Switch, because they always need to be rendered

> The default route is `/` and redirects the user to a `PageNotFound`. 
>>This means that whenever a user tries to reach a page that doesn't exist, he will be redirected to our `PageNotFound`.


To handle whenever a user needs to be logged in or not, we use a component we created: `PrivateRoute`.
This component returns a Route depending on the currentUser, that we can access using our `AuthProvider`. If the user is currently logged in, he can access a PrivateRouter otherwise he will be redirected to the login page.



