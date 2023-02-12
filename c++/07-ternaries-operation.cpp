#include <iostream>
#include <string>

using namespace std;

int main()
{
	int value = 13;
	char response;

	cout << (value > 50 ? to_string(value) + "higher than 50" : to_string(value) + " smaller than 50") << endl;

	return 0;
}
