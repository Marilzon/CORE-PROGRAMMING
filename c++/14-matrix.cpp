#include <iostream>
using namespace std;

int main()
{
	int matrix[3][4];

	matrix[0][0] = 1;
	matrix[1][2] = 3;
	matrix[2][1] = 8;

	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 4; j++)
		{
			cout << matrix[i][j] << endl;
		}
	}
	return 0;
}
