'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    brotli: {
      enabled: false,
      extensions: ['js', 'css', 'svg'],
      keepUncompressed: true
    },
    gzip: {
      enabled: true,
      extensions: ['js', 'css', 'svg'],
      keepUncompressed: true
    },
    'autoprefixer': {
      browsers: [
        'ie 11',
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Edge versions',
        'last 2 Safari versions',
        'last 2 ios versions',
        'last 2 ChromeAndroid versions'
      ],
      cascade: false
    },
    'ember-cli-babel': {
      includePolyfill: true
    },
    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'public/img/icon.png',
          outputFileName: 'appicon-',
          convertTo: 'png',
          destination: 'assets/icons/',
          sizes: [32, 192, 280, 512]
        },
        {
          inputFilename: 'public/img/gallery/img-1.jpg',
          outputFileName: 'img-1-',
          convertTo: 'jpg',
          destination: 'assets/gallery/resize/',
          sizes: [1024]
        },
        {
          inputFilename: 'public/img/gallery/img-2.jpg',
          outputFileName: 'img-2-',
          convertTo: 'jpg',
          destination: 'assets/gallery/resize/',
          sizes: [1024]
        },
        {
          inputFilename: 'public/img/gallery/img-3.jpg',
          outputFileName: 'img-3-',
          convertTo: 'jpg',
          destination: 'assets/gallery/resize/',
          sizes: [1024]
        },
        {
          inputFilename: 'public/img/gallery/img-4.jpg',
          outputFileName: 'img-4-',
          convertTo: 'jpg',
          destination: 'assets/gallery/resize/',
          sizes: [1024]
        },
        {
          inputFilename: 'public/img/gallery/img-5.jpg',
          outputFileName: 'img-5-',
          convertTo: 'jpg',
          destination: 'assets/gallery/resize/',
          sizes: [1024]
        },
        {
          inputFilename: 'public/img/gallery/img-6.jpg',
          outputFileName: 'img-6-',
          convertTo: 'jpg',
          destination: 'assets/gallery/resize/',
          sizes: [1024]
        },
        {
          inputFilename: 'public/img/gallery/img-7.jpg',
          outputFileName: 'img-7-',
          convertTo: 'jpg',
          destination: 'assets/gallery/resize/',
          sizes: [1024]
        }
      ]
    // },
    // 'ember-service-worker': {
    //   enabled: true,
    //   registrationStrategy: 'inline',
    //   versionStrategy: 'every-build'
    // },
    // 'asset-cache': {
    //   include: [
    //     'assets/**/*',
    //     'favicons/**/*',
    //     'fonts/**/*',
    //     'img/**/*',
    //     '/api/(.+)'
    //   ],
    //   version: '10',
    //   requestMode: 'cors'
    // },
    // 'esw-cache-first': {
    //   patterns: [
    //     '/assets/(.+)',
    //     '/img/(.+)'
    //   ]
    // },
    // 'esw-cache-fallback': {
    //   patterns: [
    //     '/api/(.+)'
    //   ],
    // },
    // 'esw-prember': {
    //   version: '1'
    // },
    // 'prember': {
    //   baseRoot: 'https://heritageflyers.com',
    //   enabled: true,
    //   urls: [
    //     '/',
    //   ]
    }
  });
  return app.toTree();
};
