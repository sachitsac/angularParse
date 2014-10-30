## Requirements

* [npm](https://www.npmjs.org/)
* [bower](http://bower.io/)
* [grunt](http://gruntjs.com/)
* Modern browser (don't joke and leave IE for the cashier in the laundry store :)

## Install

```shell
make
```

## Development

The following is a base structure for the project.

```shell
app/
├── data
│   ├── config (general config files, used by 3rd party libraries)
│   └── samples (samples, test data)
├── images
├── scripts
│   ├── controllers
│   ├── lib (libraries installed via bower reside here)
│   └── services
├── styles (only .less allowed)
└── views
    └── elements
```

Once you're ready to start development, run:

```shell
make dev
```

It will start to monitor following assets and execute some maintenance/compilation tasks on change:

* Views or *.html* files

### Considerations

* For managing features, hotfixes, bugs or branches, we use the **git-flow** method. Use this *git* extension: https://github.com/nvie/gitflow
* All development should occur inside *./app*.
* Configuration for the build process is also available in *package.json*
* *./app/scripts/lib* must be kept untouchable. Include dependencies using **bower**, and any further modification to the libraries should be processed through a **grunt** task.
* HTTP server must point to *./dist* in production stage; for development, point your server to *./app* to ease debugging.

### Compile / Publish

```shell
make publish
```

A **ready to deploy** version will be ready at *./dist*, which includes pre-processed/compressed files.

### Coding Standards

* Use lowerCamelCase naming for files / variables / properties / controllers / directives / services and other components of your JS/Angular code

* Use lower-case-dashed naming for CSS / LESS classes 

* Don't use jQuery unless we don't find any Angular / Angular-UI-Bootstrap or directive that could help us achieve the same functionality.

* Try to keep properties/methods that need to be reused across the app in the parent controller, appController.js, or if the situation requires, better place an event.

* For HTML attributes, use double quote as stated in http://dev.w3.org/html5/html-author/#attribute-value rather than single quote, which is used for any JS code included inside the attribute's value

* Angular: when using $watch, $on, or any event monitoring function, place the code before the methods declaration in your controller. So first, we have $scope's variables declarations, next events declarations and finally, $scope's methods declarations.