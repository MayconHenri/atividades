num=int(input("Digite o número para ser calculado o fatorial: "))

r = 1
i = 1

while i<=num:
    r *= i
    i+=1

print (f'O número em fatorial é: {r}')