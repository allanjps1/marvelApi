import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Heroe } from 'model/Heroe';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})

@Injectable()
export class HeroesListComponent implements OnInit {

  private marvelApiUrl: string = 'https://gateway.marvel.com:443';
  private charactersUrl: string = '/v1/public/characters?ts=1&apikey=a5f1e3b83db62cae20ee545f968d71ee'

  constructor(private http: Http) {

    let requestUrl = this.marvelApiUrl + this.charactersUrl;

    this.http.get(requestUrl)
      .map((response: Response) => <Heroe>response.json().data.results)
      .do((data: Heroe) => console.log(data))
      .subscribe();
  }

  ngOnInit() {
  }

}
