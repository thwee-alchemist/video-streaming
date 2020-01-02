# video-streaming

0. Open a command line
0. `git clone https://github.com/thwee-alchemist/video-streaming.git`.
0. `cd video-streaming`
0. `npm install`
0. `node index.js`
This starts a server, `bind`s it to `localhost`, your machine, on port `8000`, and responds to https requests, the kind your browser sends, by "serving up" a web page, custom-crafted just for yourself to enjoy, directly shipped to you, the user, on a series of tubes.
0. In the browser, you call `localhost`, at which ever port the server was defined to run on. You can specify a port number in a browser by appending `:portnumber` (so for example `:8000`) to the hostname, in our case localhost. Another name for localhost is usually 127.0.0.1. This is how I test websites over and oer again, every little corner of logic, until it's perfect enough to ship. It's like carving, woodworking. You conceive of the whole, and slowly chisel away at a larger block, until what is left is what you want it to be. 

If you followed these instructions, you should be able to open http://localhost:8000, though your firewall might prevent you from doing so. 
