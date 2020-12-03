import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm"
import { Passenger } from "src/passengers/entities/passenger.entity"
@Entity()
export class Ordering {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    firstname:string
    
    @Column()
    lastname:string

    @Column()
    phonNumber:number

    @Column()
    email:string

    @Column()
    OrderNumber:string



    // @OneToMany(()=> Passenger,passenger => passenger.OrderNumber)
    // passenger:Passenger[]



}
