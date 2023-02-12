#include <iostream>
#include <string>
using namespace std;

int main()
{
	string name;
	int age;
	int minimumAge = 12;

	cout << "Input your name: " << endl;
	getline(cin, name);

	if (name.empty())
	{
		cout << "name field empty, finishing program!";
		return 0;
	}
	else
	{
		cout << "Input your age: " << endl;
		cin >> age;
	}

	if (age >= minimumAge)
	{
		cout << name << " can sign-in authorized";
	}
	else
	{
		cout << name << " sign-in age minimum rejected!, {12}";
		return 0;
	}

	return 1;
}
