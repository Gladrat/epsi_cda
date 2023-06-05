list()
liste_notes = list()
liste_notes = []
print(liste_notes)

# Listes
liste_notes = [12.0, 13.5, 14.0, 17.0, 18.5]
print(liste_notes[4])
liste_notes.append(20)
print(liste_notes[0])
print(liste_notes[len(liste_notes) - 1])
print(liste_notes)

chaine = "Jusqu'ici tout va bien"



#   -7      -6      -5    -4    -3      -2     -1
# ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"]
#   0       1       2     3     4       5       6

jours = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"]
print(jours[6])
print(jours[-7])

# Slicing

print(jours)
lun_mar = jours[0:2]
print(lun_mar)
print(jours[0:7])
print(jours[5:7])
print(jours[4:5])

print(jours[5:][0])

image = [
    [0, 0, 0], 
    [123, 156, 255], 
    [255, 255, 255], 
    [255, 255, 255]
]

print(image[2][1])

print(jours[5:])
print(jours[-2:])
print(jours[:])

jours = [
    ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"],
    ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
]

print(jours[0][-2:])
print(jours[1][-2:])

print(jours[1][-2][-1])

jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
print(jours[4][0:3])