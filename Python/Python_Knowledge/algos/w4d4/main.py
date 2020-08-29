
def r_binary_search(listy, val, start = 0, end = None):
    if end == None:
        end = len(listy) - 1
    mid = (end + start) // 2
    if listy[mid] == val:
        return True
    if start == mid or end == mid:
        return False
    if val < listy[mid]:
        return r_binary_search(listy, val, start, mid)
    if val > listy[mid]:
        return r_binary_search(listy, val, mid, end)



#             start     
#                  end   
r_binary_search([1, 2, 3, 4, 5], -1) 
#                  mid



def binarySearch(arr, val):
    first = 0
    last = 0
    last = len(arr) - 1
    missing = False
    while first <= last and not missing:
        mid = (first + last)//2
        if val == arr[mid]:
            missing = True
        elif val < arr[mid]:
            last = mid - 1
        elif val > mid:
            first = mid + 1
    return missing

print(binarySearch([1,2,3,4,5,6,7,8], 2))



