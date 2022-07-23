import requests
import os
import json

url = f"https://discord.com/api/v8/applications/{os.environ['DISCORD_APP_ID']}/guilds/{os.environ['TEST_GUILD_ID']}/commands"

with open('commands.json', 'r') as f:
	data = json.load(f)

# For authorization, you can use either your bot token
headers = {"Authorization": f"Bot {os.environ['DISCORD_TOKEN']}"}


r = requests.put(url, headers=headers, json=data)
print(r.text)
