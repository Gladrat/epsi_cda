# structures conditionnelles (le si)

# age = int(input("Veuillez saisir votre age"))
age = 18

if (age > 0) and (age < 18):
    print("Statut enfant")
elif (age >= 18) and (age < 70):
    print("Statut adulte")
else:
    print("Statut senior")

# structures iteratives (la boucle)

# i = 0
# while i < 100:
#     i += 1
#     print(i**2)
    
# i = 1
# while i <= 100:
#     print(i**2)
#     i += 1
    
jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

for j in jours:
    print(j)
    print(j[:3])

for i in range(0, len(jours)):
    print(i, jours[i][:3], sep=" -> ")

i = list(range(0, 100))
print(i)
  
# for i in range(0, 101, 2):
#     print(i**2)

jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
voyelles = ['a', 'e', 'i', 'o', 'u', 'y']

lundi = "lundi"
for lettre in lundi:
    print(lettre)

for j in jours:
    print(f"Le jour {j} est composé de: ")
    for lettre in j:
        if (not lettre in voyelles):
            print(lettre)
    
result = [lettre for j in jours for lettre in j if lettre not in voyelles]
print(result)

# print([i**2 for i in range(0, 101) if i % 2 == 0])

# for mouton in range(999, 0, -2):
#     print(mouton)
    
# print(list(range(0, 999, 2)))