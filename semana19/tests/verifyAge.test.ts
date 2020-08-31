import CasinoUser from "../src/Model/CasinoUser"
import { NATIONALITY } from "../src/Model/Nationality";
import Casino from "../src/Model/Casino";
import verifyAge from "../src/Services/verifyAge";

describe("Casino age verification tests", () => {
    test("1 brazilian allowed", () => {
        const brazilian: CasinoUser = {
          name: "Astrodev",
          age: 19,
          nationality: NATIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Astrodev"]);
      });

      test("1 american allowed", () => {
        const brazilian: CasinoUser = {
          name: "Astrodev",
          age: 19,
          nationality: NATIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.allowed).toEqual(["Astrodev"]);
      });

      test("No one is allowed", () => {
        const brazilian: CasinoUser = {
          name: "Astrodev BR",
          age: 19,
          nationality: NATIONALITY.BRAZILIAN,
        };
    
        const american: CasinoUser = {
          name: "Astrodev EUA",
          age: 19,
          nationality: NATIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.unallowed).toEqual([
          "Astrodev EUA",
          "Astrodev EUA",
        ]);
      });

      test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: CasinoUser = {
          name: "Astrodev BR",
          age: 19,
          nationality: NATIONALITY.BRAZILIAN,
        };
    
        const american: CasinoUser = {
          name: "Astrodev EUA",
          age: 21,
          nationality: NATIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
      });

      test("1 brazilian allowed", () => {
        const brazilian: CasinoUser = {
          name: "Astrodev",
          age: 19,
          nationality: NATIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
      });

      test("1 american allowed", () => {
        const brazilian: CasinoUser = {
          name: "Astrodev",
          age: 19,
          nationality: NATIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.unallowed.length).toBe(0);
      });

      test("No one allowed", () => {
        const brazilian: CasinoUser = {
          name: "Astrodev BR",
          age: 19,
          nationality: NATIONALITY.BRAZILIAN,
        };
    
        const american: CasinoUser = {
          name: "Astrodev EUA",
          age: 19,
          nationality: NATIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
    
        expect(result.brazilians.unallowed).toContain("Astrodev BR");
        expect(result.americans.unallowed).toContain("Astrodev EUA");
      });

      test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: CasinoUser = {
          name: "Astrodev BR",
          age: 19,
          nationality: NATIONALITY.BRAZILIAN,
        };
    
        const american: CasinoUser = {
          name: "Astrodev EUA",
          age: 21,
          nationality: NATIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2);
      });
})