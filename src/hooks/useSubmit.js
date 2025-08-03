import { useState } from 'react';

const useSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    console.log("Submit function called"); // Verifique se isso aparece no console
    setLoading(true); 

    try { 
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Dados do formulário convertidos em JSON
      });

      const result = await response.json(); // Resposta do servidor
      if (response.ok) {
        setResponse({ 
          type: 'success', 
          message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) { 
      setResponse({ 
        type: 'error', 
        message: 'Something went wrong, please try again later!', 
      }); 
    } finally { 
      setLoading(false); 
    } 
  };

  return { submit, response, loading };
};

export default useSubmit;