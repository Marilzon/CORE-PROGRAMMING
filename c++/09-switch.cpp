#include <iostream>
using namespace std;

int main () {
	int i = 1;
	string trace = "-";
	string message = "counting: ";

	while (i <= 5) {
		cout << message << trace << i << endl;
		i++;
		trace += trace;
	}

	return 0;
}
