#!/usr/bin/python
import requests
from oauth_hook import OAuthHook
import json


OAuthHook.consumer_key = 'Jx2A6oyHRXeNgkR719eQSg'
OAuthHook.consumer_secret = 'g5lqRg9MD3Cn4ozSlSv8Xw'
token_key = 'A1qC4Zo7GiK2vhe1rrRQ1ARbMd39BWwbGpvxyoRAi6cwA1qC4Zo7GiK2vhe1rrRQ1A'
token_secret = 'bKIpbbIRQNYoyulyXB5jwQ'
oauth_hook = OAuthHook(token_key, token_secret, header_auth=True)

client = requests.session(hooks={'pre_request': oauth_hook})

body = {'title':'Test dataset', 'description':'Test description','defined_type':'dataset'}
headers = {'content-type':'application/json'}

response = client.post('http://api.figshare.com/v1/my_data/articles',
                        data=json.dumps(body), headers=headers)

results = json.loads(response.content)
print results
