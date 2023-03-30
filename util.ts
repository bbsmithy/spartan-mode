export const isToday = (date: string) => {
    const today = new Date()
    const d = new Date(date)
    return d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear()
}

export const displayDate = (date: string) => {
    if (isToday(date)) {
        return "Today"
    }
    return new Date(date).toDateString()
}

export const getSpartanLogo = (key: string) => {
    switch (key) {
        case "10":
        case "9":
            return require("./assets/badges/9.png")
        case "8":
            return require("./assets/badges/8.png")
        case "7":
            return require("./assets/badges/7.png")
        case "6":
            return require("./assets/badges/6.png")
        case "5":
            return require("./assets/badges/5.png")
        case "4":
            return require("./assets/badges/4.png")
        case "3":
            return require("./assets/badges/3.png")
        case "2":
            return require("./assets/badges/2.png")
        case "1":
            return require("./assets/badges/1.png")
        case "0":
            return require("./assets/badges/0.png")
        default:
            return require("./assets/badges/0.png")
    }
}

export const spartanRanking = {
    "10": {
        "rank": "Polemarch",
        "description": "Commander-in-chief of the Spartan army.",
        "average": 90,
        "badge": getSpartanLogo("9"),
        "key": "9"
    },
    "9": {
      "rank": "Polemarch",
      "description": "Commander-in-chief of the Spartan army.",
      "key": "9",
      "average": 90,
        "badge": getSpartanLogo("9")
    },
    "8": {
      "rank": "Strategos",
      "description": "General who commanded a division of the Spartan army.",
        "key": "8",
        "average": 80,
        "badge": getSpartanLogo("8")
    },
    "7": {
      "rank": "Harmost",
      "description": "Spartan governor responsible for maintaining order and security in conquered territories.",
        "key": "7",
        "average": 70,
        "badge": getSpartanLogo("7")
        
    },
    "6": {
      "rank": "Lochagos",
      "description": "Captain who led a company of soldiers.",
        "key": "6",
        "average": 60,
        "badge": getSpartanLogo("6")
    },
    "5": {
      "rank": "Enomotarch",
      "description": "Sergeant who led a platoon of soldiers.",
        "key": "5",
        "average": 50,
        "badge": getSpartanLogo("5")
    },
    "4": {
        "rank": "Hekatontarch",
        "description": "Sergeant who led a group of one hundred soldiers.",
        "key": "4",
        "average": 40,
        "badge": getSpartanLogo("4")
    },
    "3": {
      "rank": "Pentekontarch",
      "description": "Sergeant who led a group of fifty soldiers.",
        "key": "3",
        "average": 30,
        "badge": getSpartanLogo("3")
    },

    "2": {
        "rank": "Spartiate",
        "description": "Full Spartan citizen who was trained as a soldier from a young age, and formed the backbone of the Spartan army.",
        "key": "2",
        "average": 20,
        "badge": getSpartanLogo("2")
    },
    "1": {
      "rank": "Hippeis",
      "description": "Spartan cavalry, composed of a social class of wealthy Spartan citizens who provided their own horses and equipment.",
        "key": "1",
        "average": 10,
        "badge": getSpartanLogo("1")
    },
    "0": {
      "rank": "Perioikoi",
      "description": "Non-citizen inhabitants of Sparta who were responsible for crafts, trade, and other non-military activities, and also served in the Spartan army as auxiliary troops.",
        "key": "0",
        "average": 0,
        "badge": getSpartanLogo("0")
    }
  }
  