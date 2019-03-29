function twitterUpdate(){
	console.log("embed specified twitter feed")
	handle = document.querySelector("#twit").value
	feed = document.querySelector("#twitter")

	var node = document.createElement("a"); 
	node.href = "https://twitter.com/"+handle+"?ref_src=twsrc%5Etfw";		
	node.text = handle;
	node.classList.add("twitter-timeline");

	feed.appendChild(node)

	console.log(node.href); 
	return false;
}