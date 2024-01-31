import { Alchemy } from "alchemy-sdk";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
    apiKey: "a1rVm0nBWv5KZjmOLm1V2pIrjMn_M9PN",
    // Remove the unused 'network' variable if not needed
    // network: 'https://eth-mainnet.g.alchemy.com/v2/a1rVm0nBWv5KZjmOLm1V2pIrjMn_M9PN',
};

// Log the settings for debugging purposes
console.log("Settings:", settings);

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK, which is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
let alchemy;

try {
    alchemy = new Alchemy(settings);
} catch (error) {
    console.error("Error creating Alchemy instance:", error);
}

export default alchemy;
