var pq=0; var sh5ver="v.2.42";var ct="2016 ARRL-FIELD-DAY N5NOM";var myqth="EM01";var mycall="N5NOM";var sba=new Array(2,124,289,554,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,981,0);var con=new Array("NONE","NA","SA","EU","AF","AS","OC");var cty=new Array(["Sov Mil Order of Malta","1A",3],["Spratly Islands","1S",5],["Monaco","3A",3],["Agalega &amp; St. Brandon","3B6",4],["Mauritius","3B8",4],["Rodriguez Island","3B9",4],["Equatorial Guinea","3C",4],["Annobon Island","3C0",4],["Fiji","3D2",6],["Conway Reef","3D2/c",6],["Rotuma Island","3D2/r",6],["Swaziland","3DA",4],["Tunisia","3V",4],["Vietnam","3W",5],["Guinea","3X",4],["Bouvet","3Y/b",4],["Peter 1 Island","3Y/p",2],["Azerbaijan","4J",5],["Georgia","4L",5],["Montenegro","4O",3],["Sri Lanka","4S",5],["ITU HQ","4U1I",3],["United Nations HQ","4U1U",1],["Vienna Intl Ctr","*4U1V",3],["Timor - Leste","4W",6],["Israel","4X",5],["Libya","5A",4],["Cyprus","5B",5],["Tanzania","5H",4],["Nigeria","5N",4],["Madagascar","5R",4],["Mauritania","5T",4],["Niger","5U",4],["Togo","5V",4],["Samoa","5W",6],["Uganda","5X",4],["Kenya","5Z",4],["Senegal","6W",4],["Jamaica","6Y",1],["Yemen","7O",5],["Lesotho","7P",4],["Malawi","7Q",4],["Algeria","7X",4],["Barbados","8P",1],["Maldives","8Q",5],["Guyana","8R",2],["Croatia","9A",3],["Ghana","9G",4],["Malta","9H",3],["Zambia","9J",4],["Kuwait","9K",5],["Sierra Leone","9L",4],["West Malaysia","9M2",5],["East Malaysia","9M6",6],["Nepal","9N",5],["Dem. Rep. of the Congo","9Q",4],["Burundi","9U",4],["Singapore","9V",5],["Rwanda","9X",4],["Trinidad &amp; Tobago","9Y",2],["Botswana","A2",4],["Tonga","A3",6],["Oman","A4",5],["Bhutan","A5",5],["United Arab Emirates","A6",5],["Qatar","A7",5],["Bahrain","A9",5],["Pakistan","AP",5],["Scarborough Reef","BS7",5],["Taiwan","BV",5],["Pratas Island","BV9P",5],["China","BY",5],["Nauru","C2",6],["Andorra","C3",3],["The Gambia","C5",4],["Bahamas","C6",1],["Mozambique","C9",4],["Chile","CE",2],["San Felix &amp; San Ambrosio","CE0X",2],["Easter Island","CE0Y",2],["Juan Fernandez Islands","CE0Z",2],["Antarctica","CE9",2],["Cuba","CM",1],["Morocco","CN",4],["Bolivia","CP",2],["Portugal","CT",3],["Madeira Islands","CT3",4],["Azores","CU",3],["Uruguay","CX",2],["Sable Island","CY0",1],["St. Paul Island","CY9",1],["Angola","D2",4],["Cape Verde","D4",4],["Comoros","D6",4],["Fed. Rep. of Germany","DL",3],["Philippines","DU",6],["Eritrea","E3",4],["Palestine","E4",5],["North Cook Islands","E5/n",6],["South Cook Islands","E5/s",6],["Niue","E6",6],["Bosnia-Herzegovina","E7",3],["Spain","EA",3],["Balearic Islands","EA6",3],["Canary Islands","EA8",4],["Ceuta &amp; Melilla","EA9",4],["Ireland","EI",3],["Armenia","EK",5],["Liberia","EL",4],["Iran","EP",5],["Moldova","ER",3],["Estonia","ES",3],["Ethiopia","ET",4],["Belarus","EU",3],["Kyrgyzstan","EX",5],["Tajikistan","EY",5],["Turkmenistan","EZ",5],["France","F",3],["Guadeloupe","FG",1],["Mayotte","FH",4],["St. Barthelemy","FJ",1],["New Caledonia","FK",6],["Chesterfield Islands","FK/c",6],["Martinique","FM",1],["French Polynesia","FO",6],["Austral Islands","FO/a",6],["Clipperton Island","FO/c",1],["Marquesas Islands","FO/m",6],["St. Pierre &amp; Miquelon","FP",1],["Reunion Island","FR",4],["St. Martin","FS",1],["Glorioso Islands","FT/g",4],[" Europa","FT/j",4],["Tromelin Island","FT/t",4],["Crozet Island","FT/w",4],["Kerguelen Islands","FT/x",4],["Amsterdam &amp; St. Paul Is.","FT/z",4],["Wallis &amp; Futuna Islands","FW",6],["French Guiana","FY",2],["England","G",3],["Isle of Man","GD",3],["Northern Ireland","GI",3],["Jersey","GJ",3],["Shetland Islands","*GM/s",3],["Scotland","GM",3],["Guernsey","GU",3],["Wales","GW",3],["Solomon Islands","H4",6],["Temotu Province","H40",6],["Hungary","HA",3],["Switzerland","HB",3],["Liechtenstein","HB0",3],["Ecuador","HC",2],["Galapagos Islands","HC8",2],["Haiti","HH",1],["Dominican Republic","HI",1],["Colombia","HK",2],["San Andres &amp; Providencia","HK0/a",1],["Malpelo Island","HK0/m",2],["Republic of Korea","HL",5],["Panama","HP",1],["Honduras","HR",1],["Thailand","HS",5],["Vatican City","HV",3],["Saudi Arabia","HZ",5],["Italy","I",3],["African Italy","*IG9",4],["Sardinia","IS",3],["Sicily","*IT9",3],["Djibouti","J2",4],["Grenada","J3",1],["Guinea-Bissau","J5",4],["St. Lucia","J6",1],["Dominica","J7",1],["St. Vincent","J8",1],["Japan","JA",5],["Minami Torishima","JD/m",6],["Ogasawara","JD/o",5],["Mongolia","JT",5],["Svalbard","JW",3],["Bear Island","*JW/b",3],["Jan Mayen","JX",3],["Jordan","JY",5],["United States","K",1],["Guantanamo Bay","KG4",1],["Mariana Islands","KH0",6],["Baker &amp; Howland Islands","KH1",6],["Guam","KH2",6],["Johnston Island","KH3",6],["Midway Island","KH4",6],["Palmyra &amp; Jarvis Islands","KH5",6],["Hawaii","KH6",6],["Kure Island","KH7K",6],["American Samoa","KH8",6],["Swains Island","KH8/s",6],["Wake Island","KH9",6],["Alaska","KL",1],["Navassa Island","KP1",1],["US Virgin Islands","KP2",1],["Puerto Rico","KP4",1],["Desecheo Island","KP5",1],["Norway","LA",3],["Argentina","LU",2],["Luxembourg","LX",3],["Lithuania","LY",3],["Bulgaria","LZ",3],["Peru","OA",2],["Lebanon","OD",5],["Austria","OE",3],["Finland","OH",3],["Aland Islands","OH0",3],["Market Reef","OJ0",3],["Czech Republic","OK",3],["Slovak Republic","OM",3],["Belgium","ON",3],["Greenland","OX",1],["Faroe Islands","OY",3],["Denmark","OZ",3],["Papua New Guinea","P2",6],["Aruba","P4",2],["DPR of Korea","P5",5],["Netherlands","PA",3],["Curacao","PJ2",2],["Bonaire","PJ4",2],["Saba &amp; St. Eustatius","PJ5",1],["Sint Maarten","PJ7",1],["Brazil","PY",2],["Fernando de Noronha","PY0F",2],["St. Peter &amp; St. Paul","PY0S",2],["Trindade &amp; Martim Vaz","PY0T",2],["Suriname","PZ",2],["Franz Josef Land","R1FJ",3],["Western Sahara","S0",4],["Bangladesh","S2",5],["Slovenia","S5",3],["Seychelles","S7",4],["Sao Tome &amp; Principe","S9",4],["Sweden","SM",3],["Poland","SP",3],["Sudan","ST",4],["Egypt","SU",4],["Greece","SV",3],["Mount Athos","SV/a",3],["Dodecanese","SV5",3],["Crete","SV9",3],["Tuvalu","T2",6],["Western Kiribati","T30",6],["Central Kiribati","T31",6],["Eastern Kiribati","T32",6],["Banaba Island","T33",6],["Somalia","T5",4],["San Marino","T7",3],["Palau","T8",6],["Asiatic Turkey","TA",5],["European Turkey","*TA1",3],["Iceland","TF",3],["Guatemala","TG",1],["Costa Rica","TI",1],["Cocos Island","TI9",1],["Cameroon","TJ",4],["Corsica","TK",3],["Central African Republic","TL",4],["Republic of the Congo","TN",4],["Gabon","TR",4],["Chad","TT",4],["Cote d'Ivoire","TU",4],["Benin","TY",4],["Mali","TZ",4],["European Russia","UA",3],["Kaliningrad","UA2",3],["Asiatic Russia","UA9",5],["Uzbekistan","UK",5],["Kazakhstan","UN",5],["Ukraine","UR",3],["Antigua &amp; Barbuda","V2",1],["Belize","V3",1],["St. Kitts &amp; Nevis","V4",1],["Namibia","V5",4],["Micronesia","V6",6],["Marshall Islands","V7",6],["Brunei Darussalam","V8",6],["Canada","VE",1],["Australia","VK",6],["Heard Island","VK0H",4],["Macquarie Island","VK0M",6],["Cocos (Keeling) Islands","VK9C",6],["Lord Howe Island","VK9L",6],["Mellish Reef","VK9M",6],["Norfolk Island","VK9N",6],["Willis Island","VK9W",6],["Christmas Island","VK9X",6],["Anguilla","VP2E",1],["Montserrat","VP2M",1],["British Virgin Islands","VP2V",1],["Turks &amp; Caicos Islands","VP5",1],["Pitcairn Island","VP6",6],["Ducie Island","VP6/d",6],["Falkland Islands","VP8",2],["South Georgia Island","VP8/g",2],["South Shetland Islands","VP8/h",2],["South Orkney Islands","VP8/o",2],["South Sandwich Islands","VP8/s",2],["Bermuda","VP9",1],["Chagos Islands","VQ9",4],["Hong Kong","VR",5],["India","VU",5],["Andaman &amp; Nicobar Is.","VU4",5],["Lakshadweep Islands","VU7",5],["Mexico","XE",1],["Revillagigedo","XF4",1],["Burkina Faso","XT",4],["Cambodia","XU",5],["Laos","XW",5],["Macao","XX9",5],["Myanmar","XZ",5],["Afghanistan","YA",5],["Indonesia","YB",6],["Iraq","YI",5],["Vanuatu","YJ",6],["Syria","YK",5],["Latvia","YL",3],["Nicaragua","YN",1],["Romania","YO",3],["El Salvador","YS",1],["Serbia","YU",3],["Venezuela","YV",2],["Aves Island","YV0",1],["Zimbabwe","Z2",4],["Macedonia","Z3",3],["Kosovo","*Z6",3],["Republic of South Sudan","Z8",4],["Albania","ZA",3],["Gibraltar","ZB",3],["UK Base Areas on Cyprus","ZC4",5],["St. Helena","ZD7",4],["Ascension Island","ZD8",4],["Tristan da Cunha &amp; Gough","ZD9",4],["Cayman Islands","ZF",1],["Tokelau Islands","ZK3",6],["New Zealand","ZL",6],["Chatham Islands","ZL7",6],["Kermadec Islands","ZL8",6],["N.Z. Subantarctic Is.","ZL9",6],["Paraguay","ZP",2],["South Africa","ZS",4],["Pr. Edward &amp; Marion Is.","ZS8",4]);var q=981;var month="06";var year="2016";var ma=new Array("CW","DIG","PH","BOTH","?","?");var ba=new Array("160m","80m","40m","20m","15m","10m","30m","17m","12m","6m","2m","222M","432M","902M","1.2G","2G","3G","5G","10G","24G",  "47G","75G","119G","142G","241G","LGT","All");var l=[];l.push([708,3,0,0,0,0,14040,],[416,3,0,10,0,0,14056,],[84,3,0,13,0,0,14056,],[171,3,0,16,0,0,14056,],[778,3,0,17,0,0,14056,],[489,3,2,18,0,0,14307,],[55,3,0,20,0,0,14056,],[19,3,0,21,0,0,14056,],[621,2,2,23,0,0,7150,],[528,3,0,25,0,0,14056,],[592,3,0,28,0,0,14056,],[159,3,0,33,0,0,14056,],[624,3,0,37,0,0,14056,],[377,3,0,39,0,0,14056,],[680,3,0,43,0,0,14039,],[188,2,2,44,0,0,7231,],[60,3,0,47,0,0,14039,],[691,2,2,47,0,0,7218,],[14,2,2,49,0,0,7209,],[396,2,2,52,0,0,7192,],[400,3,0,53,0,0,14005,],[327,3,0,55,0,0,14010,],[302,3,0,58,0,0,14009,],[811,2,2,60,0,0,7198,],[756,3,2,60,0,0,14200,],[479,3,0,62,0,0,14009,],[738,3,0,64,0,0,14009,],[753,3,0,65,0,0,14009,],[487,3,2,66,0,0,14200,],[8,3,0,66,0,0,14009,],[480,3,2,75,0,0,14200,],[49,3,0,76,0,0,14009,],[475,3,0,78,0,0,14009,],[529,3,0,79,0,0,14009,],[219,2,2,80,0,0,7203,],[131,3,0,81,0,0,14009,],[687,3,0,83,0,0,14009,],[431,3,0,84,0,0,14009,],[513,3,0,85,0,0,14009,],[291,3,0,85,0,0,14009,],[502,3,2,87,0,0,14250,],[650,2,2,87,0,0,7228,],[623,3,0,89,0,0,14009,],[211,3,0,93,0,0,14009,],[241,2,2,94,0,0,7195,],[481,3,0,97,0,0,14009,],[325,2,2,98,0,0,7237,],[328,3,0,101,0,0,14009,],[696,2,2,104,0,0,7182,],[818,2,2,106,0,0,7175,],[314,3,0,106,0,0,14009,],[263,3,0,107,0,0,14009,],[27,3,0,111,0,0,14013,],[236,3,0,112,0,0,14015,],[809,2,2,114,0,0,7150,],[98,3,0,114,0,0,14020,],[370,3,0,118,0,0,14022,],[354,3,0,119,0,0,14024,],[278,2,1,119,0,0,7070,],[499,3,0,123,0,0,14027,],[601,3,0,125,0,0,14029,],[342,3,2,125,0,0,14185,],[673,2,2,126,0,0,7285,],[763,2,2,127,0,0,7296,],[141,3,0,130,0,0,14032,],[412,3,0,131,0,0,14033,],[175,2,2,132,0,0,7296,],[23,2,1,135,0,0,7070,],[446,2,1,137,0,0,7070,],[629,2,2,140,0,0,7293,],[136,3,0,143,0,0,14058,],[414,2,2,143,0,0,7276,],[62,3,0,148,0,0,14068,],[517,3,0,149,0,0,14063,],[235,3,0,152,0,0,14058,],[509,3,0,153,0,0,14055,],[198,3,2,153,0,0,14257,],[590,3,0,154,0,0,14054,],[3,3,0,156,0,0,14053,],[189,2,2,159,0,0,7227,],[41,2,1,159,0,0,7070,],[139,3,0,159,0,0,14050,],[78,3,0,161,0,0,14047,],[406,2,1,162,0,0,7070,],[550,3,0,165,0,0,14043,],[538,3,0,169,0,0,14042,],[419,2,2,169,0,0,7205,],[511,3,0,172,0,0,14040,],[413,2,1,173,0,0,7070,],[372,3,0,174,0,0,14037,],[158,2,1,174,0,0,7070,],[237,3,0,175,0,0,14036,],[231,3,0,177,0,0,14034,],[48,2,2,181,0,0,7210,],[697,2,2,182,0,0,7210,],[698,2,2,183,0,0,7210,],[794,2,1,184,0,0,7070,],[313,2,2,188,0,0,7210,],[548,3,0,189,0,0,14039,],[297,2,1,191,0,0,7070,],[437,3,0,191,0,0,14040,],[283,2,1,192,0,0,7070,],[283,2,1,193,1,0,7070,],[208,2,1,194,0,0,7070,],[307,2,1,194,0,0,7070,],[306,2,1,195,0,0,7070,],[490,2,1,196,0,0,7070,],[544,3,0,198,0,0,14041,],[424,3,0,198,0,0,14041,],[204,2,1,198,0,0,7070,],[77,2,2,199,0,0,7211,],[658,2,2,203,0,0,7160,],[57,3,0,203,0,0,14026,],[369,3,0,205,0,0,14038,],[102,3,0,208,0,0,14038,],[611,3,0,209,0,0,14038,],[213,3,0,211,0,0,14038,],[573,3,0,212,0,0,14038,],[492,2,1,212,0,0,7070,],[9,3,0,213,0,0,14038,],[460,3,0,214,0,0,14038,],[562,3,0,215,0,0,14038,],[200,2,2,216,0,0,7152,],[589,3,0,217,0,0,14015,],[585,3,0,221,0,0,14038,],[212,2,1,225,0,0,7070,],[355,3,0,225,0,0,14037,],[90,3,0,227,0,0,14043,],[482,3,0,228,0,0,14043,],[99,3,0,229,0,0,14043,],[364,3,0,230,0,0,14043,],[218,3,2,233,0,0,14200,],[526,3,0,233,0,0,14043,],[537,3,0,237,0,0,14003,],[535,3,0,237,0,0,14007,],[234,3,0,239,0,0,14008,],[587,3,0,241,0,0,14015,],[694,2,1,242,0,0,7070,],[239,3,0,244,0,0,14018,],[373,3,0,245,0,0,14022,],[371,3,0,247,0,0,14025,],[80,3,0,247,0,0,14024,],[516,3,0,249,0,0,14028,],[583,3,0,251,0,0,14030,],[604,3,0,252,0,0,14031,],[666,3,0,252,0,0,14032,],[546,3,0,253,0,0,14033,],[391,3,0,254,0,0,14033,],[381,3,0,255,0,0,14034,],[556,3,0,256,0,0,14035,],[646,2,2,257,0,0,7230,],[163,3,0,257,0,0,14036,],[745,3,0,259,0,0,14039,],[37,3,0,260,0,0,14040,],[348,3,2,261,0,0,14213,],[341,3,0,262,0,0,14044,],[0,2,2,263,0,0,7232,],[576,3,0,267,0,0,14049,],[395,2,2,268,0,0,7211,],[795,3,2,269,0,0,14213,],[69,3,2,270,0,0,14213,],[337,3,0,270,0,0,14050,],[564,3,0,272,0,0,14055,],[530,3,0,273,0,0,14056,],[720,3,0,275,0,0,14060,],[506,3,0,276,0,0,14063,],[798,3,2,276,0,0,14337,],[488,3,0,277,0,0,14062,],[105,3,0,278,0,0,14065,],[321,2,2,283,0,0,7175,],[365,3,0,283,0,0,14002,],[556,3,2,284,0,0,14296,],[513,2,2,287,0,0,7186,],[221,3,0,288,0,0,14005,],[107,3,2,290,0,0,14285,],[708,2,2,291,0,0,7225,],[103,3,2,291,0,0,14280,],[403,2,2,292,0,0,7229,],[109,3,2,292,0,0,14276,],[31,3,2,293,0,0,14272,],[598,3,0,294,0,0,14017,],[378,3,2,296,0,0,14262,],[317,2,2,296,0,0,7229,],[71,3,0,297,0,0,14028,],[758,3,0,298,0,0,14028,],[635,2,2,298,0,0,7229,],[718,3,0,299,0,0,14028,],[108,3,0,300,0,0,14028,],[17,3,0,301,0,0,14028,],[596,3,0,301,0,0,14028,],[783,3,0,303,0,0,14028,],[97,3,0,303,0,0,14028,],[809,2,0,305,0,0,7070,],[653,2,2,306,0,0,7284,],[826,2,2,307,0,0,7261,],[765,3,0,309,0,0,14028,],[63,3,2,309,0,0,14332,],[308,2,2,310,0,0,7252,],[425,3,0,311,0,0,14028,],[117,3,0,312,0,0,14028,],[808,3,0,313,0,0,14028,],[212,2,0,314,0,0,7070,],[72,3,0,315,0,0,14028,],[540,3,2,315,0,0,14340,],[555,3,2,316,0,0,14340,],[346,3,2,316,0,0,14340,],[706,2,2,317,0,0,7190,],[820,3,2,317,0,0,14340,],[553,3,2,318,0,0,14340,],[658,2,0,319,0,0,7003,],[168,2,2,321,0,0,7190,],[396,2,0,321,0,0,7021,],[146,3,0,321,0,0,14023,],[45,3,2,322,0,0,14340,],[202,2,0,322,0,0,7033,],[681,2,2,323,0,0,7190,],[382,3,2,323,0,0,14340,],[70,3,0,324,0,0,14026,],[257,3,2,324,0,0,14340,],[134,3,2,325,0,0,14340,],[200,2,2,325,1,0,7180,],[91,3,0,325,0,0,14033,],[441,2,2,326,0,0,7178,],[205,2,0,327,0,0,7037,],[449,2,2,328,0,0,7171,],[220,3,2,328,0,0,14340,],[358,3,2,329,0,0,14340,],[268,3,0,329,0,0,14039,],[178,2,0,330,0,0,7030,],[561,3,2,330,0,0,14340,],[334,3,2,330,0,0,14340,],[287,3,2,331,0,0,14340,],[618,3,0,331,0,0,14051,],[669,2,2,331,0,0,7171,],[148,2,0,332,0,0,7042,],[359,3,2,333,0,0,14340,],[440,3,2,333,0,0,14340,],[404,2,0,334,0,0,7041,],[253,3,2,334,0,0,14340,],[67,3,2,335,0,0,14340,],[759,3,2,337,0,0,14340,],[405,2,0,338,0,0,7019,],[20,3,2,338,0,0,14340,],[599,3,2,339,0,0,14340,],[645,2,0,340,0,0,7031,],[501,3,2,340,0,0,14340,],[781,3,0,340,0,0,14006,],[533,3,0,342,0,0,14007,],[410,3,2,342,0,0,14340,],[746,3,0,343,0,0,14010,],[496,3,2,343,0,0,14340,],[251,2,2,343,0,0,7173,],[733,3,0,345,0,0,14013,],[177,3,2,345,0,0,14340,],[676,2,0,345,0,0,7024,],[389,3,0,346,0,0,14014,],[674,2,2,346,0,0,7173,],[713,2,2,350,0,0,7173,],[663,2,2,351,0,0,7173,],[584,3,2,353,0,0,14295,],[704,2,2,357,0,0,7173,],[286,3,0,357,0,0,14021,],[85,3,0,358,0,0,14022,],[652,2,2,359,0,0,7173,],[383,3,0,361,0,0,14027,],[674,2,2,363,1,0,7173,],[568,3,0,364,0,0,14036,],[151,2,2,365,0,0,7173,],[361,3,0,366,0,0,14036,],[740,3,0,366,0,0,14036,],[137,3,2,366,0,0,14251,],[420,2,2,366,0,0,7173,],[643,2,2,371,0,0,7173,],[13,2,2,371,0,0,7173,],[368,3,0,372,0,0,14030,],[539,3,2,372,0,0,14290,],[744,3,0,373,0,0,14030,],[688,2,2,373,0,0,7173,],[119,3,2,373,0,0,14316,],[579,3,2,374,0,0,14320,],[113,3,0,376,0,0,14030,],[64,3,2,377,0,0,14329,],[588,3,0,377,0,0,14030,],[191,2,2,377,0,0,7173,],[769,3,0,378,0,0,14030,],[750,3,2,378,0,0,14343,],[684,2,2,379,0,0,7173,],[610,3,2,379,0,0,14160,],[806,3,2,384,0,0,14152,],[224,3,2,387,0,0,14167,],[593,3,0,389,0,0,14029,],[767,3,2,389,0,0,14167,],[232,3,2,390,0,0,14167,],[43,3,2,392,0,0,14167,],[319,2,2,393,0,0,7173,],[739,3,2,394,0,0,14167,],[570,3,2,395,0,0,14167,],[498,3,0,397,0,0,14029,],[571,3,2,397,0,0,14167,],[516,3,2,398,0,0,14167,],[821,2,2,398,0,0,7173,],[315,3,0,398,0,0,14026,],[751,3,2,399,0,0,14167,],[468,3,0,399,0,0,14025,],[754,3,2,400,0,0,14167,],[259,3,2,400,0,0,14167,],[1,3,2,402,0,0,14167,],[161,2,2,402,0,0,7173,],[68,3,2,402,0,0,14167,],[619,3,0,403,0,0,14018,],[557,3,2,404,0,0,14167,],[800,3,0,404,0,0,14014,],[705,2,1,404,0,0,7080,],[732,3,2,406,0,0,14167,],[559,3,0,407,0,0,14008,],[761,3,0,412,0,0,14013,],[35,3,2,412,0,0,14171,],[150,2,2,412,0,0,7173,],[734,3,2,413,0,0,14187,],[505,3,0,415,0,0,14016,],[545,3,2,415,0,0,14195,],[755,3,0,415,0,0,14018,],[742,3,2,416,0,0,14198,],[751,3,0,416,0,0,14018,],[101,3,0,417,0,0,14019,],[82,3,2,417,0,0,14203,],[98,3,0,419,1,0,14026,],[542,3,0,420,0,0,14030,],[140,3,0,421,0,0,14031,],[300,3,0,423,0,0,14032,],[126,3,0,424,0,0,14032,],[547,3,0,425,0,0,14033,],[566,3,2,427,0,0,14254,],[609,3,0,427,0,0,14035,],[282,3,2,430,0,0,14254,],[387,3,0,431,0,0,14037,],[451,3,0,432,0,0,14037,],[176,2,2,434,0,0,7171,],[376,3,0,435,0,0,14037,],[116,2,2,435,0,0,7171,],[581,3,0,435,0,0,14037,],[797,3,0,437,0,0,14037,],[810,3,2,437,0,0,14291,],[796,3,0,438,0,0,14037,],[536,3,0,439,0,0,14037,],[142,3,0,440,0,0,14037,],[442,3,0,442,0,0,14037,],[16,3,2,445,0,0,14316,],[145,3,0,445,0,0,14037,],[484,2,2,445,0,0,7171,],[435,3,0,446,0,0,14037,],[789,3,2,448,0,0,14335,],[336,3,0,453,0,0,14037,],[267,3,0,454,0,0,14038,],[682,2,2,455,0,0,7184,],[75,3,2,455,0,0,14164,],[554,3,0,455,0,0,14039,],[641,2,2,456,0,0,7177,],[721,3,0,456,0,0,14040,],[360,3,0,458,0,0,14043,],[220,3,0,459,0,0,14044,],[46,3,2,461,0,0,14210,],[147,2,2,463,0,0,7213,],[626,3,0,463,0,0,14047,],[100,3,0,464,0,0,14048,],[205,2,2,464,0,0,7233,],[74,3,0,465,0,0,14049,],[160,2,2,467,0,0,7245,],[5,3,0,468,0,0,14053,],[362,3,0,469,0,0,14054,],[434,3,0,470,0,0,14055,],[338,3,2,471,0,0,14237,],[368,3,2,472,0,0,14240,],[226,3,0,472,0,0,14057,],[464,3,0,473,0,0,14059,],[757,3,2,473,0,0,14245,],[277,2,2,473,0,0,7298,],[637,3,2,474,0,0,14247,],[104,3,2,474,0,0,14250,],[776,3,0,475,0,0,14060,],[375,3,2,478,0,0,14253,],[295,2,1,479,0,0,7070,],[613,3,2,481,0,0,14260,],[651,2,2,481,0,0,7208,],[423,2,1,482,0,0,7070,],[707,2,2,482,0,0,7203,],[218,2,2,482,0,0,7203,],[686,2,1,486,0,0,7070,],[414,2,2,488,1,0,7171,],[690,2,1,490,0,0,7070,],[264,2,2,498,0,0,7196,],[179,2,2,500,0,0,7196,],[335,3,2,501,0,0,14269,],[519,2,2,501,0,0,7196,],[130,3,2,503,0,0,14337,],[760,3,2,504,0,0,14337,],[677,2,2,505,0,0,7196,],[702,2,2,506,0,0,7196,],[787,3,2,507,0,0,14337,],[773,2,2,508,0,0,7196,],[819,3,2,508,0,0,14338,],[54,3,2,511,0,0,14337,],[388,3,2,513,0,0,14337,],[79,3,2,515,0,0,14337,],[584,3,2,517,1,0,14337,],[768,3,2,518,0,0,14337,],[622,3,2,518,0,0,14337,],[799,3,2,519,0,0,14337,],[504,3,1,526,0,0,14084,],[785,3,2,527,0,0,14223,],[804,3,2,528,0,0,14223,],[364,3,1,531,0,0,14084,],[53,3,2,532,0,0,14223,],[512,3,1,533,0,0,14084,],[61,3,1,533,0,0,14084,],[386,3,2,534,0,0,14223,],[813,3,1,536,0,0,14084,],[353,3,1,537,0,0,14084,],[439,3,2,537,0,0,14223,],[132,3,2,538,0,0,14223,],[135,3,2,539,0,0,14223,],[50,2,2,540,0,0,7160,],[191,2,0,541,0,0,7070,],[206,2,1,543,0,0,7070,],[292,3,2,544,0,0,14223,],[502,2,2,545,0,0,7173,],[258,3,1,546,0,0,14084,],[302,3,1,547,0,0,14084,],[497,3,2,550,0,0,14290,],[712,2,2,551,0,0,7218,],[52,3,1,553,0,0,14084,],[786,3,2,555,0,0,14309,],[597,3,2,555,0,0,14309,],[243,3,2,556,0,0,14309,],[129,3,2,557,0,0,14309,],[567,3,1,557,0,0,14070,],[2,3,2,558,0,0,14309,],[780,3,2,558,0,0,14309,],[223,3,2,561,0,0,14309,],[245,3,1,573,0,0,14071,],[89,3,1,576,0,0,14071,],[745,3,1,578,0,0,14071,],[560,2,2,581,0,0,7141,],[470,3,1,586,0,0,14071,],[465,3,1,588,0,0,14071,],[404,2,2,589,0,0,7260,],[587,3,1,592,0,0,14071,],[572,3,1,596,0,0,14071,],[467,3,2,596,0,0,14309,],[443,3,2,597,0,0,14309,],[557,3,2,597,1,0,14309,],[344,3,1,597,0,0,14071,],[600,3,2,598,0,0,14309,],[762,3,2,598,0,0,14309,],[508,3,2,599,0,0,14309,],[242,3,2,599,0,0,14309,],[47,3,2,600,0,0,14309,],[792,3,2,601,0,0,14309,],[607,3,2,603,0,0,14309,],[729,3,2,604,0,0,14309,],[343,3,2,604,0,0,14309,],[824,3,1,605,0,0,14071,],[522,3,2,605,0,0,14309,],[777,3,2,606,0,0,14309,],[815,3,2,607,0,0,14309,],[15,3,2,607,0,0,14309,],[515,3,2,607,0,0,14309,],[816,3,2,608,0,0,14309,],[379,3,1,608,0,0,14071,],[494,3,2,609,0,0,14309,],[357,3,2,609,0,0,14309,],[44,3,2,610,0,0,14309,],[271,3,2,610,0,0,14309,],[627,2,2,611,0,0,7144,],[606,3,2,613,0,0,14309,],[447,3,2,614,0,0,14309,],[503,3,2,616,0,0,14310,],[567,3,2,617,0,0,14310,],[330,3,2,621,0,0,14310,],[324,2,2,621,0,0,7193,],[473,3,2,621,0,0,14310,],[671,2,2,622,0,0,7193,],[551,3,2,622,0,0,14310,],[154,2,2,623,0,0,7193,],[124,3,2,624,0,0,14310,],[213,2,2,624,0,0,7193,],[83,3,2,625,0,0,14310,],[39,2,2,625,0,0,7193,],[534,3,2,625,0,0,14310,],[296,2,2,626,0,0,7193,],[527,3,2,626,0,0,14310,],[191,2,1,627,0,0,7070,],[801,2,2,627,0,0,7193,],[749,3,1,629,0,0,14071,],[500,3,2,630,0,0,14328,],[736,3,2,631,0,0,14328,],[727,3,2,632,0,0,14328,],[254,3,2,633,0,0,14328,],[88,3,2,634,0,0,14328,],[418,2,2,635,0,0,7225,],[112,3,2,637,0,0,14328,],[731,3,2,637,0,0,14328,],[390,3,2,638,0,0,14328,],[209,2,1,638,0,0,7070,],[532,3,2,638,0,0,14328,],[94,3,2,639,0,0,14328,],[392,3,2,640,0,0,14328,],[274,3,2,641,0,0,14328,],[471,3,2,642,0,0,14328,],[724,3,2,643,0,0,14328,],[199,2,2,643,0,0,7255,],[244,3,2,643,0,0,14328,],[76,3,2,644,0,0,14328,],[802,3,2,644,0,0,14328,],[622,3,2,644,1,0,14328,],[801,2,1,645,0,0,7070,],[429,3,2,645,0,0,14328,],[558,3,2,646,0,0,14328,],[463,2,1,647,0,0,7070,],[523,3,2,647,0,0,14328,],[472,3,2,648,0,0,14328,],[766,3,2,648,0,0,14328,],[409,2,1,648,0,0,7070,],[309,3,2,649,0,0,14328,],[367,3,2,650,0,0,14328,],[679,2,1,650,0,0,7070,],[303,3,0,650,0,0,14030,],[256,3,2,650,0,0,14328,],[803,3,2,651,0,0,14328,],[476,3,2,652,0,0,14328,],[769,3,2,652,0,0,14328,],[294,3,2,653,0,0,14328,],[265,3,2,654,0,0,14328,],[56,3,2,654,0,0,14328,],[717,3,2,655,0,0,14328,],[426,2,0,657,0,0,7001,],[474,3,2,659,0,0,14328,],[246,2,0,660,0,0,7002,],[92,3,2,660,0,0,14328,],[24,3,2,661,0,0,14328,],[716,2,0,661,0,0,7003,],[125,3,2,661,0,0,14328,],[514,3,2,662,0,0,14328,],[65,3,2,662,0,0,14328,],[26,3,2,663,0,0,14328,],[774,2,0,663,0,0,7004,],[255,3,2,663,0,0,14328,],[225,2,0,664,0,0,7005,],[59,3,2,664,0,0,14328,],[507,3,2,665,0,0,14328,],[445,3,2,665,0,0,14328,],[791,2,1,667,0,0,7070,],[361,3,2,667,0,0,14328,],[233,3,2,667,0,0,14328,],[452,3,2,668,0,0,14328,],[565,3,2,669,0,0,14328,],[10,2,1,669,0,0,7070,],[459,3,2,672,0,0,14328,],[658,1,2,673,0,0,3853,],[438,3,2,673,0,0,14328,],[250,1,2,673,0,0,3863,],[87,1,2,674,0,0,3867,],[118,3,2,674,0,0,14328,],[466,3,2,675,0,0,14328,],[747,3,2,676,0,0,14328,],[432,3,2,676,0,0,14328,],[823,3,2,677,0,0,14328,],[752,3,2,678,0,0,14328,],[492,1,2,678,0,0,3870,],[703,1,1,678,0,0,3580,],[276,3,2,680,0,0,14328,],[634,1,1,681,0,0,3580,],[431,2,2,681,0,0,7258,],[180,1,1,682,0,0,3580,],[730,3,2,683,0,0,14328,],[333,1,1,683,0,0,3580,],[290,1,1,684,0,0,3580,],[279,2,2,685,0,0,7258,],[82,2,2,686,0,0,7258,],[456,0,2,691,0,0,1845,],[657,1,2,701,0,0,3864,],[614,2,2,701,0,0,7171,],[605,2,2,707,0,0,7178,],[642,1,2,707,0,0,3890,],[165,1,2,708,0,0,3893,],[630,1,2,709,0,0,3810,],[404,1,2,710,0,0,3812,],[549,2,2,710,0,0,7178,],[638,1,2,710,0,0,3900,],[772,1,2,711,0,0,3816,],[690,1,2,714,0,0,3825,],[169,1,2,715,0,0,3890,],[681,1,2,717,0,0,3831,],[453,1,1,717,0,0,3582,],[682,1,2,718,0,0,3837,],[394,1,2,718,0,0,3886,],[312,1,2,719,0,0,3883,],[201,1,2,720,0,0,3883,],[153,1,2,721,0,0,3883,],[411,1,2,721,0,0,3883,],[248,1,2,722,0,0,3883,],[190,1,2,723,0,0,3883,],[340,1,2,724,0,0,3846,],[640,1,2,724,0,0,3883,],[164,1,2,733,0,0,3883,],[628,1,2,736,0,0,3883,],[180,1,2,737,0,0,3883,],[703,1,2,738,0,0,3883,],[705,1,2,739,0,0,3883,],[210,1,2,740,0,0,3883,],[636,1,2,741,0,0,3883,],[788,1,2,742,0,0,3883,],[674,1,2,744,0,0,3883,],[491,1,2,746,0,0,3883,],[156,1,2,746,0,0,3883,],[668,1,2,747,0,0,3883,],[648,1,2,747,0,0,3883,],[665,1,2,750,0,0,3883,],[332,1,1,751,0,0,3582,],[6,1,2,754,0,0,3883,],[170,1,2,756,0,0,3883,],[649,1,2,767,0,0,3883,],[262,1,2,767,0,0,3883,],[149,1,2,768,0,0,3883,],[689,1,2,774,0,0,3880,],[155,1,2,775,0,0,3880,],[655,1,2,776,0,0,3880,],[552,2,0,776,0,0,7052,],[176,1,2,776,0,0,3880,],[661,1,2,777,0,0,3880,],[288,1,2,777,0,0,3880,],[801,1,2,778,0,0,3880,],[415,2,0,780,0,0,7048,],[436,1,2,780,0,0,3880,],[139,2,0,781,0,0,7046,],[686,2,0,784,0,0,7043,],[128,2,0,786,0,0,7040,],[21,2,0,787,0,0,7039,],[3,2,0,788,0,0,7037,],[573,2,0,790,0,0,7035,],[608,2,0,791,0,0,7034,],[126,2,0,792,0,0,7033,],[427,2,0,795,0,0,7031,],[634,1,2,795,0,0,3750,],[80,2,0,797,0,0,7030,],[284,1,1,798,0,0,3581,],[493,1,2,798,0,0,3770,],[98,2,0,798,0,0,7029,],[269,2,0,800,0,0,7029,],[655,1,2,800,1,0,3774,],[633,1,2,801,0,0,3774,],[407,1,1,802,0,0,3581,],[121,2,0,802,0,0,7025,],[578,2,0,804,0,0,7024,],[569,2,0,805,0,0,7022,],[205,1,2,809,0,0,3786,],[499,2,0,810,0,0,7019,],[662,1,2,811,0,0,3797,],[397,1,2,812,0,0,3805,],[273,1,2,815,0,0,3813,],[217,1,1,817,0,0,3582,],[486,1,2,817,0,0,3816,],[644,1,2,820,0,0,3837,],[710,1,1,822,0,0,3582,],[312,1,2,827,1,0,3831,],[664,1,2,830,0,0,3850,],[719,1,1,831,0,0,3583,],[631,1,2,834,0,0,3830,],[808,1,1,838,0,0,3581,],[157,1,2,839,0,0,3778,],[322,1,2,840,0,0,3810,],[691,1,2,842,0,0,3826,],[167,1,2,843,0,0,3833,],[290,1,2,845,0,0,3845,],[396,3,2,846,0,0,14235,],[805,2,2,848,0,0,7243,],[269,2,2,850,0,0,7251,],[543,1,1,858,0,0,3582,],[320,0,2,865,0,0,1845,],[326,1,2,871,0,0,3882,],[295,1,2,874,0,0,3850,],[692,1,1,874,0,0,3583,],[647,1,2,875,0,0,3850,],[283,1,1,875,0,0,3583,],[272,1,2,879,0,0,3850,],[165,1,2,880,1,0,3850,],[685,1,2,880,0,0,3850,],[186,2,2,887,0,0,7225,],[433,1,1,890,0,0,3582,],[684,1,2,898,0,0,3875,],[350,1,2,898,0,0,3875,],[603,1,1,905,0,0,3582,],[723,1,1,909,0,0,3582,],[281,1,1,915,0,0,3581,],[207,2,1,938,0,0,7072,],[321,1,2,955,0,0,3857,],[285,1,2,956,0,0,3857,],[656,1,2,957,0,0,3857,],[323,1,2,963,0,0,3872,],[775,2,1,970,0,0,7072,],[173,1,2,996,0,0,3889,],[161,1,2,998,0,0,3889,],[683,1,2,999,0,0,3889,],[770,1,2,1000,0,0,3889,],[166,1,2,1003,0,0,3889,],[709,1,2,1005,0,0,3889,],[174,1,2,1007,0,0,3889,],[421,2,1,1010,0,0,7072,],[249,1,2,1015,0,0,3841,],[419,1,2,1016,0,0,3841,],[647,1,2,1017,1,0,3841,],[506,1,2,1017,0,0,3841,],[339,1,2,1019,0,0,3841,],[65,1,2,1020,0,0,3841,],[205,1,2,1023,1,0,3750,],[182,1,2,1066,0,0,3750,],[485,1,2,1070,0,0,3750,],[399,1,2,1072,0,0,3750,],[668,1,2,1072,1,0,3815,],[261,1,2,1076,0,0,3815,],[403,1,2,1076,0,0,3815,],[492,1,2,1077,1,0,3815,],[483,1,2,1079,0,0,3815,],[30,1,2,1081,0,0,3815,],[763,2,2,1098,1,0,7262,],[302,2,2,1101,0,0,7262,],[299,2,2,1102,0,0,7262,],[513,2,2,1116,1,0,7262,],[612,2,2,1120,0,0,7262,],[672,2,2,1125,0,0,7180,],[575,3,2,1136,0,0,14227,],[591,3,2,1155,0,0,14227,],[111,3,0,1173,0,0,14045,],[127,3,0,1175,0,0,14038,],[681,2,1,1179,0,0,7071,],[43,3,0,1180,0,0,14007,],[25,3,2,1180,0,0,14227,],[515,3,2,1184,1,0,14227,],[279,3,2,1184,0,0,14227,],[33,3,2,1185,0,0,14227,],[616,3,2,1188,0,0,14227,],[625,3,0,1189,0,0,14023,],[521,2,1,1190,0,0,7071,],[623,2,1,1194,0,0,7071,],[737,3,0,1194,0,0,14023,],[430,3,0,1194,0,0,14023,],[289,2,1,1195,0,0,7071,],[374,3,0,1196,0,0,14023,],[580,3,0,1199,0,0,14023,],[609,3,0,1199,1,0,14023,],[363,3,0,1200,0,0,14023,],[773,2,1,1201,0,0,7071,],[218,2,1,1209,0,0,7071,],[586,3,0,1210,0,0,14025,],[615,3,0,1212,0,0,14023,],[462,2,1,1212,0,0,7071,],[735,3,0,1221,0,0,14015,],[454,3,0,1222,0,0,14015,],[457,3,0,1224,0,0,14015,],[563,3,0,1225,0,0,14015,],[428,3,2,1227,0,0,14242,],[293,3,2,1227,0,0,14242,],[51,2,2,1228,0,0,7178,],[617,3,2,1228,0,0,14242,],[115,3,0,1228,0,0,14015,],[28,3,2,1229,0,0,14242,],[582,3,2,1231,0,0,14242,],[34,2,2,1232,0,0,7178,],[187,2,1,1232,0,0,7071,],[93,3,0,1233,0,0,14015,],[469,3,0,1234,0,0,14015,],[748,3,2,1235,0,0,14242,],[122,3,0,1236,0,0,14015,],[143,3,0,1238,0,0,14015,],[693,2,1,1238,0,0,7070,],[270,3,2,1239,0,0,14242,],[58,3,0,1239,0,0,14015,],[587,3,0,1239,1,0,14015,],[764,3,0,1240,0,0,14015,],[252,2,1,1240,0,0,7071,],[11,3,0,1240,0,0,14015,],[759,3,0,1241,0,0,14015,],[812,3,2,1242,0,0,14222,],[200,2,1,1243,0,0,7071,],[612,2,1,1244,0,0,7071,],[724,3,0,1245,0,0,14015,],[822,2,2,1245,0,0,7244,],[622,3,0,1246,0,0,14015,],[352,2,1,1247,0,0,7071,],[722,3,0,1249,0,0,14015,],[726,3,0,1250,0,0,14015,],[728,3,0,1251,0,0,14015,],[272,2,1,1254,0,0,7071,],[518,3,2,1255,0,0,14222,],[713,2,2,1255,1,0,7219,],[385,3,2,1256,0,0,14222,],[675,2,2,1257,0,0,7219,],[18,2,2,1257,0,0,7219,],[227,3,0,1258,0,0,14015,],[525,3,0,1259,0,0,14015,],[194,2,2,1260,0,0,7219,],[531,3,2,1260,0,0,14222,],[152,2,2,1261,0,0,7219,],[741,3,0,1261,0,0,14015,],[725,3,0,1262,0,0,14015,],[73,3,2,1262,0,0,14222,],[642,2,2,1262,0,0,7219,],[771,2,2,1264,0,0,7219,],[424,3,2,1265,0,0,14222,],[175,2,1,1265,0,0,7072,],[784,3,2,1266,0,0,14222,],[29,2,2,1266,0,0,7219,],[594,3,0,1267,0,0,14015,],[228,3,0,1268,0,0,14015,],[577,2,2,1268,0,0,7219,],[193,2,2,1269,0,0,7219,],[398,2,2,1269,0,0,7219,],[110,3,0,1273,0,0,14015,],[699,3,2,1273,0,0,14222,],[81,3,2,1274,0,0,14222,],[638,2,2,1275,0,0,7220,],[185,3,0,1275,0,0,14015,],[701,3,0,1277,0,0,14015,],[502,3,2,1279,1,0,14222,],[286,3,0,1279,1,0,14015,],[305,3,2,1282,0,0,14222,],[495,3,2,1283,0,0,14222,],[304,3,2,1285,0,0,14222,],[743,3,2,1286,0,0,14222,],[356,3,0,1286,0,0,14019,],[316,3,0,1292,0,0,14025,],[524,2,2,1292,0,0,7185,],[814,2,2,1293,0,0,7185,],[801,2,2,1293,1,0,7185,],[12,3,0,1293,0,0,14031,],[450,3,0,1295,0,0,14035,],[711,2,2,1295,0,0,7185,],[331,3,0,1296,0,0,14036,],[349,2,2,1296,0,0,7185,],[51,3,0,1297,0,0,14037,],[240,2,2,1297,0,0,7185,],[455,3,2,1298,0,0,14222,],[693,2,2,1298,0,0,7185,],[194,3,0,1301,0,0,14043,],[66,3,2,1301,0,0,14222,],[183,2,2,1301,0,0,7185,],[714,2,2,1301,0,0,7185,],[36,2,2,1302,0,0,7185,],[208,2,2,1303,0,0,7185,],[347,2,2,1304,0,0,7185,],[340,2,2,1304,0,0,7185,],[184,2,2,1305,0,0,7185,],[95,3,2,1305,0,0,14222,],[40,3,2,1306,0,0,14222,],[827,2,2,1306,0,0,7185,],[807,2,1,1306,0,0,7071,],[133,3,0,1306,0,0,14049,],[639,2,2,1310,0,0,7185,],[817,2,2,1310,0,0,7185,],[779,2,2,1312,0,0,7185,],[318,2,2,1312,0,0,7185,],[678,2,1,1313,0,0,7071,],[595,3,0,1314,0,0,14015,],[408,2,1,1315,0,0,7071,],[58,3,2,1316,0,0,14222,],[311,2,2,1316,0,0,7185,],[660,2,1,1316,0,0,7071,],[578,3,0,1316,0,0,14022,],[477,3,2,1318,0,0,14222,],[384,3,2,1320,0,0,14222,],[695,2,2,1320,0,0,7185,],[793,3,0,1320,0,0,14031,],[217,2,1,1321,0,0,7071,],[632,2,2,1321,0,0,7185,],[422,2,1,1321,0,0,7071,],[417,2,2,1322,0,0,7185,],[602,3,2,1322,0,0,14222,],[624,3,2,1322,0,0,14222,],[103,3,0,1323,0,0,14035,],[275,3,2,1323,0,0,14222,],[444,3,0,1324,0,0,14037,],[169,2,2,1325,0,0,7185,],[670,2,2,1326,0,0,7185,],[659,2,2,1326,0,0,7185,],[120,3,2,1326,0,0,14222,],[448,2,2,1327,0,0,7185,],[351,3,0,1328,0,0,14048,],[541,2,2,1328,0,0,7185,],[32,2,2,1329,0,0,7185,],[184,2,2,1329,1,0,7185,],[38,2,2,1330,0,0,7185,],[393,3,2,1331,0,0,14222,],[620,3,2,1331,0,0,14222,],[700,2,2,1332,0,0,7185,],[654,3,0,1332,0,0,14055,],[22,2,2,1332,0,0,7185,],[715,3,2,1332,0,0,14222,],[366,2,1,1332,0,0,7071,],[401,2,2,1333,0,0,7185,],[692,2,1,1333,0,0,7071,],[192,3,2,1334,0,0,14222,],[40,2,2,1334,0,0,7185,],[247,3,2,1334,0,0,14222,],[202,3,0,1335,0,0,14060,],[241,3,2,1335,0,0,14222,],[214,2,1,1336,0,0,7071,],[310,2,2,1336,0,0,7185,],[4,3,0,1338,0,0,14064,],[520,3,2,1338,0,0,14222,],[211,3,2,1339,0,0,14222,],[461,3,0,1339,0,0,14065,],[637,2,2,1340,0,0,7203,],[238,3,2,1340,0,0,14222,],[790,3,0,1341,0,0,14067,],[123,3,2,1342,0,0,14222,],[327,2,2,1342,0,0,7227,],[213,3,2,1342,0,0,14222,],[249,2,2,1342,0,0,7244,],[574,4,0,1344,0,0,21014,],[85,4,0,1346,0,0,21021,],[371,4,0,1347,0,0,21022,],[506,3,2,1347,0,0,14222,],[604,3,2,1350,0,0,14222,],[478,3,2,1350,0,0,14222,],[222,3,2,1352,0,0,14222,],[782,3,2,1352,0,0,14222,],[391,3,2,1353,0,0,14222,],[381,4,0,1354,0,0,21026,],[329,3,0,1354,0,0,14022,],[327,2,0,1356,0,0,7036,],[203,2,0,1360,0,0,7022,],[138,3,2,1361,0,0,14222,],[401,2,0,1362,0,0,7029,],[7,3,2,1363,0,0,14222,],[702,2,0,1363,0,0,7038,],[601,3,2,1366,0,0,14222,],[162,2,0,1367,0,0,7043,],[230,3,2,1370,0,0,14222,],[659,2,0,1372,0,0,7033,],[489,2,0,1373,0,0,7033,],[667,2,0,1375,0,0,7033,],[216,2,0,1376,0,0,7033,],[197,2,0,1377,0,0,7033,],[42,3,1,1378,0,0,14072,],[181,2,0,1378,0,0,7033,],[156,2,0,1382,0,0,7033,],[215,2,0,1383,0,0,7033,],[811,2,0,1385,0,0,7033,],[699,2,0,1390,0,0,7031,],[144,3,2,1390,0,0,14285,],[165,2,0,1391,0,0,7032,],[96,4,0,1391,0,0,21012,],[260,2,0,1393,0,0,7040,],[86,4,0,1394,0,0,21030,],[338,4,0,1395,0,0,21029,],[172,2,0,1395,0,0,7042,],[279,4,0,1396,0,0,21031,],[12,4,0,1396,0,0,21032,],[513,3,2,1396,0,0,14345,],[691,2,0,1397,0,0,7021,],[380,4,0,1397,0,0,21039,],[601,4,0,1398,0,0,21035,],[510,3,2,1398,0,0,14232,],[157,2,0,1400,0,0,7036,],[366,2,0,1402,0,0,7036,],[16,3,0,1402,0,0,14003,],[345,2,0,1402,0,0,7036,],[196,2,0,1403,0,0,7036,],[229,3,0,1404,0,0,14004,],[490,2,0,1404,0,0,7036,],[458,3,0,1405,0,0,14008,],[402,2,0,1405,0,0,7036,],[280,3,0,1406,0,0,14008,],[106,3,2,1407,0,0,14218,],[301,3,0,1408,0,0,14011,],[195,2,0,1408,0,0,7036,],[225,3,0,1411,0,0,14018,],[298,3,2,1412,0,0,14338,],[825,3,0,1412,0,0,14019,],[266,3,2,1417,0,0,14338,],[114,4,2,1426,0,0,21269,]);