maior = -9999999999999999999999
menor = 99999999999999999999999
num = 0

while num>=0:
    num=int(input("Digite um número: "))

    if (num>maior):
        maior = num
    if (num<menor) and (num>=0):
        menor = num

print (f'O Maior número digitado foi: {maior}')
print (f'O Menor número digitado foi: {menor}')