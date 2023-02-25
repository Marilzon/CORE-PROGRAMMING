#include <iostream>
#include <vector>
using namespace std;

int main () {
	vector<int> vect = {1, 2, 3, 4, 5, 6, 7, 8, 9};

	for (int index = 0; index < vect.size(); index++)
	{
		cout << vect[index] << endl;
	}
	return 0;
}
