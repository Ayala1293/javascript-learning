function downloadData(callback) {
  console.log("Downloading data...");

  setTimeout(function () {
    console.log("Download complete!");
    callback();
  }, 2000);
}

function showMessage() {
  console.log("You can now use the data.");
}

downloadData(showMessage);
