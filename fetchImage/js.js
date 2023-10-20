let accessKey = "dXqeZKS_Z9A379f3c_jR8Q40DkoLpnTPivdDcEo0tYU";
let formf = document.querySelector("form");
let searchInput = document.getElementById("input-search");
let searchButton = document.getElementById("search-button");
let imageContainer = document.querySelector(".container");
let showMore = document.getElementById("nextBtn");
let searchData = "";
let page = 1;
async function accessData() {
  searchData = searchInput.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchData}&client_id=${accessKey}`;

  let response = await fetch(url);
  let data = await response.json();
  let wholeData = data.results;
  if (page === 1) {
    imageContainer.innerHTML = "";
  }
  page++;
  console.log(wholeData)
  wholeData.map((result) => {
    let imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    let image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    let title = document.createElement("a");
    title.href = result.links.html;
    title.target = "_blank";
    title.textContent = result.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(title);
    imageContainer.appendChild(imageWrapper);
  });
  if(page>1){
    showMore.style.display="block";
  }
}
formf.addEventListener('submit',(event)=>{
  event.preventDefault();
  page=1;
  accessData();
})
showMore.addEventListener("click",()=>{
  accessData();
})
