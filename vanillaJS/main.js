const base_API_URL =
  "https://pixabay.com/api/?key=ENTERYOURAPIKEYHERE&q=";

let imagesSection = document.querySelector("section");
let loading = document.getElementById("loading");
let totalHits = document.getElementById("totalHits");

loading.style.display = "none";

let searchTerm = "";

function handleSubmit() {
  event.preventDefault();
  searchTerm = "";
  imagesSection.innerHTML = "";
  totalHits.innerHTML = "";

  searchTerm = document.getElementById("searchTerm").value;

  console.log(searchTerm);

  loading.style.display = "block";
  searchImages(searchTerm);
}

function searchImages(searchTerm) {
  const constructedURL = base_API_URL + searchTerm + "&image_type=photo";
  fetch(constructedURL)
    .then((res) => res.json())
    .then((data) => showImages(data));
}

function showImages(data) {
  totalHits.innerHTML = data.total + " hits!";
  data.hits.forEach((image) => {
    const imageElement = document.createElement("img");
    imageElement.src = image.webformatURL;
    imagesSection.appendChild(imageElement);
  });
  loading.style.display = "none";
}
