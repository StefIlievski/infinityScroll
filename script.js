// Unsplash API
let count = 10;
const apiKey = "XAXjAHJPnVEhcjD_T9TU1ey1FvzoagSnJEdDth2FabE";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
    alert(error);
  }
}

// On Load
getPhotos();
