# binary search function
# left is first index of array
# right is last index of array 
# k is target value

def binary_search(arr, k) -> int:
    left = 0
    right = len(arr) - 1

    while left < right:
        center = int((left + right) / 2)

        if k > arr[center]:
            left = center + 1
        else:
            right = center

    if arr[left] == k:
        return left
    return -1


arr_target = [-4, 3, 6, 10, 12, 16, 17, 25, 29, 33, 35, 39, 41]

case_1 = binary_search(arr_target, 3)
case_2 = binary_search(arr_target, 12)
case_3 = binary_search(arr_target, 11)

print(case_1, case_2, case_3)
