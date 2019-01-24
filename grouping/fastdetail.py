import json
import re
lf = open("./final_list.json", "r", encoding="utf8")
lj = json.load(lf)
i = 0
WORK_DIR = "F:/fun/ereri/shili_pivix/"
for id in lj:
    title = lj[id]['title']+'.txt'
    fileName = re.sub('[\/*?"<>|]', '-', title)
    detailf = open(WORK_DIR+id+'/'+fileName, 'wt', encoding="utf8")
    detailf.write("url : "+lj[id]["url"]+"\n")
    detailf.write("illust_id : "+lj[id]["illust_id"]+"\n")

    if not "series_title" in lj[id].keys():
        print("no serie")
        print(id)
        print(i)
    else:
        detailf.write("series_title : "+lj[id]["series_title"]+"\n")

    detailf.write("title : "+lj[id]["title"]+"\n")

    if not "detail" in lj[id].keys():
        print(id)
        print(i)
        i+=1
    else:
        detailf.write("detail : "+lj[id]["detail"]+"\n")
    detailf.close()