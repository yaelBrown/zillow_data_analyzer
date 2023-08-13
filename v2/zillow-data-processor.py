import json

data = json.load(open('data.json'))
data = data["cat1"]["searchResults"]["mapResults"]

temp = []

deviation = 140.6080347448426

for i in data:
  try: 
    if i["hdpData"]["homeInfo"]["rentZestimate"]:
      i["yd"] = i["hdpData"]["homeInfo"]["rentZestimate"] - (int(i["price"][1:].replace(",","")) / deviation)
      i["ydZestimate"] = i["hdpData"]["homeInfo"]["rentZestimate"]
      temp.append(i)
  except: 
    continue

print(len(temp))

for i in range(len(temp)):
  if temp[i]["ydZestimate"] > 2900:
    print(f'{temp[i]["address"]} \n{temp[i]["yd"]} \n{temp[i]["price"]} \n{temp[i]["ydZestimate"]} \nhttps://www.zillow.com{temp[i]["detailUrl"]} \n' )


print(len(temp))