pao = 0.18
c = 1
for x in range (1, 51):
    if c == 1:
        print ("Preço do pão: R$ 0,18")
        print ("Panificadora Pão de Ontem - Tabela de Preços")
        c+=1
    print ('%d - R$ %.2f' % (x, pao*x))
