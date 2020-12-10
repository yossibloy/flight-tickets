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

    @Column({nullable:true})
    OrderNumber:string

    @Column({nullable:true})
    roles:string


    // @OneToMany(()=> Passenger,passenger => passenger.OrderNumber)
    // passenger:Passenger[]



}
