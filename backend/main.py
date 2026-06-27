from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="PlantEasy API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Plant(BaseModel):
    name: str
    watering: str
    sunlight: str
    soil: str

# Temporary in-memory database
plants = [
    {
        "id": 1,
        "name": "Basil",
        "watering": "Every 2 days",
        "sunlight": "6-8 hours",
        "soil": "Well-drained"
    },
    {
        "id": 2,
        "name": "Tomato",
        "watering": "Daily",
        "sunlight": "Full Sun",
        "soil": "Rich Organic Soil"
    },
    {
        "id": 3,
        "name": "Mint",
        "watering": "Every 2 days",
        "sunlight": "Partial Sun",
        "soil": "Moist Soil"
    }
]


@app.get("/")
def root():
    return {
        "message": "Welcome to PlantEasy API 🌱",
        "status": "Running"
    }


@app.get("/plants")
def get_plants():
    return plants

@app.get("/plants/search")
def search_plants(q: str = Query(..., description="Search by plant name")):

    results = []

    for plant in plants:
        if q.lower() in plant["name"].lower():
            results.append(plant)

    return results


@app.get("/plants/{plant_id}")
def get_plant(plant_id: int):

    for plant in plants:
        if plant["id"] == plant_id:
            return plant

    raise HTTPException(
        status_code=404,
        detail="Plant not found"
    )

@app.post("/plants", status_code=201)
def add_plant(plant: Plant):

    new_plant = {
        "id": len(plants) + 1,
        "name": plant.name,
        "watering": plant.watering,
        "sunlight": plant.sunlight,
        "soil": plant.soil,
    }

    plants.append(new_plant)

    return new_plant

@app.put("/plants/{plant_id}")
def update_plant(plant_id: int, updated_plant: Plant):

    for plant in plants:
        if plant["id"] == plant_id:
            plant["name"] = updated_plant.name
            plant["watering"] = updated_plant.watering
            plant["sunlight"] = updated_plant.sunlight
            plant["soil"] = updated_plant.soil

            return plant

    raise HTTPException(
        status_code=404,
        detail="Plant not found"
    )

@app.delete("/plants/{plant_id}", status_code=204)
def delete_plant(plant_id: int):

    for plant in plants:
        if plant["id"] == plant_id:
            plants.remove(plant)
            return

    raise HTTPException(
        status_code=404,
        detail="Plant not found"
    )