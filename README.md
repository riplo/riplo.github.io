# Riplo

A driven group of student developers.

### Tech stack

* GitHub pages
* Formspree
* `gatsbyjs`
* `React`
* `styled-components`

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
