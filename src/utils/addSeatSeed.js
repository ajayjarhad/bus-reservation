export default function addSeatSeed() {
  if (localStorage.getItem("seats")) return; // Return early is seats data is already in the localstorage
  const seats = [];
  for (let i = 1; i <= 40; i++) {
    seats.push({
      seatNo: i,
      status: "available",
      reservedBy: null,
    });
  }
  localStorage.setItem("seats", JSON.stringify(seats));
}
