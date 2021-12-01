function birthdayCakeCandles(candles) {
    let tallestCandle = 0;
    let countCandles = 0;
    for (let i = 0; i <= candles.length; i++) {
        if (candles[i] > tallestCandle) {
            tallestCandle = candles[i];
            countCandles = 1;
        } else if (candles[i] === tallestCandle) {
            countCandles++;
        }
    }
    return countCandles;
}

 

