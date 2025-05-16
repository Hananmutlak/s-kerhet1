const API_URL = 'https://s-kerhet.onrender.com';

async function loadProtectedData() {
    const token = localStorage.getItem('token');
    
    try {
        // Hämta användardata
        const userResponse = await fetch(`${API_URL}/protected`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const userData = await userResponse.json();
        
        // Visa användardata
        document.getElementById('userInfo').innerHTML = `
            <h2>Användarinformation</h2>
            <p>Användarnamn: ${userData.user.username}</p>
            <p>Registreringsdatum: ${new Date(userData.user.created_at).toLocaleDateString('sv-SE')}</p>
        `;

    } catch (error) {
        console.error('Fel:', error);
        logout();
    }
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
}

// Ladda data när sidan öppnas
document.addEventListener('DOMContentLoaded', loadProtectedData);
