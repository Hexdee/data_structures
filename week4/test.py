# Define the dictionary of words
word_dict = ["apple", "banana", "cherry", "orange", "peach", "pear"]

# Ask the user to enter a string of alphabets
user_input = input("Enter a string of alphabets: ")

# Convert the string to a list of characters
char_list = list(user_input)

# Initialize an empty list to store the valid words that can be formed
valid_words = []

# Initialize a string to store the unused letters
unused_letters = ""

# Loop through each word in the dictionary
for word in word_dict:
    # Initialize a copy of the character list for each word
    temp_list = char_list.copy()
    # Loop through each character in the word
    for char in word:
        # If a character is found in the list of characters entered by the user, remove it from the list
        if char in temp_list:
            temp_list.remove(char)
        # If the list of characters becomes empty, add the word to the list of valid words
        if not temp_list:
            valid_words.append(word)
            break
    # If the list of characters is not empty after looping through all the characters of the word, add the unused characters to the string of unused letters
    else:
        unused_letters += "".join(temp_list)

# Print the list of valid words and the string of unused letters
print("Valid words:", valid_words)
print("Unused letters:", unused_letters)

