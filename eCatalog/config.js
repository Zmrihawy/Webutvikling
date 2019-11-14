import { BACKEND_IP } from 'react-native-dotenv'

const backendPORT = "5000";
const backendIP = "10.22.43.203";

console.log("CHECK HERE", process.env);
console.log("CHECK HERE", BACKEND_IP);

const backendURL = "http://" + backendIP + ":" + backendPORT + "/api/"

export { backendURL };
