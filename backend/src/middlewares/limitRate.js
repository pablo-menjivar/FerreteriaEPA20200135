// Importo la libreria para limitar solicitudes HTTP
import rateLimit from 'express-rate-limit';
import { requestCounter } from './requestCounter.js';
// Configuración del limitador
export const limiter = rateLimit({ 
    windowMs: 15 * 60 * 1000, 
    max: 1000, 
    message: { status: 409, error: "Too many requests." }, // Duración de 15 minutos y límite de 1000 solicitudes
    handler: (req, res) => {
        res.setHeader('X-RateLimit-Limit', '1000');
        res.setHeader('X-RateLimit-Remaining', 0);
        res.setHeader('X-RateLimit-Reset', new Date(Date.now() + 15 * 60 * 1000).toISOString());
        res.status(429).json({ 
            status: 429, 
            error: "Too many requests. Please try again in 15 minutes.",
            limit: 1000,
            window: "15 minutes"
        });
    }
}) 
// Middleware combinado que muestra cuenta + límites
export const trackingLimiter = [requestCounter, limiter];