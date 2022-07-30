module.exports = function (config) {
  config.addPassthroughCopy("./input/public/");
  // 필요한 파일을 추가한다.
  config.addPassthroughCopy("./input/sw.js"); 
  config.addPassthroughCopy("./input/robots.txt"); 
  config.addPassthroughCopy("./input/ads.txt");
  config.addPassthroughCopy("./input/redirect.js");
  config.addPassthroughCopy("./input/manifest.json");
  config.addWatchTarget("./input/public/");   
  return {
    passthroughFileCopy: true,
    dir: {
      input: "input",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
