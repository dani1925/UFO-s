# UFO-s

## OVERVIEW

This repository contains an html to present the information of a periodite that is investigating the sightings.

On this site you can filter the data by city, date, state, country and type.


## Source of Data

For this specific case, a JSON object was used as a source of information to organize.

To link the data with the HTML file, the following code is used:

    <script src="static/js/data.js"></script>

## User Interface
### BootStrap
Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

### D3
D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

### Logic 

Once the user interface has been generated, it is necessary to add code to perform certain actions according to the user's needs.

In this case, the user can enter information in the fields and the "app.js" file will be in charge of filtering and presenting the data.