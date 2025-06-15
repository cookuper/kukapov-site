const API_URL = "http://85.192.63.163:5000";

async function register(username, email, password) {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    });

    return await res.json();
  } catch (err) {
    return { message: "Ошибка сети при регистрации" };
  }
}

async function verify(email, code) {
  try {
    const res = await fetch(`${API_URL}/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code })
    });

    return await res.json();
  } catch (err) {
    return { message: "Ошибка сети при верификации" };
  }
}

async function login(email, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
    }

    return data;
  } catch (err) {
    return { message: "Ошибка сети при входе" };
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  location.reload();
}

function isLoggedIn() {
  return localStorage.getItem("token") !== null;
}

function getUsername() {
  return localStorage.getItem("username");
}
