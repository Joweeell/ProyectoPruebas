
import { describe, it, expect } from "vitest";
import { saludo } from "./saludo";
import { suma } from "./saludo";

describe ('saludo', ()=>{
    it ('saluda bien',()=>{
        expect (saludo()).toBe('Hola hombre');
    });
})

describe ('suma', ()=> {
    it ('Sumo correctamente', ()=>{
        const resultado=suma(8,9);
        expect (resultado).toBe(17);
    })
})