const leftBar = document.querySelector("ytd-mini-guide-renderer.style-scope");

const items = [
  { text: "Watch Later", link: "https://www.youtube.com/playlist?list=WL" },
  { text: "History", link: "https://www.youtube.com/feed/history" },
  { text: "Playlists", link: "https://www.youtube.com/feed/playlists" },
  { text: "Downloads", link: "https://www.youtube.com/feed/downloads" }
];

items.forEach(item => {
  const a = document.createElement("a");
  const box = document.createElement("div");
  const span = document.createElement("span");

  a.href = item.link;
  // a.target ="_blank"
  span.textContent = item.text;

if(window.location.href === item.link){
	  box.classList.add("active");
}
  box.classList.add("left-side-items");

  a.appendChild(span);
  box.appendChild(a);

  leftBar.appendChild(box);
});

console.log(window.location.href);