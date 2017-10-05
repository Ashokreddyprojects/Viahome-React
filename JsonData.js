

//MTSPData


var  MTSPData=[
 {
   "Area_Name": "Montgomery, AL MSA",
   "Median_Income_2017": 1492.52,
   "Person_1": 627,
   "People_2": 717,
   "People_3": 807,
   "People_4": 895.5,
   "People_5": 967.5,
   "People_6": 1039.5,
   "People_7": 1111.5,
   "People_8": 1183.5,
   "State": "AL"
  
 },
 {
   "Area_Name": "Daphne-Fairhope-Foley, AL MSA",
   "Median_Income_2017": 1537.5,
   "Person_1": 646.5,
   "People_2": 738,
   "People_3": 831,
   "People_4": 922.5,
   "People_5": 997.5,
   "People_6": 1071,
   "People_7": 1144.5,
   "People_8": 1218,
   "State": "AL"
  
 },
 {
   "Area_Name": "Barbour County, AL",
   "Median_Income_2017": 1152.5,
   "Person_1": 484.5,
   "People_2": 553.5,
   "People_3": 622.5,
   "People_4": 691.5,
   "People_5": 747,
   "People_6": 802.5,
   "People_7": 858,
   "People_8": 913.5,
   "State": "AL"
  
 },
 {
   "Area_Name": "Birmingham-Hoover, AL HUD Metro FMR Area",
   "Median_Income_2017": 1577.5,
   "Person_1": 663,
   "People_2": 757.5,
   "People_3": 852,
   "People_4": 946.5,
   "People_5": 1023,
   "People_6": 1098,
   "People_7": 1174.5,
   "People_8": 1249.5,
   "State": "AL"
  
 },
 {
   "Area_Name": "Birmingham-Hoover, AL HUD Metro FMR Area",
   "Median_Income_2017": 1577.5,
   "Person_1": 663,
   "People_2": 757.5,
   "People_3": 852,
   "People_4": 946.5,
   "People_5": 1023,
   "People_6": 1098,
   "People_7": 1174.5,
   "People_8": 1249.5,
   "State": "AL"
  
 },
 {
   "Area_Name": "Bullock County, AL",
   "Median_Income_2017": 1152.5,
   "Person_1": 484.5,
   "People_2": 553.5,
   "People_3": 622.5,
   "People_4": 691.5,
   "People_5": 747,
   "People_6": 802.5,
   "People_7": 858,
   "People_8": 913.5,
   "State": "AL"
  
 }
]



//Median Income

var medianIncome =[
 {
   "Area_Name": "Montgomery, AL MSA",
   "Median_Income_2017": "59,700.00",
   "Person_1": "25,080.00",
   "Person_2": "28,680.00",
   "Person_3": "32,280.00",
   "Person_4": "35,820.00",
   "Person_5": "38,700.00",
   "Person_6": "41,580.00",
   "Person_7": "44,460.00",
   "Person_8": "47,340.00"
 },
 {
   "Area_Name": "Daphne-Fairhope-Foley, AL MSA",
   "Median_Income_2017": "61,500.00",
   "Person_1": "25,860.00",
   "Person_2": "29,520.00",
   "Person_3": "33,240.00",
   "Person_4": "36,900.00",
   "Person_5": "39,900.00",
   "Person_6": "42,840.00",
   "Person_7": "45,780.00",
   "Person_8": "48,720.00"
 },
 {
   "Area_Name": "Barbour County, AL",
   "Median_Income_2017": "46,100.00",
   "Person_1": "19,380.00",
   "Person_2": "22,140.00",
   "Person_3": "24,900.00",
   "Person_4": "27,660.00",
   "Person_5": "29,880.00",
   "Person_6": "32,100.00",
   "Person_7": "34,320.00",
   "Person_8": "36,540.00"
 },
 {
   "Area_Name": "Birmingham-Hoover, AL HUD Metro FMR Area",
   "Median_Income_2017": "63,100.00",
   "Person_1": "26,520.00",
   "Person_2": "30,300.00",
   "Person_3": "34,080.00",
   "Person_4": "37,860.00",
   "Person_5": "40,920.00",
   "Person_6": "43,920.00",
   "Person_7": "46,980.00",
   "Person_8": "49,980.00"
 }
]

