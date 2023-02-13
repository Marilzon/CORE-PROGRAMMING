#include <iostream>
using namespace std;

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
