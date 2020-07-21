# ColorPalette App :hearts:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The app is a Color Palette App where we can build our custom palettes of our favorite colors, a list of palettes is provided on home page from which we can copy the color codes (hex/rgb/rgba) of the specific choosed colors. Every color also has different shades from light to dark which we can copy to our clipboard.
***
## Project Status :

__`COMPLETE`__ :fire: 

## Environments Required :
* [Nodejs](https://nodejs.org/en/download/)
* [Npm](https://www.npmjs.com/package/download)
* [Git](https://git-scm.com/downloads)
* [Yarn](https://yarnpkg.com/getting-started/install) __`optional`__
## Check for proper Installation :

    $ node -v
    $ npm -v
    $ git --version
    $ yarn -v

## Required Dependencies (Exclusive of `cra` provided dependencies) :
* [@material-ui/core](https://www.npmjs.com/package/@material-ui/core)
* [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons)
* [@material-ui/styles](https://www.npmjs.com/package/@material-ui/styles)
* [chroma-js](https://www.npmjs.com/package/chroma-js)
* [color-name-list](https://www.npmjs.com/package/color-name-list)
* [emoji-mart](https://www.npmjs.com/package/emoji-mart)
* [rc-slider](https://www.npmjs.com/package/rc-slider)
* [react-color](https://www.npmjs.com/package/react-color)
* [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard)
* [react-material-ui-form-validator](https://www.npmjs.com/package/react-material-ui-form-validator)
* [react-sortable-hoc](https://www.npmjs.com/package/react-sortable-hoc)
* [react-transition-group](https://www.npmjs.com/package/react-transition-group)

***
## *Project Description* :

This project is build with React.js using `cra` template (`npx create-react-app app_name`). The Stylings provided to the App is completely written in `JSS` with the help of `@material-ui/core/styles` and minimal use of Inline Stylings to the elements. The App is subdivided into various components like DraggableColorBox, PaleteList, MiniPalete, etc.. The entire components can be found in `colorpaletteapp/src` . We have used a Chrome-Picker Element for color picking, which is imported from module `react-color` . The App is mostly build up on `@material-ui` Package. The App also has functionality where the colors of text are dynamic according to the background color, which is provided by `chroma-js` package, a powerfull package for dealing with color conversions. The app also has a custom palette building feature where the color boxes are dragggable, where the dragging functionality is provided by `react-sortable-hoc` a higher order component. The animations/transitions are provided to routing and deleteing of palettes, which is provided by `react-transition-group` . Also the app has a Emoji-Picker Component for saving the palette with an emoji, which is provided by `emoji-mart` .

## Available Scripts

In the project directory, you can run:

### `npm start / yarn start` 

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test / yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build / yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject / yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
***
## **NOTE** :

You can use the code under the standards of MIT License but mention of Author ( Rahul Gupta [@notsonoobie](https://github.com/notsonoobie) ) is appreciable.
***
   
## *Contact Me*

:phone: +91-89288-85199

:e-mail: swastikmedical74@gmail.com

:globe_with_meridians: http://showcasingmyself.netlify.com

:octocat: [notsonoobie](https://github.com/notsonoobie)

***

&copy; Rahul Gupta ([notsonoobie](https://github.com/notsonoobie)) -- Thank You! :nerd_face:
