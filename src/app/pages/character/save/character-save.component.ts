import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/http/character.service';
import { Character } from 'src/app/types';

@Component({
    selector: 'character-save',
    templateUrl: './character-save.component.html'
})
export class CharacterSaveComponent implements OnInit {
    public id: string;
    public character: Character = {} as Character;
    public isLoading = true;
    public didError = false;
    public validateForm!: FormGroup;
    public didErrorSaving = false;
    public isSaving = false;
    public wasSavedOk = false;

    constructor(private characterService: CharacterService, private route: ActivatedRoute, private fb: FormBuilder) {
        this.id = this.route.snapshot.paramMap.get('id');
    }

    public ngOnInit(): void {
        this.buildForm();

        if (this.id) {
            this.load();
        } else {
            this.isLoading = false;
        }
    }

    private buildForm(): void {
        this.validateForm = this.fb.group({
            id: [],
            name: [ this.character.name, [ Validators.required ] ],
            weight: [ null, [ Validators.required, Validators.pattern('[0-9]+(\\.[0-9]{1,2})?$') ] ],
            colorHair: [ null, [ Validators.required ] ],
            originPlanet: [ null, [ Validators.required ] ]
        });
    }

    private load(): void {
        this.isLoading = true;

        this.characterService.load(this.id).subscribe(response => {
            this.character = response;
            this.id = this.character.id;
            this.validateForm.setValue(this.character);
        }, () => {
            this.didError = true;
            this.id = null;
        }).add(() => {
            this.isLoading = false;
        });
    }

    private save(): void {
        this.isSaving = true;
        this.didErrorSaving = false;
        this.wasSavedOk = false;

        this.characterService[this.id ? 'update' : 'add'](this.character).subscribe(response => {
            this.character = response;
            this.id = this.character.id;
            this.validateForm.setValue(this.character);
            this.wasSavedOk = true;
        }, () => {
            this.didErrorSaving = true;
        }).add(() => {
            this.isSaving = false;
        });
    }

    public onSubmit(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }

        if (this.validateForm.valid) {
            this.character = this.validateForm.value;

            this.save();
        }
    }
}