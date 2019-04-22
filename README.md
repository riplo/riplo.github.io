# Riplo

A driven group of student developers.

### Tech stack

* **GitHub pages** for hosting
* **Formspree** for sending emails from contact form
* **`gatsbyjs`** for developing a static site in React
* **`React`** for frontend components
* **`styled-components`** for styling React components

### Workflow

* Production build hosted on `master` branch
* Development conducted on `develop` branch
* To push new build, go to master and perform the following sequence of commands:

```
$ git checkout master
$ git merge develop
$ git push -u origin master --force
$ yarn deploy
$ git checkout develop
```

----------------------------------------

### Other info

* Any files in `/static` are placed in the root dir in the production build
  * Namely, the `CNAME` file defines the custom domain for the site
