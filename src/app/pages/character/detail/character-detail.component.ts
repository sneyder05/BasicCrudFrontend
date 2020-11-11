import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/http/character.service';
import { Character } from 'src/app/types';

@Component({
    selector: 'character-load',
    templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent implements OnInit {
    private id: string;
    public character: Character = {} as Character;
    public isLoading = true;

    constructor(private characterService: CharacterService, private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');

        this.load();
    }

    private load(): void {
        this.characterService.load(this.id).subscribe(response => {
            this.character = response;
            this.isLoading = false;
        });
    }
}