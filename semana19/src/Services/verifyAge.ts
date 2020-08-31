import Casino from "../Model/Casino";
import CasinoUser from "../Model/CasinoUser";
import { NATIONALITY } from "../Model/Nationality";

export default function verifyAge(casino: Casino, users: CasinoUser[]): Result {
    const allowed: CasinoUser[] = [];
    const unallowed: CasinoUser[] = [];
  
    for (const user of users) {
      if (casino.location === LOCATION.EUA) {
        if (user.age >= 21) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
      } else if (casino.location === LOCATION.BRAZIL) {
        if (user.age >= 18) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
        break;
      }
    }
  
    return {
      brazilians: {
        allowed: allowed
          .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
          .map((u) => u.name),
      },
      americans: {
        allowed: allowed
          .filter((user) => user.nationality === NATIONALITY.AMERICAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nationality === NATIONALITY.AMERICAN)
          .map((u) => u.name),
      },
    };
  }

  interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }