import json
from pathlib import Path

PROGRESS_FILE = Path("data/student_progress.json")

def load_progress():
    if PROGRESS_FILE.exists():
        with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def save_progress(student_id, data):
    progress = load_progress()
    progress[student_id] = data
    with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
        json.dump(progress, f, ensure_ascii=False, indent=2)
