divisor = dividendo = 1
soma = 0

while divisor < 99:
    soma += (divisor / dividendo)
    divisor += 1
    dividendo += 2

print ("O valor de S é %.2f" %(soma))
