import { validateCharacter } from './../src/Services/validateCharacter';
import Character from "../src/Model/Character"


describe("Testing character validation", () => {
    test("Testing behaviour when 'name' field is empty", () => {
        const character: Character = {
            name: "",
            life: 1500,
            strength: 100,
            defense: 50
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })
    test("Testing behaviour when 'life' field is empty", () => {
        const character: Character = {
            name: "Jack",
            life: 0,
            strength: 100,
            defense: 50
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })
    test("Testing behaviour when 'strength' field is empty", () => {
        const character: Character = {
            name: "Carlitos",
            life: 1500,
            strength: 0,
            defense: 50
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })
    test("Testing behaviour when 'defense' field is empty", () => {
        const character: Character = {
            name: "R10",
            life: 1500,
            strength: 90,
            defense: 0
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })
    test("Testing behaviour when 'life' field has negative values", () => {
        const character: Character = {
            name: "R10",
            life: -1500,
            strength: 90,
            defense: 0
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })
    test("Testing behaviour when 'life' and 'strength' fields are empty", () => {
        const character: Character = {
            name: "R10",
            life: 0,
            strength: 0,
            defense: 50
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })
    test("Testing behaviour when all fields are correct", () => {
        const character: Character = {
            name: "Scorpion",
            life: 1500,
            strength: 300,
            defense: 500,
          };

          const result = validateCharacter(character);
      
          expect(result).toEqual(true);
    })
})