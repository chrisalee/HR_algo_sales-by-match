const sockMerchant = (n, ar) => {
    let pairs = 0;
    let noPairs = [];
    let sorted = ar.sort((a, b) => a - b);
    // console.log(sorted);
    let counter = 0;
    
    for(let i = 0; i < sorted.length; i++) {
        counter = (sorted.lastIndexOf(sorted[i]) - sorted.indexOf(sorted[i])) + 1;
        if(counter % 2 == 0) {
            pairs += counter / 2;
        } else {
            counter = counter - 1;
            pairs += counter / 2;
            // noPairs.push(sorted[i]);
        }
        i = sorted.lastIndexOf(sorted[i]);
    }
    console.log(pairs);
    return pairs;
}
