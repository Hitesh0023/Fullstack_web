n= int(input("Enter the nuber : "))
even_count= 0
odd_count = 0
while n>0:
    digit = n%10
    if digit % 2 == 0:
        even_count +=1
    else:
        odd_count +=1
    n//=10
print("Even count : ",even_count)
print("Odd count : ",odd_count)
