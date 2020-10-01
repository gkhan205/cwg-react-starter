export const saveToStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const fetchFromStorage = key => {
  return JSON.parse(sessionStorage.getItem(key));
};

export const removeFromStorage = key => {
  sessionStorage.removeItem(key);
};

export const clearStorage = () => {
  sessionStorage.clear();
};
