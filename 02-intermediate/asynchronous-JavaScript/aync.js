function getUser() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("User found");
    }, 1000);
  });
}

async function displayUser() {
  const result = await getUser();
  console.log(result);
}

displayUser();