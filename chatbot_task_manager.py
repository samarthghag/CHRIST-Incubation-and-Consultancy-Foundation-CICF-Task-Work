import sys

def print_menu():
    print("\nTask Manager Chatbot")
    print("1. Add Task")
    print("2. Remove Task")
    print("3. List Tasks")
    print("4. Exit")

def main():
    tasks = []
    while True:
        print_menu()
        choice = input("Enter your choice (1-4): ").strip()
        if choice == '1':
            task = input("Enter the task to add: ").strip()
            if task:
                tasks.append(task)
                print(f'Added task: "{task}"')
            else:
                print("Task cannot be empty.")
        elif choice == '2':
            if not tasks:
                print("No tasks to remove.")
                continue
            for idx, t in enumerate(tasks, 1):
                print(f"{idx}. {t}")
            try:
                num = int(input("Enter the task number to remove: "))
                if 1 <= num <= len(tasks):
                    removed = tasks.pop(num - 1)
                    print(f'Removed task: "{removed}"')
                else:
                    print("Invalid task number.")
            except ValueError:
                print("Please enter a valid number.")
        elif choice == '3':
            if not tasks:
                print("No tasks in the list.")
            else:
                print("\nTasks:")
                for idx, t in enumerate(tasks, 1):
                    print(f"{idx}. {t}")
        elif choice == '4':
            print("Goodbye!")
            sys.exit(0)
        else:
            print("Invalid choice. Please enter a number from 1 to 4.")

if __name__ == "__main__":
    main() 