export const authService = {
    async signup(userData: any) {
      try {
        const response = await fetch('http://localhost:8000/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Signup failed');
        }
  
        return await response.json();
      } catch (error) {
        // @ts-ignore
        toast.error(error.message);
        throw error;
      }
    },
  }