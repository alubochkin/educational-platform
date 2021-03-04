export async function fetchMethod({ path, method, body }) {
  const response = await fetch(path, {
    method,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    const message = await response.json();
    return ({
      error: `Error ${response.status}: ${response.statusText}`,
      status: response.status,
      message,
    });
  }
  return response.json();
}
