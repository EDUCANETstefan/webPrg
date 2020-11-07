import { Component } from '@angular/core';

interface iSearch {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webPrg';

  searchLink = '';

  linksArray: iSearch[] = [
    { title: "home", link: "home" },
    { title: "about", link: "about" },
    { title: "contact", link: "contact"}
  ];

  filter(): iSearch[] {
    const result: iSearch[] = [];
    for (const option of this.linksArray) {
      if (option.title.includes(this.searchLink)) {
        result.push(option);
      }
    }
    return result;
  }

}
