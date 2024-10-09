export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('styles');
    eleventyConfig.addPassthroughCopy('dl');
}
