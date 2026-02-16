export const healthCheck = (_req, res) => {
    res.status(200).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date()
    });
};
//# sourceMappingURL=health.controller.js.map