const useLocalStorage = () => {
    const getItem = (key) => localStorage.getItem(key);
    const setItem = (key, value) => localStorage.setItem(key, value);
    const removeItem = (key) => localStorage.removeItem(key);
    const clearStorage = () => localStorage.clear();
  
    return {
      clearStorage,
      getItem,
      removeItem,
      setItem
    };
  };
  
  export default useLocalStorage;
  