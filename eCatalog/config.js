const backendPORT = "5000";
// const backendIP = "10.22.43.203";
const backendIP = "it2810-30.idi.ntnu.no";

console.log("CHECK HERE", process.env);

const backendURL = "http://" + backendIP + ":" + backendPORT + "/api/";

export { backendURL };
