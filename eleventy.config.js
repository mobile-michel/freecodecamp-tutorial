const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(`./src${src}`, {
    widths: [300, 800, null],
    formats: ["avif", "jpeg"],
<<<<<<< HEAD
    urlPath: "./images/",
=======
    urlPath: "/images/",
>>>>>>> 4af41d787781155e42f282f45e1d79e921ee4e11
    outputDir: "./_site/images/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
