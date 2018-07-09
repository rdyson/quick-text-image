# Quick Text Image

This is a node script that adds text to an image background for sharing on Instagram. You can run it from the command line.

Here's how it works:

1. Grabs a random image from [Unsplash](https://unsplash.com) via [Lorem Picsum](https://picsum.photos)
2. Adds a text box and given text using image transformations on [Cloudinary](https://cloudinary.com)
3. Returns a Cloudinary URL that you can share or use to download the image for posting on Instagram.

## Installation and usage

1. Clone this repository
1. In the repository directory, run `npm install`. Alternately you can run `yarn`.
1. Create a free Cloudinary account and grab your `CLOUDINARY_URL` environment variable from your [Cloudinary admin console](https://cloudinary.com/console). The free account includes 20,000 transformations, so you shouldn't have an issue of hitting any limits. (each run of this script counts as 2 transformations)
1. Export your `CLOUDINARY_URL` as an environment variable by adding it to your bash_profile or zshrc. Alternately you can set the environment variable temporarily by running `export CLOUDINARY_URL=...`
1. Run `node quick.js Lorem ipsum`, replacing Lorem ipsum with whatever text you want to use.
1. You'll get back a URL for the image. Running the command again will return a different image.

Here's an example:

![](example.jpeg)

## Notes

* Works pretty well up to 160 characters. You can tweak the font size on line 43 (`_100` is the current font size, 100px).
* Doesn't handle commas yet.
