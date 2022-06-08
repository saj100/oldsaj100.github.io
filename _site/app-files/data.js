var APP_DATA = {
  "scenes": [
    {
      "id": "0-facade",
      "name": "Facade",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.13378562006092665,
          "pitch": 0.22044798620676787,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0978154880917046,
          "pitch": -0.12108158035173133,
          "title": "The Name: SAJ<div><br></div>",
          "text": '<iframe style="position: relative; width:100%; height:100%" src="/history/name.html"></iframe>'
        }
      ]
    },
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.39212500291642627,
          "pitch": 0.144701044336756,
          "rotation": 0,
          "target": "2-sanctuary"
        },
        {
          "yaw": 1.7535662582201326,
          "pitch": 0.0394586381462414,
          "rotation": 0,
          "target": "3-second_floor_hallway"
        },
        {
          "yaw": -2.805950632597753,
          "pitch": -0.006021662402893924,
          "rotation": 0,
          "target": "0-facade"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sanctuary",
      "name": "Sanctuary",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3907207140943783,
          "pitch": 0.04108722130005482,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.20645656067686247,
          "pitch": 0.03892643958529618,
          "title": "Reconstructionism",
          "text": '<iframe style="position: relative; width:100%; height:100%" src="/religion/reconstructionism.html"></iframe>'
        }
      ]
    },
    {
      "id": "3-second_floor_hallway",
      "name": "Second_Floor_Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.7552428031598026,
        "pitch": 0.18318345005285686,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.19661930679869677,
          "pitch": 0.047482930066653495,
          "rotation": 0,
          "target": "5-cantor_office"
        },
        {
          "yaw": -0.2121043653218031,
          "pitch": 0.3248922696624259,
          "rotation": 1.5707963267948966,
          "target": "6-education_office"
        },
        {
          "yaw": -1.4408268579680907,
          "pitch": 0.13953237896158655,
          "rotation": 1.5707963267948966,
          "target": "4-rabbi_office"
        },
        {
          "yaw": 1.6526761833020363,
          "pitch": 0.2936752890807526,
          "rotation": 4.71238898038469,
          "target": "8-kaplan_lounge"
        },
        {
          "yaw": 1.6555341544480342,
          "pitch": 0.0716840619601875,
          "rotation": 0,
          "target": "7-social_hall"
        },
        {
          "yaw": -2.9278832567158055,
          "pitch": 0.08705053790182937,
          "rotation": 4.71238898038469,
          "target": "9-school"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4504780622933708,
          "pitch": -0.06603830427591006,
          "title": "Rabbi's Office",
          "text": "Through here to learn about SAJ's Rabbis"
        }
      ]
    },
    {
      "id": "4-rabbi_office",
      "name": "Rabbi_Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1611769026343612,
          "pitch": 0.2011293864060164,
          "rotation": 0,
          "target": "3-second_floor_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cantor_office",
      "name": "Cantor_Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0248501136323007,
          "pitch": 0.2727904896526798,
          "rotation": 0,
          "target": "3-second_floor_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-education_office",
      "name": "Education_Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1643871372626133,
          "pitch": 0.12118331089682854,
          "rotation": 17.27875959474387,
          "target": "3-second_floor_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-social_hall",
      "name": "Social_Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1017408150902313,
          "pitch": 0.11494848656262668,
          "rotation": 0,
          "target": "8-kaplan_lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kaplan_lounge",
      "name": "Kaplan_Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7095124431576227,
          "pitch": 0.1158842034489016,
          "rotation": 0,
          "target": "7-social_hall"
        },
        {
          "yaw": -2.4240924013979033,
          "pitch": 0.0834320457513762,
          "rotation": 0,
          "target": "3-second_floor_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-school",
      "name": "School",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6490006825864008,
          "pitch": 0.1593437405592173,
          "rotation": 7.853981633974483,
          "target": "11-school_room_302"
        },
        {
          "yaw": 0.49059290127982,
          "pitch": 0.016513934044311895,
          "rotation": 4.71238898038469,
          "target": "10-school_room_300"
        },
        {
          "yaw": -2.7957442527607466,
          "pitch": 0.1516597394267194,
          "rotation": 10.995574287564278,
          "target": "3-second_floor_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-school_room_300",
      "name": "School_Room_300",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.524636875042729,
          "pitch": 0.0651409856076608,
          "rotation": 4.71238898038469,
          "target": "9-school"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-school_room_302",
      "name": "School_Room_302",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3360339149313756,
          "pitch": 0.1166830066745348,
          "rotation": 4.71238898038469,
          "target": "9-school"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SAJ_Experience",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
