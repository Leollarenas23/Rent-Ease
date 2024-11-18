
function signUp() {
        const userInput = document.getElementById('userInput');
        const userText = userInput.value;
        if (userText === '') return;
    
        const li = document.createElement('li');
        li.textContent = userText;
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
    
        document.getElementById('userList').appendChild(li);
        userInput.value = ''; // Clear the input
    }