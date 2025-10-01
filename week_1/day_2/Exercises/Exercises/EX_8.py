data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def quiz():
    correct = 0
    wrong_answers = []
    for q in data:
        ans = input(q["question"] + " ")
        if ans.strip().lower() == q["answer"].lower():
            correct += 1
        else:
            wrong_answers.append({"question": q["question"], "your_answer": ans, "correct_answer": q["answer"]})
    
    print(f"You got {correct} correct and {len(wrong_answers)} wrong.")
    
    if wrong_answers:
        print("Here are the wrong answers:")
        for w in wrong_answers:
            print(f"Question: {w['question']}\nYour answer: {w['your_answer']}\nCorrect answer: {w['correct_answer']}\n")
    
    if len(wrong_answers) > 3:
        print("You had more than 3 wrong answers. Try again!")

quiz()
