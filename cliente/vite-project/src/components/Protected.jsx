import React from 'react';

const Protected = () => {
    const handleProtected = async () => {
        const token = localStorage.getItem('auth-token');

        if (!token) {
            alert('No token found, please login first');
            return;
        }

        try {
            const res = await fetch('http://localhost:8000/protected', {
                method: 'GET',
                headers: { 'auth-token': token }
            });

            const data = await res.text();

            if (res.ok) {
                alert(`Protected data: ${data}`);
            } else {
                alert(data);
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred');
        }
    };

    return (
        <div>
            <button onClick={handleProtected}>Access Protected Route</button>
        </div>
    );
};

export default Protected;
