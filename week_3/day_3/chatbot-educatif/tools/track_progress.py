from models.student_progress import load_progress, save_progress

def track_progress(student_id: str, topic: str, score: int):
    data = load_progress()
    student_data = data.get(student_id, {"topics": {}})
    student_data["topics"][topic] = score
    save_progress(student_id, student_data)
    return {"message": "Progression enregistrée avec succès", "student_data": student_data}
