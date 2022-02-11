export default function authHeader() {
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  console.log(tokens);
  if (tokens && tokens.token) {
    return { headers: { Authorization: `Bearer ${tokens.token}` } };
  }
  return {};
}
