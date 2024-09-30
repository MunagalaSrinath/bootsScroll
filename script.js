function process() {
  console.log("Function is called");
  let username = document.getElementById("jonny").value;
  console.log(username + " by id");
  let user = document.getElementsByClassName("kanna")[0].value;
  console.log(user + " by class");
  let query = document.querySelector("#jonny").value;
  console.log(query + " by query");
  let tag = document.getElementsByTagName("input")[3].value;
  console.log(tag + " by tag");
}
