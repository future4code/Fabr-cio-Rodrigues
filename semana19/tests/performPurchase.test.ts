import performPurchase from "../src/Services/performPurchase"
import User from "../src/Model/User"

describe("Purchase tests", () => {
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Flash",
            balance: 100,
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual(undefined)
})