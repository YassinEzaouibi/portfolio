let BASE_URL = 'http://localhost:5000';

export const subscribeUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/thank-you`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const responseBody = await response.json();

        if (!response.ok) {
            throw new Error(responseBody.message || 'Failed to subscribe');
        }

        return responseBody;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

