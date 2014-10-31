## Requirements

* [npm](https://www.npmjs.org/)
* [bower](http://bower.io/)
* [grunt](http://gruntjs.com/)
* Modern browser (although angular 1.2.x supports IE8, that will not be true from 1.3.xxx)

## Install

```shell
make
```

The following is a base structure for the project.

```shell
├── app
│   ├── data
│   │   └── config
│   │       └── jshintrc
│   ├── index.html
│   ├── scripts
│   │   ├── angularParse.js
│   │   ├── controllers
│   │   │   └── appController.js
│   │   ├── directives
│   │   ├── init.js
│   │   ├── routes.js
│   │   └── services
│   ├── styles
│   │   └── main.less
│   └── views
```

Once you're ready to start development, run:

## Commands

### Development

```shell
make dev
```
It will start to monitor following assets and execute some maintenance/compilation tasks on change:

* Views or *.html* files

### Compile / Publish

```shell
make publish
```

A **ready to deploy** version will be ready at *./dist*, which includes pre-processed/compressed files.

### Test
```shell
make test
```
This will start the testing using karma, jasmine. If you wish to enable continuous watching, then in karma config file, change singleRun: true to singleRun: false.
[Click here for more karma configuration](https://github.com/karma-runner/grunt-karma)

### Clean
```shell
make clean
```
This will clean the directories removing any unwanted files/folders.

### Coding Standards

For coding standards, there is a very useful guide By [Jonh Papa](https://github.com/johnpapa/)

[AngularJs Coding Standard and Best Practice](https://github.com/johnpapa/angularjs-styleguide)
