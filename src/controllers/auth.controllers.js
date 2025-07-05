import { asyncHandler } from "../utils/async-handler";

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});
