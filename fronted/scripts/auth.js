const API_URL = 'https://s-kerhet.onrender.com';

async function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        
        if (!response.ok) {
            document.getElementById('regMessage').textContent = data.message || 'Registreringen misslyckades';
            return;
        }
        
        document.getElementById('regMessage').textContent = 'Registreringen lyckades!';
    } catch (error) {
        document.getElementById('regMessage').textContent = 'Ett anslutningsfel har inträffat';
    }
}

async function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        
        if (!response.ok) {
            document.getElementById('loginMessage').textContent = data.message || 'Inloggningen misslyckades';
            return;
        }
        
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.html';
    } catch (error) {
        document.getElementById('loginMessage').textContent = 'Ett anslutningsfel har inträffat';
    }
}
