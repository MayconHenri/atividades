final = int (input ("Digite um número: "))
list = []
i = 1
div = 0
while i<=final:
    num = 1
    cont = 0

    while i>=num :
        if i % num == 0:
            cont+=1
        div+=1
        num+=1

    if cont == 2:
        list.append(i)
    i+=1

print (f'Os números primos de 1 a {final} são: {list}')
print (f'Quantidade de divisões feitas para localiza-los: {div}')