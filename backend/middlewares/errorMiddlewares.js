// notFound()- for handing error when page not found

const { modelName } = require("../models/userModel");

const notFound = (req, res, next) => {
    const error = new Error(`Not found -${req.originalUrl}`);
    res.status(404);
    next(error);
};

//  errorHandler() for handing general error- here req is successfull(page is found) and res gives error.
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    })
}

module.exports = { errorHandler, notFound };