// Rc Assumption
var rcAssumptions=[
    {
        "key_id": "59ba78b394cd9f02642fa4d3",
        "type": "Demolition",
        "Repair_Level": "Gut",
        "price": 3,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4d4",
        "type": "Demolition",
        "Repair_Level": "Substantial",
        "price": 1.5,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4d5",
        "type": "Demolition",
        "Repair_Level": "Moderate",
        "price": 0,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4d6",
        "type": "Demolition",
        "Repair_Level": "Limited",
        "price": 0,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4d7",
        "type": "Heating",
        "Repair_Level": "Individual Apt Heat / AC",
        "price": 7000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4d8",
        "type": "Heating",
        "Repair_Level": "Individual Apt Heat",
        "price": 4500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4d9",
        "type": "Heating",
        "Repair_Level": "Replace Steam Boiler",
        "price": 1500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4da",
        "type": "Heating",
        "Repair_Level": "Minor Repair",
        "price": 500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4db",
        "type": "Interior",
        "Repair_Level": "Gut",
        "price": 4000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4dc",
        "type": "Interior",
        "Repair_Level": "Substantial",
        "price": 2500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4dd",
        "type": "Interior",
        "Repair_Level": "Moderate",
        "price": 1000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4de",
        "type": "Interior",
        "Repair_Level": "Limited",
        "price": 500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4df",
        "type": "Roof",
        "Repair_Level": "Tear-Off w/ Insulation",
        "price": 9,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e0",
        "type": "Roof",
        "Repair_Level": "Re-Roof w/ Insulation",
        "price": 6,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e1",
        "type": "Roof",
        "Repair_Level": "Tear-Off w/o Insulation",
        "price": 7.5,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e2",
        "type": "Roof",
        "Repair_Level": "Re-Roof w/o Insulation",
        "price": 4.5,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e3",
        "type": "Hot Water",
        "Repair_Level": "Gut",
        "price": 6500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e4",
        "type": "Hot Water",
        "Repair_Level": "Substantial",
        "price": 4000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e5",
        "type": "Hot Water",
        "Repair_Level": "Moderate",
        "price": 2000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e6",
        "type": "Hot Water",
        "Repair_Level": "Limited",
        "price": 500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e7",
        "type":"Overall Ballpark",
        "Repair_Level": "Gut",
        "price": 60,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e8",
        "type":"Overall Ballpark",
        "Repair_Level": "Substantial",
        "price": 40,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4e9",
        "type":"Overall Ballpark",
        "Repair_Level": "Moderate",
        "price": 30,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4ea",
        "type":"Overall Ballpark",
        "Repair_Level": "Limited",
        "price": 10,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4eb",
        "type":"Overall Ballpark",
        "Repair_Level": "No Renovation",
        "price": 0,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4ec",
        "type":"Overall Ballpark",
        "Repair_Level": "New Construction",
        "price": 150,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4ed",
        "type":"Window Estimate",
        "Repair_Level": "Gut",
        "price": 300,
		"value": "80"
    },
    {
        "key_id": "59ba78b394cd9f02642fa4ee",
        "type":"Window Estimate",
        "Repair_Level": "Substantial",
        "price": 150,
		"value": "-"
    },
    {
        "key_id": "59ba78b394cd9f02642fa4ef",
        "type":"Window Estimate",
        "Repair_Level": "Moderate",
        "price": 100,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f0",
        "type":"Window Estimate",
        "Repair_Level": "Limited",
        "price": 50,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f1",
        "type": "Electric",
        "Repair_Level": "Gut",
        "price": 6000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f2",
        "type": "Electric",
        "Repair_Level": "Substantial",
        "price": 2000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f3",
        "type": "Electric",
        "Repair_Level": "Moderate",
        "price": 1000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f4",
        "type": "Electric",
        "Repair_Level": "Limited",
        "price": 500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f5",
        "type": "Con. Interest",
        "Repair_Level": 8,
        "price": 22176,
		"value": "LTC"
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f6",
        "type": "Con. Interest",
        "Repair_Level": 10,
        "price": 27720,
		"value": "90"
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f7",
        "type": "Con. Interest",
        "Repair_Level": 15,
        "price": 41580,
		"value": "Draw"
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f8",
        "type": "Con. Interest",
        "Repair_Level": 18,
        "price": 49896,
		"value": "80"
    },
    {
        "key_id": "59ba78b394cd9f02642fa4f9",
        "type": "Entryway",
        "Repair_Level": "Replace High",
        "price": 2500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4fa",
        "type": "Entryway",
        "Repair_Level": "Replace Med",
        "price": 1500,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4fb",
        "type": "Entryway",
        "Repair_Level": "Replace Low",
        "price": 1000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4fc",
        "type": "Entryway",
        "Repair_Level": "None",
        "price": 4.5,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4fd",
        "type": "Plumbing",
        "Repair_Level": "Gut",
        "price": 12000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4fe",
        "type": "Plumbing",
        "Repair_Level": "Substantial",
        "price": 8000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa4ff",
        "type": "Plumbing",
        "Repair_Level": "Moderate",
        "price": 6000,
		"value": ""
    },
    {
        "key_id": "59ba78b394cd9f02642fa500",
        "type": "Plumbing",
        "Repair_Level": "Limited",
        "price": 2000,
		"value": ""
    }
]