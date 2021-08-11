# geosim-discord-helper
This is a basic bot designed specifically for the [Geosim](https://www.reddit.com/r/geosim) community.. Follows along with the documentation provided by [discordjs.guide](https://discordjs.guide). This bot is deployed on Heroku.

Tokens, Bot ID, and Guild ID are set with environmental variables.

Add slash commands in the ``commands`` folder. Deploy slash commands via the ``deploy.py`` script.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
```
### Installing

A step by step series of how to get the bot running

Install Node.js

```
Install Node.js
goto downloads
you can choose the lts or the current version of node.js depending on what you want
then download the installer according to your operating system
```
[Node.js](https://nodejs.org/en/) 

Installing discord.js and making the bot folder

```
After you have node.js
create a folder on your computer
On windows open cmd and copy the folder location from top of the file browser
and on cmd type cd "then paste the location" and enter
Then do in the cmd npm i discord.js to install discord.js 
before you do the install command make sure the cmd window is in the right folder
what is the api used to connect to discord
```

Getting this bot and starting it
```
Clone this repository
```
[Discord Developer Site](https://discordapp.com/developers/applications/)

Other things you can do for bot develoment
```
you can install nodemon to restart the bot everytime the bot file is changed
to install nodemon globally type npm i -g nodemon
```

## Authors

* **CappeDiem** - *Initial work* - [CappeDiem](https://github.com/CappeDiem)
* **ningmenhao** - *v1.0 and v2.0* - [ningmenhao](https://github.com/ningmenhao)

## Built With

* [Node.js](https://nodejs.org/en/) - the base that the bot runs on
* [discord.js](https://discord.js.org/#/) - node.js link to the discord bot api
* [python](https://python.org) - runs the REST API commands needed to update slash commands
