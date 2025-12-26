function updateDate() {
    const today =  new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getUTCFullYear();
    const weekday = today.getDay();
  
    const formattedDate = `${month.toString()}/${day.toString()}/${year.toString()} (${getDoW(weekday)})`;
    console.log(formattedDate);
    document.getElementById('date').textContent = formattedDate;
  }

  //Get Day of week
  function getDoW(weekday){
    switch (weekday)
    {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wedsnesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";

    }
  }

  setTimeout(() => {updateDate();}, 3000)
  