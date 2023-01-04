import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

export class CustomWineValidator implements Validator {
    private names: Array<string> = ['Laya', 'K-Naina', 'Verdejo', 'Monastrell' ];

    validate(control: AbstractControl): ValidationErrors | null {
        console.log(control.value);
        const forbidden = !this.names.includes(control.value);
        return forbidden ? {forbiddenName: {value: control.value}} : null;
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }
    
}


