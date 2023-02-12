#include <iostream>
using namespace std;

#define PI 3.1415;
#define intro cout << "Hello! \n";

string author = "Marilzon";

int main() {
	int health = 100, gun = 30, speed = 32;
	intro;

	cout << "The author of code is: " << author << "\n\n";
	cout << " He has a: " << health + speed << " Of Health and " << gun << " Gun shots";
	return 1;
}
