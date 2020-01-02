# video-streaming

# Installation

0. Open a command line
0. `git clone https://github.com/thwee-alchemist/video-streaming.git`, clones a repository from a website using the https protocol. 
0. `cd video-streaming`, changes directory to the video-streaming directory you just cloned.
0. `npm install`, check package.json if you want to know what gets installed. 
0. `node index.js`, this runs this server. 
This starts a server, `bind`s it to `localhost`, your machine, on port `8000`, and responds to https requests, the kind your browser sends, by "serving up" a web page, custom-crafted just for yourself to enjoy, directly shipped to you, the user, on a series of tubes.
0. In the browser, you call `localhost`, at which ever port the server was defined to run on. You can specify a port number in a browser by appending `:portnumber` (so for example `:8000`) to the hostname, in our case localhost. Another name for localhost is usually 127.0.0.1. This is how I test websites over and oer again, every little corner of logic, until it's perfect enough to ship. It's like carving, woodworking. You conceive of the whole, and slowly chisel away at a larger block, until what is left is what you want it to be. 

# Operation

There are three main routes to consider: 

0. `localhost:8000/feed/`, which should be called from the computer with the webcam in question. 
0. `localhost:8000/`, which can be called from any computer the firewall settings will allow. 

If you followed these instructions, you should be able to open http://localhost:8000, though your firewall might prevent you from doing so. 
Congratulations, with a little knowledge of git you were able to clone a repository from a vast pool of repositories housing code, lists, and more. And with a little Node.js, you were able to set up a server, run a service, and stream a web cam. 

# Preqrequisites

You'll need to install Node.js for your Operating System. Please understand that there are many Operating Systems out there, and I cannot describe all of them, write if you have questions. The answers will be absorbed by humanity. 

You might also have to fiddle with your system policy or firewall settings to allow traffic to and from port 8000. 

