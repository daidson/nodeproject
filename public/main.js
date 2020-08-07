const update = document.querySelector("#update-button");

update.addEventListener("click", (_) => {
  fetch("/quotes", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Dolly Parton",
      quote:
        "The way I see it, if you want the rainbow, you gotta put up with the rain",
    }),
  });
});
