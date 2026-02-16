export const errorHandler = (err, _req, res, _next) => {
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error"
    });
};
//# sourceMappingURL=errorHandler.js.map