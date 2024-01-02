import { Router } from "express";
import { changePassword, getChannelProfile, getUser, getWatchHistory, loginUser, logoutUser, refreshAccessToken, registerUser, updateAccontDetails, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

    router.route("/login").post(loginUser)

    // secured routes
    router.route("/logout").post(verifyJWT, logoutUser)
    router.route("/refresh-token").post(refreshAccessToken)
    router.route("/change-password").post(verifyJWT, changePassword)
    router.route("/getUser").get(verifyJWT, getUser)
    router.route("/update-account").patch(verifyJWT, updateAccontDetails)
    router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
    router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"),updateUserCoverImage)

    router.route("/c/:username").get(verifyJWT, getChannelProfile)
    router.route("/history").get(verifyJWT, getWatchHistory)

export default router