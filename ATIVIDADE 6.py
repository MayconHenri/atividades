valor=int(input("Digite o valor a ser pago: "))

c100 = c50 = c20 = c10 = c5 = c1 = 0

while(valor>=100):
    valor -=100
    c100 +=1
while (valor>=50):
    valor -=50
    c50 +=1
while (valor>=20):
    valor -=20
    c20 +=1
while (valor>=10):
    valor -=10
    c10 +=1
while (valor>=5):
    valor -=5
    c5 +=1
while (valor>=1): 
    valor -=1
    c1 +=1   

total = c100+c50+c20+c10+c5+c1
print (f"Serão necessárias {total} cédulas no total, elas são:")

if(c100>=1):
    print (f'({c100}) de R$100,00')
if(c50>=1):
    print (f'({c50}) de R$50,00')
if(c20>=1):
    print (f'({c20}) de R$20,00')
if(c10>=1):
    print (f'({c10}) de R$10,00')
if(c5>=1):
    print (f'({c5}) de R$5,00')
if(c1>=1):
    print (f'({c1}) de R$1,00')