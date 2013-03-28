#!/usr/bin/python
import requests
from requests_oauthlib import OAuth1
import json

def upload_file(title, description, file):

	client_key = 'K9qG70PgROIg8CpZGJlGRg'
	client_secret = '0JdZcz5pz0HwyWbeiwsviA'
	oauth_token = 'KiK1mXCCUcEBS8Y0enYwaANIvQZZKThYYRV27IYc8kCwKiK1mXCCUcEXS8Y0enYwaA'
	oauth_token_secret = 'LH6qL2FoQOeLfyEjnnnRGQ'
	oauth = OAuth1(client_key, client_secret, oauth_token, oauth_token_secret)

	# Create article on figshare
	body = {'title':title, 'description':description,'defined_type':'dataset'}
	headers = {'content-type':'application/json'}

	response = requests.post('http://api.figshare.com/v1/my_data/articles', data=json.dumps(body), headers=headers, auth=oauth)
#	print response
	postResults = json.loads(response.content)

	articleId = postResults['article_id']

	files = {'filedata': file}

	response_file = requests.put('http://api.figshare.com/v1/my_data/articles/' + str(articleId) + '/files', files=files, auth=oauth)
	print response
	results_file = json.loads(response_file.content)
	print results_file

#print "Checked urls: ", checked_urls
#for u in article_urls :
#    if u['uri'] in checked_urls :
#        body = {'link': u['web']}
#        headers = {'content-type':'application/json'}
#
#        response = requests.put('http://api.figshare.com/v1/my_data/articles/{}/links'.format(article_id),
#                            data=json.dumps(body), headers=headers, auth=oauth)
#        results = json.loads(response.content)
#        print "Added {} with the following results:\n".format(u['uri']), results

#body = {'tag_name': 'Enriched with LinkItUp'}
#headers = {'content-type':'application/json'}

#response = requests.put('http://api.figshare.com/v1/my_data/articles/{}/tags'.format(article_id),
#                            data=json.dumps(body), headers=headers, auth=oauth)