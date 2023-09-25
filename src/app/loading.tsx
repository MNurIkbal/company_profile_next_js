'use client'
import { useState, useEffect } from 'react';

export default function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1 style={{
          fontFamily:'cursive',
          fontSize:50,
          textAlign:'center',
          marginTop:"200px"
        }}>Loading .. </h1>
      ) : (
        <p></p>
      )}
    </div>
  );
}
