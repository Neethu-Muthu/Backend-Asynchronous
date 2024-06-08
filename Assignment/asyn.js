function multiplyAsync(a, b, callback) {
    setTimeout(() => {
      const result = a * b;
      callback(null, result);
    }, 0); // Simulating asynchronous behavior with setTimeout
  }
  
  // Usage example
  multiplyAsync(3, 4, (error, result) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Result:', result);
    }
  });