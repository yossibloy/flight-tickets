import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm";
import { Optional } from "@nestjs/common";
import { Ordering } from "src/ordering/entities/ordering.entity";
import { isString } from "util";

@Entity()
export class Passenger extends BaseEntity{

    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    firstname:string
    
    @Column()
    lastname:string
    
    @Column()
    birthDate:string
    
    @Column()
    sex:string

    @Column()
    flighitNumber1:number

    @Column({nullable:true})
    flighitNumber2:number

    @Column()
    // @ManyToOne(()=> Ordering ,order=> order.passenger)
    OrderNumber: string;

}
