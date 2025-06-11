document.querySelector("button").addEventListener("click", foo);
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        foo();
    }
});

async function foo() {
    try {
        let result = document.getElementById("Text").value;
        let data = await fetch(`https://api.tvmaze.com/search/shows?q=${result}`);
        let data1 = await data.json();
        let div = document.getElementById("collable");
        div.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${data1[0].show.image.medium}" class="card-img-top" alt="image">
  <div class="card-body">
  <h3 class="card-tittle">${data1[0].show.name}</h3>
    <p class="card-text"><b>Genre :</b> ${data1[0].show.genres} </p>
    <p class="card-text"><b>Premiered :</b> ${data1[0].show.premiered} </p>
    <p class="card-text"><b>Rating :</b> ${data1[0].show.rating.average} </p>
    <p class="card-text"><b>Runtime :</b> ${data1[0].show.runtime} min </p>
    <p class="card-text"><b>Show Schedule :</b> ${data1[0].show.schedule.time}, ${data1[0].show.schedule.days} </p>
    <p class="card-text"><b>Official Site :</b> ${data1[0].show.officialSite} </p>
    <p class="card-text"><b>Network :</b> ${data1[0].show.network.name} </p>
    <p class="card-text"><b>Summary :</b> ${data1[0].show.summary} </p>
  </div>
</div>`
    } catch (error) {
        console.log(error);
    }
}