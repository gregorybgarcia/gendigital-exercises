/*
 * Write a function that will take a date and compare with today date and return text:
 * - Today: same year, same month, same date // OK
 * - Yesterday: date = today - 1 // OK
 * - This week: today - 7 < date < today - 1 // OK
 * - Last week: today - 14 < date <= today - 7 // OK
 * - This month: same year, same month, date <= today - 14 // OK
 * - Last month: month = current month - 1 // OK
 * - This year: same year // OK
 * - last year: year = current year - 1 // OK
 * - Long time ago: everything else // OK
 *
 * Lastly, please write a unit test for calculateRelativeDate function
 * */

const calculateRelativeDate = (inputDate, mockToday) => {
  const convertedInputDate = new Date(inputDate);
  const today = mockToday ? new Date(mockToday) : new Date();

  if (today.toDateString() === convertedInputDate.toDateString())
    return "Today";

  var yesterday = today;
  yesterday.setDate(yesterday.getDate() - 1);
  if (convertedInputDate.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  var thisWeek = today;
  thisWeek.setDate(thisWeek.getDate() - 1);
  if (convertedInputDate.toDateString() === thisWeek.toDateString()) {
    return "This week";
  }

  function getWeekNumber(date) {
    var newDate = new Date(date);
    newDate.setHours(0, 0, 0);
    newDate.setDate(newDate.getDate() + 4 - (newDate.getDay() || 7));
    var yearStart = new Date(newDate.getFullYear(), 0, 1);
    var weekNo = Math.ceil(((newDate - yearStart) / 86400000 + 1) / 7);
    return weekNo;
  }

  if (getWeekNumber(convertedInputDate) === getWeekNumber(today)) {
    return "This week";
  }

  const weekDiff = getWeekNumber(convertedInputDate) - getWeekNumber(today);

  if (weekDiff === -1) {
    return "Last week";
  }

  if (
    convertedInputDate.getMonth() === today.getMonth() &&
    convertedInputDate.getFullYear() === today.getFullYear()
  ) {
    return "This month";
  }

  const monthDiff = convertedInputDate.getMonth() - today.getMonth();

  if (
    monthDiff === -1 &&
    convertedInputDate.getFullYear() === today.getFullYear()
  ) {
    return "Last month";
  }

  if (convertedInputDate.getFullYear() === today.getFullYear()) {
    return "This year";
  }

  const yearDiff = convertedInputDate.getFullYear() - today.getFullYear();

  if (yearDiff === -1) {
    return "Last year";
  }

  if (yearDiff < -1) {
    return "Long time ago";
  }
};

const View = {
  init: () => {
    const inputDateElem = document.getElementById("relative-date-input");
    inputDateElem.setAttribute("max", new Date().toISOString().split("T")[0]);
    document
      .getElementById("relative-date-btn")
      .addEventListener("click", () => {
        const msgElement = document.getElementById("relative-date-msg");
        msgElement.textContent = calculateRelativeDate(inputDateElem.value);
      });
  },
};

document.addEventListener("DOMContentLoaded", View.init);
export { calculateRelativeDate };
