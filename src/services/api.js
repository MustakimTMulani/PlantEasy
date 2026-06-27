const API_URL = "http://127.0.0.1:8000";

export async function getPlants() {
  const response = await fetch(`${API_URL}/plants`);

  if (!response.ok) {
    throw new Error("Failed to fetch plants");
  }

  return response.json();
}

export async function getPlant(id) {
  const response = await fetch(`${API_URL}/plants/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch plant");
  }

  return response.json();
}