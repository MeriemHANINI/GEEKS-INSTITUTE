data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def run_quiz():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []
    
    for item in data:
        user_answer = input(item["question"] + " ")
        
        if user_answer.lower().strip() == item["answer"].lower():
            print("Correct!")
            correct_answers += 1
        else:
            print(f"Incorrect! The correct answer is: {item['answer']}")
            incorrect_answers += 1
            wrong_answers.append({
                "question": item["question"],
                "user_answer": user_answer,
                "correct_answer": item["answer"]
            })
    
    return correct_answers, incorrect_answers, wrong_answers

def display_results(correct, incorrect, wrong_answers):
    print(f"\nQuiz Results:")
    print(f"Correct answers: {correct}")
    print(f"Incorrect answers: {incorrect}")
    
    if wrong_answers:
        print("\nQuestions you answered wrong:")
        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your answer: {item['user_answer']}")
            print(f"Correct answer: {item['correct_answer']}\n")
    
    if incorrect > 3:
        play_again = input("You had more than 3 wrong answers. Would you like to play again? (yes/no): ")
        if play_again.lower() == "yes":
            main()

def main():
    print("Welcome to the Star Wars Quiz!")
    correct, incorrect, wrong_answers = run_quiz()
    display_results(correct, incorrect, wrong_answers)

# Start the quiz
main()