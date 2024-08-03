import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
// import { isAuthenticated } from "./config";

export const withAuth = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // Check if the user is authenticated
    // const authenticated = isAuthenticated(req, res);

    // if (!authenticated) {
    //   // User is not authenticated, handle unauthorized access (e.g., redirect to login page)
    //   res.writeHead(302, { Location: "/login" });
    //   res.end();
    //   return;
    // }

    // User is authenticated, continue to the actual route handler
    return handler(req, res);
  };
};
