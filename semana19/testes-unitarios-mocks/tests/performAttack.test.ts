import Character from "../src/Model/Character";
import { performAttack } from "../src/Services/performAttack";

describe("Testing attack performances", () => {
    test("Attack performance test", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Chapolin",
          life: 1500,
          defense: 300,
          strength: 400,
        };
    
        const defender: Character = {
          name: "Racha Cuca",
          life: 1500,
          defense: 200,
          strength: 200,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
      });

    test("Testing behaviour when mock returns an invalid character", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return false;
          });
      
          const attacker: Character = {
            name: "Chapolin",
            life: 1500,
            defense: 300,
            strength: 400,
          };
      
          const defender: Character = {
            name: "Racha Cuca",
            life: 1500,
            defense: 200,
            strength: 200,
          };
      

        try {
        performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
        expect(err.message).toBe("Invalid character");
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1);
        }
    });

    test("Testing behaviour when attacker is set to win", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Chapolin",
          life: 1500,
          defense: 300,
          strength: 9999,
        };
    
        const defender: Character = {
          name: "Racha Cuca",
          life: 1500,
          defense: 200,
          strength: 200,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toBeLessThan(0);
      });
      test("Testing behaviour when defender is set to survive", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Chapolin",
          life: 1500,
          defense: 300,
          strength: 6666,
        };
    
        const defender: Character = {
          name: "Racha Cuca",
          life: 1500,
          defense: 9999,
          strength: 200,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toBeGreaterThan(0);
      });
      test("Testing behaviour when attacker is set to deal massive damage", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Chapolin",
          life: 1500,
          defense: 300,
          strength: 9999,
        };
    
        const defender: Character = {
          name: "Racha Cuca",
          life: 1500,
          defense: 10000,
          strength: 300,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toBe(1500);
      });
      test("Testing behaviour when defender is set to take massive damage", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Chapolin",
          life: 1500,
          defense: 300,
          strength: 10000,
        };
    
        const defender: Character = {
          name: "Racha Cuca",
          life: 1500,
          defense: 0,
          strength: 300,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toBe(-8500);
      });
})