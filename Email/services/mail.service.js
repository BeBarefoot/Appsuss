import { utilService } from "./util.service.js";
import { storageService } from "./storage.service.js";

export const mailService = {
  query,
  getMailById,
  deleteMail,
  nextMail
};

const MAIL_KEY = "mails";

var mailDB = [];

function deleteMail(mailId) {
  var mail = mailDB.find(mail => mail.id === mailId);
  mailDB.splice(mail, 1);
  storageService.store(MAIL_KEY, mailDB);
}

function getMailById(id) {
  return query().then(mails => mails.find(mail => mail.id === id));
}

function nextMail(mailId) {
    const mailIdx = mailDB.findIndex(mail => mail.id === mailId);
    const mail = (mailDB[mailIdx + 1]) ? mailDB[mailIdx + 1] : mailDB[0]
    return Promise.resolve(mail)
}

function query() {
  var mails = storageService.load(MAIL_KEY);
  if (!mails) {
    mails = allMails;
    storageService.store(MAIL_KEY, mails);
  }
  mailDB = mails;
  return Promise.resolve(mailDB);
}

var allMails = [
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  },
  {
    id: utilService.makeId(),
    subject: "metus hendrerit",
    from: "Name Lastname",
    content: utilService.makeLorem(90)
  }
];
