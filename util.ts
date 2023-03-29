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

export const spartanRanking = {
    "10": {
        "rank": "Polemarch",
        "description": "Commander-in-chief of the Spartan army."
    },
    "9": {
      "rank": "Polemarch",
      "description": "Commander-in-chief of the Spartan army."
    },
    "8": {
      "rank": "Strategos",
      "description": "General who commanded a division of the Spartan army."
    },
    "7": {
      "rank": "Harmost",
      "description": "Spartan governor responsible for maintaining order and security in conquered territories."
    },
    "6": {
      "rank": "Spartiate",
      "description": "Full Spartan citizen who was trained as a soldier from a young age, and formed the backbone of the Spartan army."
    },
    "5": {
      "rank": "Lochagos",
      "description": "Captain who led a company of soldiers."
    },
    "4": {
      "rank": "Enomotarch",
      "description": "Sergeant who led a platoon of soldiers."
    },
    "3": {
      "rank": "Pentekontarch",
      "description": "Sergeant who led a group of fifty soldiers."
    },
    "2": {
      "rank": "Hekatontarch",
      "description": "Sergeant who led a group of one hundred soldiers."
    },
    "1": {
      "rank": "Hippeis",
      "description": "Spartan cavalry, composed of a social class of wealthy Spartan citizens who provided their own horses and equipment."
    },
    "0": {
      "rank": "Perioikoi",
      "description": "Non-citizen inhabitants of Sparta who were responsible for crafts, trade, and other non-military activities, and also served in the Spartan army as auxiliary troops."
    }
  }
  