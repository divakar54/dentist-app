
export const conditions = {
    "pain" : {
        "severe-throbbing" : [
            "if pain is throbbing and teeth are whitish color",
            "if pain is throbbing and teeth are whitish color and Red/Blue/Black Gum Color",
            "if pain is throbbing and teeth are whitish color and  No Change in Gum Color"
        ],
        "dull-persistent" : [
            "if pain is dull and persistent and swelling on gums then Endodontist",	
            "if pain is dull and persistent and swelling on gums and brown/black teeth then Endodontist",	
            "if pain is dull and persistent and swelling on gums and red/blue/black gum then Periodontist",	
            "if pain is dull and persistent and swelling on gums and brown/black teeth and red/blue/black gum then Endodontist",	
            "if pain is dull and persistent and swelling on gums and brown/black teeth and red/blue/black gum and movable then Oral surgeon",	
            "if pain is dull and persistent and swelling on lips then Endodotist",	
            "if pain is dull and persistent and brown/black teeth then Endodontist"	,
            "if pain is dull and persistent and brown/black teeth and not movable then Oral Surgeon	Endodontist",
            "if pain is dull and persistent and brown/black teeth and movable then Oral surgeon",	
            "if pain is dull and persistent and yellow teeth then Endodontist"

        ],
        "no-pain" : [
            "if no pain and swelling on gums and yellow teeth and  red/blue/black gum Periodontist",
            "if no pain and swelling on gums and Brown/Black Teeth and red/blue/black gum then Periodontist"
        ]
    },

    "swelling" : {
        "lips" : [
            "If (1.1) and (2.1) then Endodotist",
            "If (2.1) then Oral surgeon"
        ],
        "tongue" : [
            "If (2.2) then Oral Surgeon"
        ],
        "gums" : [
            "If pain is dull and persistent and swelling on gums then Endodontist",
            "If pain is dull and persistent and swelling on gums and Brown/Black Teeth then Endodontist",
            "If pain is dull and persistent and swelling on gums and red/blue/black gum then Periodontist",
            "If pain is dull and persistent and swelling on gums and Brown/Black Teeth and red/blue/black gum then Endodontist",
            "If pain is dull and persistent and swelling on gums and Brown/Black Teeth and red/blue/black gum and movable then Oral surgeon",
            "If no pain and swelling on gums and yellow teeth and red/blue/black gum Periodontist",
            "If no pain and swelling on gums and Brown/Black Teeth and red/blue/black gum then Periodontist",
            "If swelling on gums then Periodontist"
        ],
        "cheeks" : [ 
            "If (2.4) then Oral Surgeon"
        ],
        "pallate" : [
            "If (2.5) then Oral surgeon"
        ]
    },
    "discoloration" : {
        "yellow-teeth" : [
            "If pain is dull and persistent and yellow teeth then Endodontist",
            "If no pain and swelling on gums and yellow teeth and red/blue/black gum Periodontist",
            "If yellow teeth then Endodontist"
        ],
        "whitish-teeth" : [
            "if pain is throbbing and teeth are whitish color",
            "if pain is throbbing and teeth are whitish color and Red/Blue/Black Gum Color",
            "if pain is throbbing and teeth are whitish color and  No Change in Gum Color",
            "If teeth are whitish color then Periodontist"

        ],
        "brown/black" : [
            "if pain is dull and persistent and swelling on gums and brown/black teeth then Endodontist",
            "if pain is dull and persistent and swelling on gums and brown/black teeth and red/blue/black gum then Endodontist",	
            "if pain is dull and persistent and swelling on gums and brown/black teeth and red/blue/black gum and movable then Oral surgeon",
            "if pain is dull and persistent and brown/black teeth then Endodontist"	,
            "if pain is dull and persistent and brown/black teeth and not movable then Oral Surgeon	Endodontist",
            "if pain is dull and persistent and brown/black teeth and movable then Oral surgeon",
        ],
        "blue-teeth" : [
            "If blue teeth then Oral Surgeon"
        ]
    },
    "gum-discoloration" : {
        "red/blue/black" : [
            "if pain is throbbing and teeth are whitish color and Red/Blue/Black Gum Color",
            "if pain is dull and persistent and swelling on gums and red/blue/black gum then Periodontist",
            "if pain is dull and persistent and swelling on gums and brown/black teeth and red/blue/black gum then Endodontist",	
            "if pain is dull and persistent and swelling on gums and brown/black teeth and red/blue/black gum and movable then Oral surgeon",
            "if no pain and swelling on gums and yellow teeth and red/blue/black gum Periodontist",
            "if no pain and swelling on gums and Brown/Black Teeth and red/blue/black gum then Periodontist",
            "If red/blue/black gum then Periodontics"
        ]
    },
    "mobility" : {
        "movable" : [
            "If pain is dull and persistent and swelling on gums and brown/black teeth and red/blue/black gum and movable then Oral surgeon",
            "If pain is dull and persistent and brown/black teeth and movable then Oral surgeon",
            "If movable then Oral surgeon"
        ]
    },
    "others" : {
        "space-between-teeth" : [
            "If space between teeth then Orthodontist"
        ],
        "crowding-teeth" : [
            "If crowding teeth then Orthodontist"
        ],
        "missing-teeth" : [
            "If missing teeth then Prosthodontist"
        ],
        "broken-teeth" : {
            "major" : [
                "if major teeth broken then Oral surgery"
            ],
            "minor" : [
                "if minor teeth broken then Endodontist"
            ]
        }
    }
}
