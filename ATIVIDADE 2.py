#variaveis
PROGRAMA = 1
totalprodutosdia = []
qtdprodutosdia = 0
print ("Olá, como vai? Sentimos saudades. \n Informações importantes: \n   1 - Ao final de uma compra digite um número NEGATIVO para que o programa finalize totalmente e informe o apurado do dia; \n   2 - Digite a SENHA 9393 para finalizar uma compra ao solicitar o valor do produto. ")
while PROGRAMA>0:
    print ("-"*70)
    produtos = []
    k = 0
    #informar produtos
    num1 = 1
    while (k != 9393):
        k = float ((input(f' Digite o valor do produto {num1}: ')))
        num1 +=1
        produtos.append(k)

    #retirar item "9393" da lista
    c = 1
    if c == 1:
        qtd = len(produtos) - 1
        qtdprodutosdia+= qtd
        del produtos[qtd]
        c+=1

    #exibir itens da lista
    num=1
    print ("\nPRODUTOS:")
    for f in produtos:
        print (f'   -> Produto {num}: R$ {f}')
        num+=1

    #exibir valor total
    total = sum(produtos)
    totalprodutosdia.append(total)
    print (f'Total da compra: R$ {total}')
    print ("-"*70)

    #conferir troco
    g=1
    while g == 1:
        dinheiro = float(input("Valor fornecido pelo cliente: "))

        if dinheiro<total:
            print ("O valor fornecido é menor que o total da compra, informe novamente!")
        elif dinheiro == total:
            print ("Não haverá troco, valor pago completo!")
            g+=1
        elif dinheiro>total:
            troco = dinheiro - total
            print (f'Troco: R$ {troco}')
            g+=1

    #conferir outra compra
    print ("-"*70)
    PROGRAMA = int (input("Gostaria de realizar outra compra?\n   Sim? Digite 1\n   Não? Digite -1 \n   R: "))
    if PROGRAMA<0:
        break

print("-"*70)
somatotaldia = sum(totalprodutosdia) 
print (f'Total apurado do dia: \n   -> Valor de protudos vendidos: R$ {somatotaldia}\n   -> Quantidade de produtos vendidos: {qtdprodutosdia}')



