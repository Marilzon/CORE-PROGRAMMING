#include <iostream>

using namespace std;

int main() {
	char message[] = "hello, Developer!";
	char *pointer = message;

	while (*pointer) {
		cout << *pointer;
		pointer++;
	}

	cout << endl;
    return 0;
}
