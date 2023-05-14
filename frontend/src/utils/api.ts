export async function getAllPosts() {
  const response = await fetch("http://localhost:8000/posts", {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

export async function getPostById(id: string) {
  const response = await fetch(`http://localhost:8000/posts/${id}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}
