# AngularKata

## Prerequisite
The test should be carried out under Angular 12.x.x or higher.
The appearance of the graphical user interface is defined within the UX/UI guidelines in the
mock-up folder.
Deliverables should be sent via a git repository.

## Use case
We wish to create a single page application which will allow us to:
- Display a large movies dataset
- Modify a specific movie data via a pop-up
- Search a movie based on its title
  
## Dataset
The dataset used for this test will be the following:
https://datasets.imdbws.com/title.basics.tsv.gz
In order to simplify data processing, we could use only the first 5000 lines of this dataset
The dataset can be converted into the format you want beforehand.

Scoring
  the relevance of the solution will be based on the following aspects:
- Use of Angular 12.x.x or higher
- Basic unit tests cases implemented
- The solution should be functional after running “npm install” and “ng serve”
- Responsive design as defined in the UX/UI guidelines
- Use of SCSS and mixins for styling
- Atomic design approach
- i18n: A toggle button to switch the language of the GUI, so we could switch between
  “English” and “French”
- Use of Lodash or Underscore for utilities functions and extension methods
- Optimized configuration for production (configuration to be done in angular.json file)
