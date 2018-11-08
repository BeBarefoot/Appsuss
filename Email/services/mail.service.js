import {
  utilService
} from "./util.service.js"
import {
  storageService
} from "./storage.service.js"

export const mailService = {
  query,
  getMailById,
  deleteMail,
  nextMail,
  updateMail,
  getImportant
}

const MAIL_KEY = "mails"

var mailDB = []

function getImportant() {
  var mails = storageService.load(MAIL_KEY)
  if (!mails) {
    mails = null
  }
  let important =  mails.filter(mail => {
    return mail.isImportant===true
  })
  return Promise.resolve(important)
}

function deleteMail(mailId) {
  var mail = mailDB.find(mail => mail.id === mailId)
  mailDB.splice(mail, 1)
  storageService.store(MAIL_KEY, mailDB)
  query()
}

function updateMail(mailId) {
  let mail = mailDB.find(mail => mail.id === mailId)
  let currMail = mail
  let mailIndex = mailDB.indexOf(mail)
  mailDB.splice(mailIndex, 1, currMail)
  storageService.store(MAIL_KEY, mailDB)
}

function getMailById(id) {
  return query().then(mails => mails.find(mail => mail.id === id))
}

function nextMail(mailId) {
  const mailIdx = mailDB.findIndex(mail => mail.id === mailId)
  const mail = mailDB[mailIdx + 1] ? mailDB[mailIdx + 1] : mailDB[0]
  return Promise.resolve(mail)
}

function query() {
  var mails = storageService.load(MAIL_KEY)
  if (!mails) {
    mails = allMails
    storageService.store(MAIL_KEY, mails)
  }
  mailDB = mails
  return Promise.resolve(mailDB)
}

var allMails = [{
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'14.6.1984'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'17.8.1951'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'7.1.2011'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'16.3.2406'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'14.6.1984'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'17.8.1951'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'7.1.2011'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'16.3.2406'
  },{
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'14.6.1984'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'17.8.1951'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'7.1.2011'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'16.3.2406'
  },{
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'14.6.1984'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'17.8.1951'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'7.1.2011'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'16.3.2406'
  },{
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'14.6.1984'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'17.8.1951'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'7.1.2011'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'16.3.2406'
  },{
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'14.6.1984'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'17.8.1951'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'7.1.2011'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'16.3.2406'
  },{
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'14.6.1984'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'17.8.1951'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'7.1.2011'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'16.3.2406'
  },{
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'14.6.1984'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'17.8.1951'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'7.1.2011'
  },
  {
    id: utilService.makeId(),
    subject: "Important stuff!!",
    from: "John Mcgee",
    content: utilService.makeLorem(90),
    email: "fakeName@gmail.com",
    isImportant: false,
    isRead: false,
    date:'16.3.2406'
  },
]