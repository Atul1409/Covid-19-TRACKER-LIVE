window.onload = async function () {
  const confirm = document.querySelector(".confirm");
  const active = document.querySelector(".active");
  const death = document.querySelector(".death");
  const recover = document.querySelector(".recover");
  const title = document.querySelector(".title");

  try {
    const res = await fetch("https://covid19.mathdro.id/api");
    const data = await res.json();
    confirm.innerHTML = data.confirmed.value;
    death.innerHTML = data.deaths.value;
    recover.innerHTML = data.recovered.value;
    active.innerHTML = parseInt(
      data.confirmed.value - (data.recovered.value + data.deaths.value)
    );
    title.innerHTML = "WORLD";
  } catch (error) {
      alert("please connect to internet to get data")
  }
};
