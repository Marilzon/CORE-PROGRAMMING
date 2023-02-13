#include <iostream>

using namespace std;

int main()
{
	int value;
	cout << "input the value(from 1 to 3)" << endl;
	cin >> value;

	switch (value)
	{
	case 1:
		cout << "You're is a number oneee!";
		break;
	case 2:
		cout << "Hellow Bro, do you wanna a ballons?" << endl;
		break;
	case 3:
		cout << "C++ Developers are a robots or homans?!" << endl;
		break;
	default:
		cout << "Wrong entry!, you're crazyyyyyyyyyyyyyyyyy? hahahah";
	}

	return 0;
}
