# Welcome to Phone1st

## A light, clean, starter theme that starts... _phone1st_

![](test/test-images/phone1st-home.png)

> A light and basic html starter theme to get you off to a quick start with your web developments. The CSS is put together using SCSS, a popular way of creating quick, organised stylesheets. Using Phone1st will save you time, building quicker, smarter projects.

---

### Quick Start

**Download** - **Rename the folder** - **Import into CodeKit**

Build your site with the help of the **test folder**

Remove the **test folder**

Upload the **build folder** to your server

---

### CodeKit

Phone1st is designed to be used with [CodeKit](https://codekitapp.com/) (_Mac only_). Taking advantage of _CodeKits_ - _kit_ templates and _kit_ variables.

If you don't have _CodeKit_ the _css_ folder and _scss_ files may be adapted to suit your use. You'll need a _Scss processor_ to parse the scss. The _main Css style-sheet_ in the _build_ folder isn't minified and measures _82kb_. Minified it measures _28kb_.

The theme should build correctly when imported into Codekit, but if not:

_You can delete the **build** folder and **re-build**._

_Remove the **config.codekit3** file and re-import into **CodeKit** using your CodeKit settings_

_You can set the paths to suit yourself but phone1st uses:_

- style.scss - /build/css/style.css
- app.js - /build/js/app.js
- images - /build/images/
- index.kit - /build/index.html

To view the _test folder pages_

- test.kit - /build/test/test.html
- about.kit - /build/test/about.html
- scss.kit - /build/test/scss.html
- class.kit - /build/test/class.html

- page.scss - /build/test/css/page.css
- test.scss - /build/test/css/test.css
- scss.scss - /build/test/css/scss.css
- classes.scss - /build/test/css/classes.css

- all test images to /build/test/test-images/

---

### The Test Folder

The _test_ folder can be removed when no longer required it will not effect the theme.

#### Test Page

Use the _test_ page to set the basic elements.

#### Scss Page

Default mixins used with the Phone1st theme.

#### Class Page - Work in progress

A _class utilities_ page - **experimental** - see [Experimenting with Classes][ex].

---

### Basic SEO

The following _variables_ for Meta Data are available with some _Facebook_ and _Twitter_ meta. These are optional and you should add or subtract what you require.

Meta variables:

    <!-- $title Page Title --> - //Basic page title for use with navigation etc. eg _Home, About, etc

    <!-- $SEO-title A Longer Title--> - //A more descriptive title - 60ish characters

    <!-- $description Page Description --> - //120ish characters

    <!-- $keyword Home, About --> - //word or words

    <!-- $url index.html --> - //exact url - canonical

    <!-- $post-image tile-wide.png --> - //image to use for Facebook and Twitter meta image

See _includes/\_meta.kit_.

**Important** - Check the meta data in your _page head_ with the browser inspector

---

### Experimenting with Classes [ex]

Experimenting with the _class utitlity_ method for styling. I think the more complicated elements with quite a number of styles are still easier using a conventional stylesheet. _Utitlity classes_ seem to work well with _template structures_ ensuring consistant styles potentially leading to faster development and execution times. _Will have to see how it goes and see what evolves_.

---

### View Phone1st Theme

[Phone1st Starter Theme](https://phone1st.org/)

---

### Contact Info

email: <mailto:h@phone1st.org>
