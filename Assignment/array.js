const numbers = [1, 2, 3, 4, 5];

// Function that returns a promise which resolves after 1 second
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

// Function that doubles a number with a delay
const doubleWithDelay = (number) => {
    return delay().then(() => number * 2);
};

// Function to process the array of numbers
const processNumbers = (numbers) => {
    const promises = numbers.map((number) => doubleWithDelay(number));
    return Promise.all(promises);
};

// Run the function and log the result
processNumbers(numbers)
    .then((result) => {
        console.log('All numbers processed:', result);
    })
    .catch((error) => {
        console.error('Error processing numbers:', error);
    });
