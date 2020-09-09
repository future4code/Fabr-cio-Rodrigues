import { UserRole, User, stringToUserRole } from "../../src/model/User";
import { UserBusiness } from "../../src/business/UserBusiness";

describe("Testing UserBusiness.getProfile", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'User not found' when user does not exist", async () => {
        const getUserById = jest.fn(
          (id: string) =>
            new User(
              "id",
              "Astrodev",
              "astrodev@gmail.com",
              "hash",
              stringToUserRole("ADMIN")
            )
        );
    
        userDatabase = { getUserById };
    
        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
    
        const user = await userBusiness.getProfile("id");
    
        expect(getUserById).toHaveBeenCalledWith("id");
        expect(user).toEqual({
          id: "id",
          name: "Astrodev",
          email: "astrodev@gmail.com",
          role: UserRole.ADMIN,
        });
      });
      test("Should return an object with the user's infos when user does exist", async () => {
        const getUserById = jest.fn(
          (id: string) =>
            new User(
              "id",
              "vedortsa",
              "astrodev@gmail.com",
              "hash",
              stringToUserRole("ADMIN")
            )
        );
    
        userDatabase = { getUserById };

        try {
            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
              );
          
              const user = await userBusiness.getProfile("id");
        
        } catch (err) {
            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
              );
          
             ;
    
        expect(err.errorCode).toBe(404);
        expect(err.message).toBe("User not found");
        
    }
      });
});
