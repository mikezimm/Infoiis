## infoiis

This is where you include your WebPart documentation.

## Installation steps
```
yo @microsoft/sharepoint --skip-install
npm install
npm install @pnp/sp @pnp/graph --save
npm install @pnp/spfx-controls-react --save --save-exact
npm install @pnp/spfx-property-controls
npm install --save office-ui-fabric-react
npm install webpack-bundle-analyzer --save-dev
```

2020-07-26:  Copied entire services library from TrackMyTime7



## saw these warnings upon first npm install:
```
npm WARN @pnp/sp-clientsvc@1.3.11 requires a peer of @pnp/sp@1.3.11 but none is installed. You must install peer dependencies yourself.
npm WARN @pnp/sp-taxonomy@1.3.11 requires a peer of @pnp/logging@1.3.11 but none is installed. You must install peer dependencies yourself.
npm WARN @pnp/sp-taxonomy@1.3.11 requires a peer of @pnp/common@1.3.11 but none is installed. You must install peer dependencies yourself.
npm WARN @pnp/sp-taxonomy@1.3.11 requires a peer of @pnp/odata@1.3.11 but none is installed. You must install peer dependencies yourself.
npm WARN @pnp/sp-taxonomy@1.3.11 requires a peer of @pnp/sp@1.3.11 but none is installed. You must install peer dependencies yourself.
npm WARN ajv-keywords@3.5.1 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN uglifyjs-webpack-plugin@0.4.6 requires a peer of webpack@^1.9 || ^2 || ^2.1.0-beta || ^2.2.0-rc || ^3.0.0 but none is installed. You must install peer dependencies yourself.
```

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
