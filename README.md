# Zoom Bot 

Hi! This bot was designed for the UTD Class of 2024 Discord Server. Its main purposes are for greeting new users and administrative commands, however it has scalable functionality for many different uses. There will be added functionality for different commands in the future, however this still functions as a good framework. For detailed instructions on each file, Discord.JS docs offer helpful guides for setups and frameworks.

# Code Setup
In order to run this bot, you must have both `node.js` installed.

**First**, make a folder to house the code for the bot. Within this folder, open a command prompt and run the following initialization command: `npm init`. This will take you through a series of properties, answer these as you choose or leave them blank, it is entirely preferential. This should make a new file called `package.json`.

Now, install `discord.js` within this folder. 
Run the following. `npm install discord.js`

Next, make another folder within the current one, titled, `commands`. Within this you will download the `js` various command files or make your own custom files within.  Download all other remaining files into the main folder. 

# Bot Setup
In the **Discord** [Developer Portal](https://discord.com/developers/applications), Click *New Application*. Name the application whatever your heart desires, and confirm. Now, select the *Bot* tab on the left hand side of your screen. Select *Add Bot* and confirm. Below your bot's username, there should be an option to copy its token. Copy this token, and do **NOT** show anyone this token, as it is the equivalent to a password for your bot to login. Anyone with access to this can run code under the bot's name.  

Inside your `config.json` file that was copied over earlier, replace the *insert-token-here* place holder with your custom token. Again, do not allow anyone to see this. 

In the OAuth2 tab, select the *bot* scope along with any specific permissions you desire for your bot, and copy the invite link presented to you. Open this link in a new tab and invite the bot to your server of choice. 

# Running the Bot
Run the bot using `node .` or `node index.js` in a command prompt within your bot folder.

## Enjoy!

