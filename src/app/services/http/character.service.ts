import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, IPaginationResult, RequestMsgResponse } from 'src/app/types';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    private readonly BASE_URL = 'http://localhost:3500/api';

    constructor(private http: HttpClient) {}

    public get(
        name: string,
        originPlanet: string,
        recordsByPage: number,
        page: number
    ): Observable<IPaginationResult<Character>> {
        const url = `${this.BASE_URL}/v1/character/list?name=${name}&originPlanet=${originPlanet}` +
            `&records=${recordsByPage}&page=${page}`;

        return this.http.get<IPaginationResult<Character>>(url);
    }

    public load(id: string): Observable<Character> {
        const url = `${this.BASE_URL}/v1/character/load/${id}`;

        return this.http.get<Character>(url);
    }
}