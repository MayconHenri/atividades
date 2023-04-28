n1 = int(input("Digite o número inteiro: "))
i=1
soma = 0

#usando FOR
for i in range (i, n1):
    if (n1%i==0):
        soma += i
    i+=1
print (f'A soma dos números divido por {n1} é {soma}')

#usando WHILE
while n1>i:
   
    if (n1%i==0):
        soma += i
    i+=1
print (f'A soma dos números divido por {n1} é {soma}')




