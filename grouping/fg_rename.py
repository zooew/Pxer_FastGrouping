import os
import re
import json
lf = open("./final_list.json", "r", encoding="utf8")
lj = json.load(lf)
i = 0
WORK_DIR = "F:/fun/ereri/shili_pivix/"
# for id in lj:
#     if not os.path.exists(WORK_DIR+id):
#         os.mkdir(WORK_DIR+id)

for id in lj:
    new_dir = ''
    if not "series_title" in lj[id].keys():
        print("no serie")
        print(id)
        print(i)
    else:
        new_dir += (lj[id]["series_title"] + '_')
    new_dir += lj[id]["title"]
    new_dir = re.sub('[\/*?"<>|]', '-', new_dir)
    if not os.path.exists(WORK_DIR+id):
        continue
    os.rename(WORK_DIR+id, WORK_DIR+new_dir)