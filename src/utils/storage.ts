export const setAuthUserId = (userId: string) => {
localStorage.setItem('authUserId', userId);
};

export const getAuthUserId = (): string | null => {
return localStorage.getItem('authUserId'); 
};

export const clearAuthUserId = () => {
localStorage.removeItem('authUserId'); 
};
  