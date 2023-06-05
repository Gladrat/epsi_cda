def afficher_puissance(x, y = 2):
    print(x**y)
 
def calculer_puissance(x, y: int | None = 2):
    return x**y

res = calculer_puissance(42)
print(res)

solde = -5

def decouv(solde):
    return (solde < 0)

a_decouvert = decouv(solde)

print(solde < 0)
print(a_decouvert)