const ErrorResponse = require("../utils/ErrorResponse")


class ErrorHandler {

    static handle(err, req, res, next){
        const error = err;

        return res.status(error.code || 500).json({
            success: false,
            message: error.message || "Internal server error"
        })
    }
}

module.exports = ErrorHandler