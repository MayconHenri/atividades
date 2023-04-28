#usando FOR
for i in range (1000, 0,-1):
    if (i%3==0) and (i%5==0):
        print (i)

#usando WHILE
i = 1000
while i>=1:
    if (i%3==0) and (i%5==0):
       print (i)
    i-=1
    