const API_URL = "http://85.192.63.163:5000";

async function register(username, email, password) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  });

  return res.json();
}

async function verify(email, code) {
  const res = await fetch(`${API_URL}/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code })
  });

  return res.json();
}

async function login(email, password) {
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
