# Taller de Videojuegos
El taller de desarrollo de videojuegos permitirá a aquellas personas que desean desarrollar videojuegos o quieren saber como es el proceso para crear uno, conozcan las posibilidades que existen actualmente para llevar a cabo sus proyectos.
Utilizando tecnologías como Phaser, que permitirá visualizar nuestro proyecto tanto en plataformas web como móviles.

**Objetivos**
- Los alumnos serán capaces de llevar a cabo prototipos de juegos mediante el uso de Phaser.
- Aprenderán sobre distintas herramientas de desarrollo.
- Darán sus primeros pasos en diseño y desarrollo de videojuegos.


Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site] [1]:

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Version
0.0.1

### Tecnologías & Herramientas

Este proyecto requerirá de librerías externas que nos permitan hacer nuestro trabajo más práctico.

* [AngularJS] - HTML enhanced for web apps!
* [Sublime Text 3] - Editor de código/texto

### Installation

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone [git-repo-url] dillinger
$ cd dillinger
$ npm i -d
$ mkdir -p public/files/{md,html,pdf}
$ gulp build --prod
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins

* Dropbox
* Github
* Google Drive
* OneDrive

Readmes, how to use them in your own application can be found here:

* plugins/dropbox/README.md
* plugins/github/README.md
* plugins/googledrive/README.md
* plugins/onedrive/README.md

### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma start
```

License
----

No License

[john gruber]:http://daringfireball.net/
[@thomasfuchs]:http://twitter.com/thomasfuchs
[1]:http://daringfireball.net/projects/markdown/
[@tjholowaychuk]:http://twitter.com/tjholowaychuk
[Sublime Text 3]:http://sublimetext.com
