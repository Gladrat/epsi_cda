# voiture
    # couleur
    # vitesse max
    # toit ouvrant
    
def coucou_ma_fonction():
    pass
    
#classe
class Voiture:
    
    # constructeur
    def __init__(self):
        self.couleur = "rouge"
        print("Création d'une voiture")
    
    def __str__(self):
        pass
    
    # revoir les variables globales & locales
    
    def demarrer(self):
        print(f"Ma couleur est : {self.couleur}")

__name__

#objet
ma_voiture = Voiture()
ta_voiture = Voiture()

ma_voiture.demarrer()

print(ma_voiture)