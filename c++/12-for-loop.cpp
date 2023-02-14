#include <iostream>
#include <vector>
using namespace std;

int main()
{
	vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9};

	for (int index = 0; index < numbers.size(); index++)
	{
		cout << numbers[index] << endl;
	}

	return 0;
}
