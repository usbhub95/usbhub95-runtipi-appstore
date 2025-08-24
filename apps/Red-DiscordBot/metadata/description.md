# Red-DiscordBot V3

The newest Red-DiscordBot in a convenient multi-arch container

[![Docker Pulls](https://img.shields.io/docker/pulls/phasecorex/red-discordbot)](https://hub.docker.com/r/phasecorex/red-discordbot)
[![Build Status](https://github.com/PhasecoreX/docker-red-discordbot/workflows/build/badge.svg)](https://github.com/PhasecoreX/docker-red-discordbot/actions?query=workflow%3Abuild)
[![BuyMeACoffee](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-orange)](https://buymeacoff.ee/phasecorex)
[![PayPal](https://img.shields.io/badge/paypal-donate-blue)](https://paypal.me/pcx)

## Why This Image?

There are many reasons that this image is better (or as good as) the others out there:

- **Doesn't run as root**: You can specify exactly which user you want the bot to run and create files as.
- **Easy to set up**: Just run one docker command and your new bot is ready to join your server.
- **Always up-to-date**: The bot will always update itself to the latest PyPi release on every (re)start.
- **Runs on most servers**: Can run on a normal x86-64 server, as well as arm(64) devices (Raspberry Pi).
- **Update notifications**: Integrates with [UpdateNotify](https://github.com/PhasecoreX/PCXCogs) to notify you when there is a Red-DiscordBot or Docker image update ready.
- **It's pretty small**: Image size has been reduced as much as possible, only including the bare minimum to run Red-DiscordBot as well as a vast majority of 3rd party cogs.
