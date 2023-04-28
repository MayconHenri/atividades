num = int(input("Digite o número para ser verificado: "))
i = 1
cont = 0

while i<=num:
    if(num%i==0):
        cont +=1
    i+=1

if (cont==2):
    print (f"O número {num} é primo")
else:
    print (f"O número {num} não é primo")
    
