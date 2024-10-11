
const subscribeUser = async (userData) => {
    try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Failed to subscribe');
        }

        return await response.json(); // Assuming backend returns a success message
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw error to handle it in the component
    }
};

export { subscribeUser };
