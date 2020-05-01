![](blob-ban.gif)

*is this space themed enough?*

# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

### Overview

**[Click here for live site](https://yaycupcake-news-reader.netlify.app/)**

_**News Reader** is an app that will let people search for news. It will allow people to look up any search terms and return relevant articles. It can return articles only from the US or it can return articles from all around the world. It will pull data from the [News API](https://newsapi.org/)._

<br>

### Wireframes

Click "Details" to expand and view image.

<details>

![Wireframe](wireframe.JPG)

</details>

<br>

### MVP

_The **News Reader** will be responsive, utilize React Router, and pull data from the News API. It will display news headlines and some content from news articles (as allowed by the API's free tier), based on a user's search input._

<br>

#### Goals

- _Working React App_
- _Utilize React Router_
- _6+ Components_
- _Organized File Structure_
- _Utilize Axios_
- _Utilize Grid and/or Flexbox_
- _Desktop, Tablet, and Mobile views_
- _Basic CSS Styles_
- _Incorporate light/dark theme toggle_
- _Remove excess files and code_
- _Remove console.logs_
- _5+ Storybook Components_
- _Display news article details based on search term_
- _Handle errors if user's search term is blank_
- _Link back to original article source_
- _Credit the API with a link, as required for usage (has been added to the bottom of the settings page)_


<br>

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _To create multiple "pages" accessed via different URLs._ |
|      Axios       | _To pull data from the API._ |
|    Storybook     | _To design components._ |
|    Sass     | _To help make the CSS more DRY._ |

<br>

#### Data

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| News API |      yes      | _https://newsapi.org_ | _https://newsapi.org/v2/everything?q=nintendo&apiKey=06c96a58f8e3440fb062458011a729da_ |

<br>

#### Component Hierarchy

```
src
|__ App/
      |__ index.js
      |__ App.scss
|__ Header/
      |__ index.js
      |__ Header.scss
|__ SiteTitle/
      |__ index.js
      |__ SiteTitle.scss
|__ SearchBar/
      |__ index.js
      |__ SearchBar.scss
|__ Page/
      |__ index.js
      |__ Page.scss
|__ NewsCard/
      |__ index.js
      |__ NewsCard.scss
|__ NewsBody/
      |__ index.js
      |__ NewsBody.scss
|__ NewsImage/
      |__ index.js
      |__ NewsImage.scss
|__ SettingsPage/
      |__ index.js
      |__ SettingsPage.scss
|__ Setting/
      |__ index.js
      |__ Setting.scss
|__ Button/
      |__ index.js
      |__ Button.scss

```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App    | functional |   y   |   y   | _The file in which everything will stem from._               |
|    Header    | functional |   n   |   y   | _Will be the header area of the page, including app title and search bar._               |
|    SiteTitle    | functional |   n   |   n   | _Will be the title of the site itself. Will be rendered inside the header._               |
|    SearchBar    | functional |   n   |   y   | _The search bar. Will be rendered inside the header._               |
|    Page    | functional |   n   |   y   | _Essentially the main content container._               |
|    NewsCard    | functional |   n   |   y   | _Will contain the contents of a given news article, including title, author, and source._               |
|    NewsBody    | functional |   n   |   y   | _Will contain the article's description and/or contents preview._               |
|    NewsImage    | functional |   n   |   y   | _Will display the image for the article, if any._               |
|    SettingsPage    | functional |   n   |   y   | _The page for settings._               |
|    Setting    | functional |   n   |   y   | _An individual setting._               |
|    Button    | functional |   n   |   y   | _A reusable button._               |



<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create files for each component |    H     |     1h 15m      |     20m     |     20m     |
| Set up React Router |    H     |     3 hrs      |     20m     |     20m     |
| Define general app structure |    H     |     2 hrs      |     45m     |     45m     |
| Connect to API |    H     |     2 hrs      |     10m     |     10m     |
| Hook up search bar |    H     |     4 hrs      |      50m     |     50m     |
| Pass search query results to other components |    H     |     4 hrs      |     55m     |     55m     |
| Handle empty search queries |    H     |     2 hrs      |     1h     |     1h     |
| Settings page settings |    H     |     4 hrs      |     1 h 10m     |     1h 10m     |
| Design in storybook |    H     |     2 hrs      |     50m     |     50m     |
| General CSS |    L     |     2 hrs      |     3h     |     3h     |
| Mobile CSS |    M     |     2 hrs      |     15m     |     2h     |
| Tablet CSS |    M     |     3 hrs      |     20m     |     20m     |
| Desktop CSS |    M     |     3 hrs      |     45m     |     45m     |
| Clean up code |    M     |     2 hrs      |     10m     |     10m     |
| General Troubleshooting Time Allotment |    H     |     4 hrs      |     1h 30m hrs     |     1h 30m     |
| TOTAL               |          |     40 hrs      |      12h 20m     |     12h 20m     |

<br>

### Post-MVP

- _Allow choosing any region's content._
- _Font size toggles/options_
- _Display full article (requires paid API though)_
- _Put light/dark theme toggle in local storage_

<br>

***

## Project Delivery

### Code Showcase

<details>

```
  //if the api call has happened after a search is executed, display page component with data passed to it
  const showPage = () => {
    if (data && !data.totalResults) {
      return (
        <p>No News Found.</p>
      )
    } else if (data) {
      return (
        <Page
          data={data}
          showImages={showImages}
        />
      )
    }
  }

```

</details>

### Changelog

- Updated location of link back to API in MVP
- 