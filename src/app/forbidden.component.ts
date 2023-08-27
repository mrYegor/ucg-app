import { Component} from '@angular/core';
  
@Component({
    selector: 'not-found-app',
    template: `
                <h1>you don't have permission to access this page</h1>
                <h3>403</h3>
                <h2><a routerLink="/">Go back &lAarr;</a></h2>
                `,
    styles: [`
                h1, h2, h3 {
                    font-family: Helvetica, sans-serif;
                    text-transform: uppercase;
                    text-align: center;
                }

                a {
                    text-decoration: none;
                    color: #000;

                    &:hover {
                        color: #412bad;
                    }
                }
    `]
})
export class ForbiddenComponent { }