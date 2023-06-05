# Ceci est un commentaire
print("Hello world !")

# Variables
x = 42
y = 42.5
phrase = "Le python c'est fantastique !"

x = x + 1
x += 1
x *= 10

print(x)
print(x)
print(x)
print(x)

faux = True
vrai = False

print(faux)

x = 20
y = 3
print(x // y)
print(x % y)

chaine = "Python"
chaine += " v3.11"

print(chaine*3)

# f-strings
version = 3.11

# print("Python est en version " + version)
print(f"Python est en version {round(version + 0.01, 2)}")

print(round(3.14, 2))

print(type(chaine))
print(type(version))

saisie = input("Saisissez un nombre...")
print(saisie)
print(type(saisie))
# int
# str
# float
# bool
saisie = int(saisie)
print(saisie + 1)
saisie = saisie + 1
saisie = str(saisie)