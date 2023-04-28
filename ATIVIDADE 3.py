zoa = {0: "Macaco", 1: "Galo",2: "Cão",3: "Porco", 4:"Rato", 5: "Boi", 6: "Tigre", 7:"Coelho", 8:"Dragão", 9:"Serpente", 10:"Cavalo", 11: "Carneiro"}

anonasc = int (input("Ano de nascimento: "))

veri = anonasc % 12
print (zoa[veri])

