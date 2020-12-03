import { isString } from "util"

export class CreatePassengerDto {

    id?: number
    firstname?: string
    lastname?: string
    birthDate: string
    sex: string
    flightid?: number
    flighitNumber1?:number
    flighitNumber2?:number
    OrderNumber?: string

}
