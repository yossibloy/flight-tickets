import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Flight {

    @PrimaryGeneratedColumn()
    numFlyght: number

    @Column()
    origin:string

    @Column()
    target:string

    @Column()
    depart:string

    @Column()
    prise:number

    @Column()
    company:string

    @Column()
    duration:string

    @Column()
    takeoff:string

    @Column()
    landing:string

    @Column()
    place:number
  
}
