document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (message !== "") {
        const messageContainer = document.createElement('p');
        messageContainer.classList.add('message', 'sent');
        messageContainer.textContent = message;
        document.querySelector('.messages').appendChild(messageContainer);
        chatInput.value = "";

        // Auto-scroll to the latest message
        document.querySelector('.messages').scrollTop = document.querySelector('.messages').scrollHeight;
    }
});
