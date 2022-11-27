export default async function fetcher(url: string) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response?.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
