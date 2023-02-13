#include <iostream>
using namespace std;

/**
 * The function prints the message "hello, Developer!" to the console
 *
 * @param message The message to print.
 * @param index The index of the character in the string that we want to print.
 *
 * @return Nothing
 */

void print(const char *message, int index)
{
	if (message[index] == '\0')
	{
		cout << endl;
		return;
	}

	cout << message[index];
	print(message, index + 1);
}

int main()
{
	print("hello, Developer!", 0);
	return 0;
}
