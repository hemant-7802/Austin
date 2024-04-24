import crypto from "crypto";

const getPasswordResetToken = () => {
    const resetToken = crypto.randomBytes(20).toString("hex")

    const resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    const resetPasswordExpire = Date.now() + 15 * 60 * 1000

    return resetToken
}

export default getPasswordResetToken;