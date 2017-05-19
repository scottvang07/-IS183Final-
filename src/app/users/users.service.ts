import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

    // this is where the variables go

    apiUrl: string;

    constructor(
        private http: Http
    ) {
        // do init stuff
        //HOW TO TAP INTO THE API AND MONGODB STRUCTURE 
        this.apiUrl = 'http://34.209.151.254:3000/api/v1'
    }
    // functions for CRUD (ensure the variable are changed)
    // get and display all users
    getUsers(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/user`).toPromise().then((resp) => {
            let users = resp.json();
            console.log('users', users);
            return users;
        });
    }
    //get and display one single user
    getUserById(userId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/user/id/${userId}`).toPromise().then((resp) => {
            let user = resp.json();
            console.log('user', user);
            return user;
        });
    }
    //use for post - to add a new user 
    addUser(user): Promise<Object> {
        return this.http.post(`${this.apiUrl}/user`, user).toPromise().then((resp) => {
            let book = resp.json();
            console.log('user', user);
            return user;
        });
    }
    // delete a user 
    deleteUser(id): Promise<Object> {
        console.log(`from user.service delete method......`);
        return this.http.delete(`${this.apiUrl}/user/id/${id}`).toPromise().then((resp) => {
            let status = resp.json();
            console.log('user', status);
            return status;
        });
    }
    // patch - edit a user
    updateUser(id, user): Promise<Object> {
        return this.http.put(`${this.apiUrl}/user/id/${id}`, user).toPromise().then((resp) => {
            let user = resp.json();
            console.log('user', user);
            return user;
        });
    }
    

}
