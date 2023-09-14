//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const hidden = document.querySelector(".dateAndButton");
const image = document.querySelector("img");
const video = document.querySelector("iframe");

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
	const choice = document.querySelector("input").value;
	console.log(choice);
	const url = `https://api.nasa.gov/planetary/apod?api_key=3RshQFbXqVQAfd7Js9ffifDGnoGgb1OPG1uq5gGm&date=${choice}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			if (data.media_type === "image") {
				image.src = data.url; // Set img source to image URL
				image.style.display = "block"; // Show img element
				video.style.display = "none"; // Hide video element
			} else {
				// If media type is a video, show the video and hide the image
				image.style.display = "none"; // Hide img element
				video.src = data.url; // Set iframe source to video URL
				video.style.display = "block"; // Show video element
			}
			document.querySelector("h3").innerText = data.explanation;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
// hide select date
document.querySelector("button").addEventListener("click", hide);

function hide() {
	hidden.style.display = "none";
}
