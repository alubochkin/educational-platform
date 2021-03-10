export async function fetchMethod({ path, method, body }) {
  const response = await fetch(path, {
    method,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  if (!response.ok) {
    const message = await response.json();
    return ({
      error: `Error ${response.status}: ${response.statusText}`,
      status: response.status,
      message,
    });
  }
  const result = await response.json();
  return result;
}

export async function fetchGet({ path }) {
  const response = await fetch(path);

  if (!response.ok) {
    const message = await response.json();
    return ({
      error: `Error ${response.status}: ${response.statusText}`,
      status: response.status,
      message,
    });
  }
  const result = await response.json();
  return result;
}
