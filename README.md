# fanatic

A script to automate stackoverflow login using Puppetter [https://github.com/denistsoi/fantatic].  
Using Procfile, deploy to heroku.

![fanatic](https://media.giphy.com/media/pPzjpxJXa0pna/giphy.gif)

### Note:

- Add this to your build pack https://github.com/jontewks/puppeteer-heroku-buildpack
- Add Heroku Scheduler here [article]](https://devcenter.heroku.com/articles/scheduler).  
- Add some logging (for my setup, I used Timber.io).

### How to use:

    EMAIL=email PASSWORD=password node index

### References:

- https://timleland.com/headless-chrome-on-heroku/
- https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-on-heroku

### Author
Denis Tsoi <denistsoi@gmail.com>

### license
MIT

