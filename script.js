fetch("recipe-app.json")
  .then((response) => response.json())
  .then((json) => {
    dataUpdate(json);
  });

function dataUpdate(json) {
  const div = document.getElementById("div");

  const jsonString = JSON.stringify(json, null, 2);
  div.innerText = jsonString;
}
