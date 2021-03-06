import { Directive } from '@angular/core'
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms'

@Directive({
  selector: '[validateLocation]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true },
  ],
})
export class LocationValidator implements Validator {
  constructor() {}

  validate(formGroup: FormGroup): { [key: string]: any } | null {
    const addressControl = formGroup.controls.address
    const cityControl = formGroup.controls.city
    const countryControl = formGroup.controls.country
    const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null
    } else {
      return { validateLocation: false }
    }
  }
}
