def binary_search(arr, k) -> int:
    """
    binary search algorithm function
    
    :param arr: input integer array
    :param k: searched value to binary algorithm
    :return: integer value searched or return -1
    """
    left = 0
    right = len(arr) - 1

    while left < right:
        center = int((left + right) / 2)

        if k > arr[center]:
            left = center + 1
        else:
            right = center

    # Check if element is found at left index after loop
    if arr[left] == k:
        return left
    # Not found, return -1 (ensure this line is indented)
    else:
        return -1


arr_target = [-4, 3, 6, 10, 12, 16, 17, 25, 29, 33, 35, 39, 41]

case_1 = binary_search(arr_target, 3)
case_2 = binary_search(arr_target, 12)
case_3 = binary_search(arr_target, 11)

print(case_1, case_2, case_3)
