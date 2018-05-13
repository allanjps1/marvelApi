import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Md5 } from 'ts-md5/dist/md5';

import { Heroe } from 'model/Heroe';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})

@Injectable()
export class HeroesListComponent implements OnInit {

  private marvelApiUrl: string = 'https://gateway.marvel.com:443';
  private charactersUrl: string = '/v1/public/characters?ts=[ts]&apikey=a5f1e3b83db62cae20ee545f968d71ee'

  data: any[];
  public heroes: Heroe[];

  constructor(private http: Http) {
    this.getCharacters().then((data) => {
      this.heroes = data;
      //console.log(data);
    });
  }

  getCharacters(): Promise<Heroe[]> {

    let requestUrl = this.marvelApiUrl + this.charactersUrl;

    let md5 = new Md5();
    var timestamp = Number(new Date());
    var hash = Md5.hashStr(timestamp + 'c4d80a99f54979efdd7232f080e34569315c9860');

    requestUrl.replace("[ts]",hash.toString());

    return this.http.get(requestUrl)
      .map((response: Response) => {
        return response.json().data.results.map(item => {
          console.log(item);
          return new Heroe(
            item.id,
            item.name,
            item.description,
            item.thumbnail.path,
            item.thumbnail.extension
          );
        });
      }).toPromise();
  }

  ngOnInit() {



  }

}
