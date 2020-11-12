import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, IPaginationResult, SimpleRequestMsgResponse } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    private readonly BASE_URL = environment.app.path.baseServerUri;

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

    public add(character: Character): Observable<Character> {
        const url = `${this.BASE_URL}/v1/character/add`;

        return this.http.post<Character>(url, character);
    }

    public update(character: Character): Observable<Character> {
        const url = `${this.BASE_URL}/v1/character/update`;

        return this.http.put<Character>(url, character);
    }

    public remove(id: string): Observable<SimpleRequestMsgResponse> {
        const url = `${this.BASE_URL}/v1/character/remove/${id}`;

        return this.http['delete']<SimpleRequestMsgResponse>(url);
    }
}