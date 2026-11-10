/**
 * Express 的 trust proxy 配置值
 * >查看定义:@see {@link trustProxySetting}
 * @type {boolean}
 */
const trustProxySetting = false;
/**
 * CORS 与安全响应头中间件
 * >查看定义:@see {@link corsMiddleware}
 * @param {object} req Express 请求对象
 * @param {object} res Express 响应对象
 * @param {function} next 下一个中间件
 * @returns {void}
 */
const corsMiddleware = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, ' +
        'Accept, Origin, X-CSRF-Token');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length, Content-Range');
    res.setHeader('Access-Control-Max-Age', '86400');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Content-Security-Policy', "frame-ancestors 'self'");

    if (req.method === 'OPTIONS') return res.setHeader('Content-Length', '0'), res.status(204).end();
    next();
};

export { trustProxySetting, corsMiddleware };