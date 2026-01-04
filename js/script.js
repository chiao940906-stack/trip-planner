let trips = JSON.parse(localStorage.getItem("trips")) || [];
function addTrip() {
  const time = document.getElementById("time").value;
  const title = document.getElementById("title").value;
  const place = document.getElementById("place").value;

  if (time === "" || title === "" || place === "") {
    alert("請填寫完整行程");
    return;
  }

  const trip = {
    time: time,
    title: title,
    place: place
  };

  trips.push(trip);

  // 存進 localStorage
  localStorage.setItem("trips", JSON.stringify(trips));

  renderTrips();

  // 清空輸入框
  document.getElementById("time").value = "";
  document.getElementById("title").value = "";
  document.getElementById("place").value = "";
}

function renderTrips() {
  const list = document.getElementById("tripList");
  list.innerHTML = "";

  trips.forEach((trip, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      <div>
        <strong>${trip.time}</strong> ｜ ${trip.title}（${trip.place}）
      </div>
      <button class="btn btn-sm btn-danger" onclick="deleteTrip(${index})">
        刪除
      </button>
    `;

    list.appendChild(li);
  });
}

function deleteTrip(index) {
  trips.splice(index, 1);
  localStorage.setItem("trips", JSON.stringify(trips));
  renderTrips();
}

renderTrips();
