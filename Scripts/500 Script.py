import glob
import shutil
import os
import itertools

#Output directory
out_dir = "MLpics/"

#list of folders
feature_list = ["Eyeglasses", "Wearing_Hat", "Wearing_Lipstick", "No_Beard"]

os.makedirs(out_dir)

for folder in feature_list:
    os.makedirs(out_dir + folder)
    for i in range(500):
        shutil.copy(folder, out_dir + folder)