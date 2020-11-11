import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/http/character.service';
import { Character, RequestErrorResponse } from 'src/app/types';

@Component({
    selector: 'character-list',
    templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {
    public errorMsg: string;
    public characters: Character[];
    public recordsByPage = 10;
    public currentPage = 1;
    public totalRecords = 0;
    public isLoading = true;
    public nameFilter = {
        visible: false,
        searchText: ''
    };
    public originPlaneFilter = {
        visible: false,
        searchText: ''
    };

    constructor(private characterService: CharacterService, private router: Router) {}

    public ngOnInit(): void {
        this.load()
    }

    public load(): void {
        this.isLoading = true;

        const { searchText: nameSearchText } = this.nameFilter;
        const { searchText: originPlanetSearchText } = this.originPlaneFilter;

        this.characterService.get(nameSearchText, originPlanetSearchText, this.recordsByPage, this.currentPage)
            .subscribe(response => {
                this.characters = response.records;
                this.totalRecords = response.totalRecords;
            }, (error: RequestErrorResponse) => {
                this.errorMsg = error.message;
            }, () => {
                this.isLoading = false
            });
    }

    public onChangeQueryParams(): void {
        this.load();
    }

    public onResetNameFilter(): void {
        this.nameFilter.searchText = '';
        this.load();
    }

    public onResetOriginPlaneFilter(): void {
        this.originPlaneFilter.searchText = '';
        this.load();
    }
}