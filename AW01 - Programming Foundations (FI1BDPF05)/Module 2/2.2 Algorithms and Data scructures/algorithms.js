const countdown = (value) => {
    console.log("Countdown " + value);
    const newValue = value - 1;
    if (newValue >= 0) {
        countdown(newValue);
    }
}
countdown(10);

const countDownRev = (value) => {
    const newValue = value - 1;
    if(newValue > 0) {
        countDownRev(newValue);
    }
    console.log("Countdown reverse " + value);
}
countDownRev(10);