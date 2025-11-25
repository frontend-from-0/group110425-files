async function fetchData(url, params) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw Error('');
    }

    return await res.json();
  } catch (error) {
    // Add error mapping if you want
  }
}
