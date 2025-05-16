const API_URL = 'https://s-kerhet.onrender.com';

async function loadProtectedData() {
    const token = localStorage.getItem('token');
    
    try {
        // جلب بيانات المستخدم
        const userResponse = await fetch(`${API_URL}/protected`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const userData = await userResponse.json();
        
        // عرض البيانات
        document.getElementById('userInfo').innerHTML = `
            <h2>معلومات المستخدم</h2>
            <p>اسم المستخدم: ${userData.user.username}</p>
            <p>تاريخ التسجيل: ${new Date(userData.user.created_at).toLocaleDateString()}</p>
        `;

    } catch (error) {
        console.error('Error:', error);
        logout();
    }
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
}

// تحميل البيانات عند فتح الصفحة
document.addEventListener('DOMContentLoaded', loadProtectedData);