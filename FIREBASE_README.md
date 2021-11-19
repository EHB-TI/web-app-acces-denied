# Development vs Production Environment

We can protect our Firebase environment from being tested or used on a Localhost, this typically happens during Development.

> This way can setup two projects in our Firebase:
1. Project for ``Development`` (with Localhost)
2. Project for ``Production`` (without Localhost!)

> Additionaly we can put our FirebaseConfiguration inside a ``local env-file``. This way we can easily change our configuration for development or production purpose. In adition it will protect us against Version Control, our credentials and API keys will never be pushed with our code.