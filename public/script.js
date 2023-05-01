/** @format */

document.getElementById("submit").onclick = () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  fetch("/data", {
    method: "post",
    headers: {
      contenttype: "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
