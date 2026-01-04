function addTrip() {
  const datetime = document.getElementById("datetime").value;
  const content = document.getElementById("content").value;
  const place = document.getElementById("place").value;

  if (datetime === "" || content === "" || place === "") {
    alert("請填寫所有欄位");
    return;
  }

  const list = document.getElementById("tripList");

  const dt = new Date(datetime);
  const formattedDate = dt.getFullYear() + "-" +
                        String(dt.getMonth()+1).padStart(2,'0') + "-" +
                        String(dt.getDate()).padStart(2,'0') + " " +
                        String(dt.getHours()).padStart(2,'0') + ":" +
                        String(dt.getMinutes()).padStart(2,'0');

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = formattedDate + "｜" + content + "（" + place + "）";

  // 點擊行程可以刪除
  li.onclick = function() {
    if (confirm("確定要刪除這個行程嗎？")) {
      list.removeChild(li);
    }
  };

  list.appendChild(li);

  // 清空輸入框
  document.getElementById("datetime").value = "";
  document.getElementById("content").value = "";
  document.getElementById("place").value = "";
}