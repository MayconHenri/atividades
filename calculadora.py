i=1

while i == 1:
    
    print ("-"*80)
    cont=int(input("Digite qual operação matemática deseja realizar: \n[1] - SOMA \n[2] - SUBTRAÇÃO \n[3] - DIVISÃO \n[4] - MULTIPLICAÇÃO \nR: "))

    if cont == 1:
        n1 = int(input("Digite o primeiro número para ser somado: "))
        n2 = int(input("Digite o segundo número para ser somado: "))
        resultado = n1 + n2
        print ("O valor da soma é %d" %resultado)
        print ("-"*80)
    elif cont == 2:
        n1 = int(input("Digite o primeiro número para ser subtraido: "))
        n2 = int(input("Digite o segundo número para ser subtraido: "))
        resultado = n1 - n2
        print ("O valor da subtração é %d" %resultado)
        print ("-"*80)
    elif cont == 3:
        n1 = int(input("Digite o primeiro número para ser divido: "))
        n2 = int(input("Digite o segundo número para ser divido: "))
        resultado = n1 / n2
        print ("O valor da divisão é %d" %resultado)
        print ("-"*80)
    elif cont == 4:
        n1 = int(input("Digite o primeiro número para ser multiplicado: "))
        n2 = int(input("Digite o segundo número para ser multiplicado: "))
        resultado = n1 * n2
        print ("O valor da multiplicação é %d" %resultado)
        print ("-"*80)
    else:
        i = 1
        print ("Operação inválida, tente novamente")
        print ("-"*80)

    i=int(input("Deseja fazer outra operação? \n [1] - SIM \n [2] - NÃO \nR: "))

    if i == 2:
        print("Fim do programa, volte sempre!")
        break


    
