import random

questions = []

# Generate 50 addition questions
for _ in range(50):
    num1 = random.randint(1, 20)
    num2 = random.randint(1, 20)
    answer = num1 + num2
    question = f"{num1} + {num2} = ?"
    options = [str(answer), str(random.randint(1, 40)), str(random.randint(1, 40)), str(random.randint(1, 40))]
    random.shuffle(options)
    questions.append({
        "question": question,
        "options": options,
        "answer": str(answer)
    })

# Generate 50 multiplication questions
for _ in range(50):
    num1 = random.randint(1, 10)
    num2 = random.randint(1, 10)
    answer = num1 * num2
    question = f"{num1} x {num2} = ?"
    options = [str(answer), str(random.randint(1, 100)), str(random.randint(1, 100)), str(random.randint(1, 100))]
    random.shuffle(options)
    questions.append({
        "question": question,
        "options": options,
        "answer": str(answer)
    })

# Shuffle the questions to mix addition and multiplication
random.shuffle(questions)

# Print the generated questions
for idx, question in enumerate(questions, start=1):
   print(" {")
   print(f'    question: "{question["question"]}",')
   print(f'    options: {question["options"]},')
   print(f'    answer: "{question["answer"]}"')
   print("},")
   print()
    
