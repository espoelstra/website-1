const fs = require('fs');
const path = require('path');
const lodash = require('lodash');
const htmlmin = require('html-minifier');
const svgContents = require('eleventy-plugin-svg-contents');
const pluginPWA = require('eleventy-plugin-pwa');
const manifest = {
    'main.js': '/assets/js/main.bundle.js',
    'main.css': '/assets/js/main.css'
};
const format = require('date-fns/format');
const moment = require('moment');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets/images');
    eleventyConfig.addPassthroughCopy('./src/assets/videos');


    eleventyConfig.addPassthroughCopy('./src/assets/setup');
    eleventyConfig.addLiquidFilter('limit', (arr, limit) => arr.slice(0, limit));
    eleventyConfig.addPlugin(pluginPWA, {
        swDest: './docs/service-worker.js',
        globDirectory: './docs'
    });
    eleventyConfig.addPlugin(svgContents);

    // add `date` filter
    eleventyConfig.addFilter('date', function (date, dateFormat) {
        return format(date, dateFormat);
    });

    // Random Filter: With the help from google search engine
    eleventyConfig.addFilter('shuffle', (arr) => lodash.shuffle(arr));

    eleventyConfig.addFilter('dateDisplay', function (input) {

        let xx = moment(input).format('MMMM Do YYYY');
        return xx;
    });

    let markdownIt = require('markdown-it');
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };

    eleventyConfig.addTransform('htmlmin', function (content, outputPath) { // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath && outputPath.endsWith('.html')) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

    eleventyConfig.setLibrary('md', markdownIt(options));
    eleventyConfig.setLiquidOptions({
        dynamicPartials: false, strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    });
    // Add a shortcode for bundled CSS.
    eleventyConfig.addShortcode('bundledCss', function () {
        return manifest['main.css'] ? `<link href="${
            manifest['main.css']
        }" rel="stylesheet" />` : '';
    });

    // Add a shortcode for bundled JS.
    eleventyConfig.addShortcode('bundledJs', function () {
        return manifest['main.js'] ? `<script src="${
            manifest['main.js']
        }"></script>` : '';
    });
    return {
        markdownTemplateEngine: 'md',
        dir: {
            input: 'src',
            output: 'docs'
        }
    };
};
