function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatMessages = document.getElementById('chat-messages');

    // Append user message to chat
    var userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.innerHTML = '<p>' + userInput + '</p>';
    chatMessages.appendChild(userMessageElement);

    
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatMessages = document.getElementById('chat-messages');

    // Append user message to chat
    var userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.innerHTML = '<p>' + userInput + '</p>';
    chatMessages.appendChild(userMessageElement);

    //Make AJAX request to Flask backend
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/get", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                // Append bot response to chat
                var botResponseElement = document.createElement('div');
                botResponseElement.classList.add('message', 'bot-message');
                botResponseElement.innerHTML = '<p>' + response.response + '</p>';
                chatMessages.appendChild(botResponseElement);
            } else {
                console.error('Error:', xhr.statusText);
            }
        }
    };
    xhr.send(JSON.stringify({ message: userInput }));

    // Clear user input
    document.getElementById('user-input').value = '';

    // Scroll to bottom of chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

    /* // Make AJAX request to Flask backend
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/get", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                // Append bot response to chat
                var botResponseElement = document.createElement('div');
                botResponseElement.classList.add('message', 'bot-message');
                botResponseElement.innerHTML = '<p>' + response.response + '</p>';
                chatMessages.appendChild(botResponseElement);
            } else {
                console.error('Error:', xhr.statusText);
                // Handle error here
            }
        }
    };
    xhr.onerror = function() {
        console.error('Request failed');
        // Handle request failure here
    };
    xhr.send(JSON.stringify({ message: userInput }));

    // Clear user input
    document.getElementById('user-input').value = '';

    // Scroll to bottom of chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
} */



