// import { Router } from "./router.js";

// (async () => {
//   try {
//     const router = new Router();
//     await router.init();
//     console.log("Router initialized successfully");
//   } catch (error) {
//     console.error("Error initializing router:", error);
//   }
// })();

import { Router } from "./router.js";

(async () => {
  const router = new Router();
  router.init();
})();
