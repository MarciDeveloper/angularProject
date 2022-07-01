import { AuthorsService } from './authors/authors.service';

import { Component } from '@angular/core';

@Component({
    selector: 'authors',
    template: `
    <h2>{{ title }}</h2>
    <ul>
          <li *ngFor="let aut of author">
            {{ aut }}
          </li>
    </ul>
    ` 
})
export class AuthorComponent {
    title = "List of Authors";
    author;

    constructor(service: AuthorsService) {
        this.author = service.getAuthors();
    }

    // Logic for calling HTTP service
}