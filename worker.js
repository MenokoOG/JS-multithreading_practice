// Function to perform the heavy computation
function heavyTask() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }
    return result;
}

// Event listener to receive messages from the main thread
self.addEventListener('message', function(event) {
    // Check the message received from the main thread
    if (event.data === 'start') {
        // Perform the heavy computation
        const result = heavyTask();

        // Send the result back to the main thread
        self.postMessage(result);
    }
});
