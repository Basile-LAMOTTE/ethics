import os
import random
from PIL import Image

# Chemins vers les dossiers contenant les images
animal_folder = "cats"
emotion_folder = "dogs"
place_folder = "cats"
time_folder = "character-icons"

# Liste des options pour chaque catégorie
animals = os.listdir(animal_folder)
emotions = os.listdir(emotion_folder)
places = os.listdir(place_folder)
times = os.listdir(time_folder)

# Choix aléatoire des options
chosen_animal = random.choice(animals)
chosen_emotion = random.choice(emotions)
chosen_place = random.choice(places)
chosen_time = random.choice(times)

# Fonction pour charger une image et renvoyer une liste de pixels
def load_image(image_path, target_size):
    with Image.open(image_path) as img:
        img = img.resize(target_size)
        return list(img.getdata())

# Charger les images pour chaque catégorie et obtenir la taille cible
animal_img = Image.open(os.path.join(animal_folder, chosen_animal))
emotion_img = Image.open(os.path.join(emotion_folder, chosen_emotion))
place_img = Image.open(os.path.join(place_folder, chosen_place))
time_img = Image.open(os.path.join(time_folder, chosen_time))
target_size = animal_img.size

# Charger les pixels des images en les redimensionnant à la taille cible si nécessaire
animal_pixels = load_image(os.path.join(animal_folder, chosen_animal), target_size)
emotion_pixels = load_image(os.path.join(emotion_folder, chosen_emotion), target_size)
place_pixels = load_image(os.path.join(place_folder, chosen_place), target_size)
time_pixels = load_image(os.path.join(time_folder, chosen_time), target_size)

# Fusionner les pixels en utilisant la moyenne pondérée
def weighted_average(pixel_sets, weights):
    min_length = min(len(pixels) for pixels in pixel_sets)
    merged_pixels = []
    for i in range(min_length):
        merged_pixel = tuple(int(sum([pixels[i][j] * weights[j] for j in range(3)]) / sum(weights)) for pixels in pixel_sets)
        merged_pixels.append(merged_pixel)
    return merged_pixels

# Définir les poids pour chaque image
weights = [1, 2, 3, 1]

# mélanger de manière aléatoire le tableau weights
random.shuffle(weights)

# Fusionner les pixels en utilisant la moyenne pondérée
merged_pixels = weighted_average([animal_pixels, emotion_pixels, place_pixels, time_pixels], weights)

# Créer une nouvelle image avec les pixels fusionnés
new_image = Image.new("RGBA", target_size)
new_image.putdata(merged_pixels)

# Afficher ou sauvegarder l'image générée
# new_image.show()
new_image.save("images/image.png")
