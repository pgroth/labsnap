#!/usr/bin/python
from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer
from create_article import upload_file

PORT_NUMBER = 3637

#This class will handles any incoming request from
#the browser 
class myHandler(BaseHTTPRequestHandler):
	
	#Handler for the GET requests
	def do_GET(self):
		self.send_response(200)
		self.send_header('Content-type','text/html')
		self.end_headers()
		# Send the html message
		self.wfile.write("Hello World !")
		return
		
	def do_POST(self):
		title = "titleee"
		description = "descriptp"
		file = open('test.txt', 'rb')
		
		upload_file(title, description, file)
		
		
		self.send_response(200)
		self.send_header('Content-type','text/html')
		self.end_headers()
		
		# Send the html message
		self.wfile.write("succes")
		return

try:
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer(('', PORT_NUMBER), myHandler)
	print 'Started httpserver on port ' , PORT_NUMBER
	
	#Wait forever for incoming htto requests
	server.serve_forever()

except KeyboardInterrupt:
	print '^C received, shutting down the web server'
	server.socket.close()