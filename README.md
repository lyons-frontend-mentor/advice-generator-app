# Advice generator app solution

## Overview

### The challenge

Write a card component which displays a quote from the Advice Slip API. The user can fetch more quotes by clicking the button.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- HTML
- CSS
- JavaScript

## Reflection

In line with my previous Frontend Mentor challenges, I want to use Frontend Mentor to practice my web development fundamentals: HTML, CSS, and JavaScript. This is my first JavaScript challenge from the site, though this comes after I completed a large, full-stack, six-month project [Bill's PC](https://billspc.dev), in which I used various other technologies.

Among these technologies is React, which one could easily use for this project. On the other hand, I recognize that different teams use different technologies, and that implementing these solutions in vanilla JavaScript would make me a more well-rounded developer. My hope is that, whichever stack my future team uses, I could more quickly pick up whichever technologies (e.g. the other frontend frameworks) in which I lack experience. That being said, in working on Bill's PC I stuck to using vanilla (BEM) CSS, so that restricting myself to plain CSS for this challenge was not a hindrance at all.

As for vanilla JavaScript, I feel shakier since coding with React follows a different paradigm. This was a good beginner challenge for easing me into sticking with vanilla JavaScript, as it required only a couple event listners (generating the advice of course, as well as changing the divider image on window resize).

I decided to add onto the challenge a little bit, as the Advice Slip API rate-limits you to one quote every two seconds (otherwise, it just returns the cached, previous quote). For the user, this means that as the challenge is presented, clicking the button multiple times in quick succession wouldn't do anything, as the generated quote wouldn't change. To provide a better user experience, in the click handler I also added a `--disabled` class to the wrapper of the button in order to apply appropriate styling, removing it after two seconds. (I may have been able to use the `:disabled` pseudo-selector on the `button` element itself, but I had trouble applying the green background to the `button`, so I wrapped the actual `button` in a neon-green `div` instead.)

For the next few future projects, I will continue to stick to plain HTML/CSS/JavaScript. I still need a lot of practice before I'm comfortable using vanilla JavaScript. I think at some point I'd like to integrate a CSS preprocessor such as Sass, as a lot of teams seem to use those based on the job postings I've seen.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.
