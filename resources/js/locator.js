function locator() {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    geoDecode(latitude, longitude);
  }
  function error() {
    console.log("failed");
  }

  function geoDecode(latitude, longitude) {
    const Http = new XMLHttpRequest();
    const url =
      "https://nominatim.openstreetmap.org/reverse.php?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&zoom=14&format=jsonv2";
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var pos = JSON.parse(Http.response);
        document.querySelector("#mylocation").innerHTML =
          pos["name"] + "&nbsp;-&nbsp;" + pos["address"]["region"];
      }
    };
  }

  if (!navigator.geolocation) {
    console.log("not aupported by this browser");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  locator();
});
