# ImagineIt

Welcome to the Imagine-It corp website source repository.


## Tech Stack

There are many interesting technologies used to develop, build, deploy and host it.  While some were not absolutly needed to
produce the official site I thought it would be helpful to setup a full end to end app instead of just a bit on HTML/CSS/ and Vanella JS.

For example, I am aware that I did not need Jenkins to deploy to Firebase Hosting.  Doing so is both an exercise and evidence of
some of DevOps skills.  I even went a step farther and hosted Jenkins on my home server inside a Docker container.

For this I first created a custom Jenkins image to run.  This image is based on the officlia Jenkins image
(jenkins/jenkins available on DockerHub).  From here I configured Jenkins using a pipeline build and some GitHub hooks to:
- Checkout Source
- Install Dependencies
- Lint Code
- Test Code using Jasmine and Karma
- Build project for prod
- Deploy to AWS

###Angular, Firebase Hosting, and Firebase Realtime Database
We are pulling content by key from a Firebase Realtime Database using AngularFire2
and Angular 7.  This once again showcases a neat feature, since the Realtime Database and angularFire2 provide a socket connection
and there for realtime data and no need for refresh.

We are also using Google for OAuth.

### Angular, Bootstrap 4, HTML5/CSS3, FontAwesome, Typescript
As far as the app itself goes it is based on HTML5. CSS3, Bootstrap 4, FontAwesome, Typescript, and of course Angular.


### Github
Lorem ipsum dolor amet readymade leggings pickled enamel pin succulents.

## Further help

To learn more please contact admin@imagine-it.com
