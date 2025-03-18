export const sendCharacterData = async (data: FormData) => {
    try {
      const response = await fetch('https://webhook.site/300991a1-e55e-45f4-8408-2431dde882bc', {
        method: 'POST',
        body: data,
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      return true; 
    } catch (error) {
      console.error('Error sending data:', error);
      throw error; 
    }
  };