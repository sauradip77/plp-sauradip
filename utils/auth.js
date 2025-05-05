export const saveUser = (user) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };
  
  export const getUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return users.find((u) => u.email === email && u.password === password);
  };
  
  export const setSession = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  };
  
  export const getSession = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };
  
  export const logout = () => {
    localStorage.removeItem("currentUser");
  };  