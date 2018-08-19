export class Quote {
  author: string;
  company: string;
  text: string;

  constructor ({ author: author, company: company, text: text }) {
    this.author = author;
    this.company = company;
    this.text = text;
  }
}


