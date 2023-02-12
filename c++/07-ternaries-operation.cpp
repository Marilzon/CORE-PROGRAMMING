#include <iostream>
#include <string>

using namespace std;

int getMax(int x, int y)
{
	return (x > y ? x : y);
}

int main()
{
	int a, b;
	cout << "input the value of x: " << endl;
	cin >> a;
	cout << "input the value of y: " << endl;
	cin >> b;

	int max = getMax(a, b);

	cout << "max value is " << max;
	return 0;
}
