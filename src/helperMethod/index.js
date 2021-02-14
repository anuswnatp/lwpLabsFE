export function getDate(date, withTime = false) {
  let a = new Date(date);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var mins = a.getMinutes();
  let min = mins > 0 ? mins : `00`;
  var time =
    date +
    " " +
    month +
    " " +
    year +
    " @" +
    hour +
    ":" +
    min +
    ` ${hour > 12 ? `AM ` : `PM `}` +
    " IST";
  if (withTime) {
    return time;
  }
  return `${month} ${year}`;
}
