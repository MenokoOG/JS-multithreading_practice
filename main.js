// Event listener to start the heavy task when the button is clicked
document.getElementById('startButton').addEventListener('click', () => {
    startHeavyTask();
});

// Function to start the heavy task
function startHeavyTask() {
    // Create a new Worker
    const worker = new Worker('worker.js');

    // Message handler to receive result from the worker
    worker.onmessage = function(event) {
        const result = event.data;
        document.getElementById('result').textContent = `Result: ${result}`;
    };

    // Start the heavy task by sending a message to the worker
    worker.postMessage('start');
}
