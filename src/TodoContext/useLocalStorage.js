import React from 'react';

// Custom Hook
function useLocalStorage(itemName, initValue) {
  const [item, setItem] = React.useState(initValue); // inicializador de estado
  const [loading, setLoading] = React.useState(true); // estado de carga
  const [error, setError] = React.useState(false); // estado de error

  React.useEffect(() => {
    setTimeout(() => {
      try {

        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if (!localStorageItem) {
          parsedItem = initValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorageItem);
          saveItem(parsedItem);
        }
        
        // const as = 123;  // error premeditado
        // as = 'lalala';

        setLoading(false);
      } catch (error) {

        setLoading(false);
        setError(true);
      }
    }, 3000);
  }, []);

  const saveItem = (array) => {
    localStorage.setItem(itemName, JSON.stringify(array));
    setItem(array);
  }

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export { useLocalStorage };