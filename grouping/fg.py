import os
import shutil
import json
lf = open("./final_list.json", "r", encoding="utf8")
lj = json.load(lf)
i = 0
WORK_DIR = "F:/fun/ereri/shili_pivix/"
for id in lj:
    if not os.path.exists(WORK_DIR+id):
        os.mkdir(WORK_DIR+id)
def getFileList(p):
    p = str(p)

    if p == "":
        return []

    p = p.replace("/", "\\")

    if p[-1] != "\\":
        p = p + "\\"

    a = os.listdir(p)

    b = [x for x in a if os.path.isfile(p + x)]

    return b

filelist = getFileList(WORK_DIR)
for id in lj:
    for filename in filelist:
        if filename.find(id) > -1:
            shutil.move(WORK_DIR+filename, WORK_DIR+id+'/'+filename)
            #filelist.remove(filename)