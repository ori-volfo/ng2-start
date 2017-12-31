import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
<header>
    <nav class="navbar navbar-inverse">
        <div class="navabr-header">
            <a href="/" class="navbar-brand">My Angular 2 app!</a>
        </div>
    </nav>
</header>
<main>
    <div class="row">
        <div class="col-sm-4">
            <div *ngIf="users">
                <ul class="list-group users-list">
                    <li *ngFor="let user of users" (click)="selectedUser(user)" [class.active]="user === activeUser" class="list-group-item">The user is {{user.name}} {{user.username}}.</li>
                </ul>
            </div>
        </div>
        <div class="col-sm-8">
            <div class="jumbotron" *ngIf="activeUser">
                <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>
            </div>
            <div class="jumbotron" *ngIf="!activeUser">
                <span class="glyphicon glyphicon-hand-left"></span>
                <h2>Choose a User</h2>
            </div>
        </div>
    </div>
    
    
</main>

<footer class="text-center">
    copyright &copy; 2017
</footer>
    `, styles: [`
        .user-list li {cursor: pointer}
        .jumbotron .glyphicon{font-size: 80px;}
    `]
})

export class AppComponent {
    activeUser;
    users = [
        {id: 33, name: 'Ori', username: 'Volfo'},
        {id: 14, name: 'Morty', username: 'Mort'},
        {id: 55, name: 'Rick', username: 'Sanchez'}
        ];

    selectedUser(user){
        this.activeUser = user;
    }
}