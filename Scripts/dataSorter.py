import csv
import glob
import shutil
import os
import itertools

#Input dir where unsorted pics are
src_dir = "pics/"
#Output directory for sorted pics
out_dir = "sortedPics/"

#Add feature you want in this dictionary (must correspond with CSV column)
feature_dict = {
    "Eyeglasses": None,
    "Wearing_Hat": None,
    "Wearing_Lipstick": None,
    "No_Beard": None,
    "Bald":None
}

os.makedirs(out_dir)

#Make folders for every feature
for i in feature_dict:
    os.makedirs(out_dir + str(i))

with open('list_attr_celeba.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line = 0
    for row in csv_reader:
        if line == 0:
            print(f'Column names are {", ".join(row)}')
            #Populate dictionary with indicee
            for ftr in feature_dict:
                feature_dict[ftr] = row.index(ftr)
            print(feature_dict)
            line += 1
        else:
            for ftr in feature_dict:
                #Copy pictures from src_dir to corresponding output folder (note no_beard is reversed since we want pics of beards)
                if(ftr != "No_Beard"):
                    if(row[feature_dict.get(ftr)] == '1'):
                        shutil.copy(src_dir + str(row[0]), out_dir + str(ftr))
                else:
                    if(row[feature_dict.get(ftr)] == '-1'):
                        shutil.copy(src_dir + str(row[0]), out_dir + str(ftr))
                           
            line += 1
    print(f'Processed {line} lines.')
