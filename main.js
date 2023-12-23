function updateClock(){
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const amPM = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    document.getElementById('date').textContent = `Date: ${year}-${month}-${day}`;
    document.getElementById('time').textContent = `Time: ${hours}:${minutes}:${seconds} ${amPM}`;
}

setInterval(updateClock, 1000);

updateClock();