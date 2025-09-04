// enhancedRequestCounter.js
let requestCount = 0;
let firstRequestTime = null;
let lastRequestTime = null;

export const enhancedRequestCounter = (req, res, next) => {
    requestCount++;
    const now = new Date();
    
    if (!firstRequestTime) {
        firstRequestTime = now;
    }
    lastRequestTime = now;
    
    const timeSinceFirstRequest = Math.floor((now - firstRequestTime) / 1000);
    const requestsPerMinute = timeSinceFirstRequest > 0 
        ? Math.round((requestCount / timeSinceFirstRequest) * 60) 
        : 0;
    
    // Add detailed headers
    res.setHeader('X-Total-Requests', requestCount);
    res.setHeader('X-Requests-Remaining', 1000 - requestCount);
    res.setHeader('X-First-Request', firstRequestTime.toISOString());
    res.setHeader('X-Last-Request', lastRequestTime.toISOString());
    res.setHeader('X-Requests-Per-Minute', requestsPerMinute);
    res.setHeader('X-Time-Elapsed-Seconds', timeSinceFirstRequest);
    
    console.log(`Request #${requestCount} | Remaining: ${1000 - requestCount} | RPM: ${requestsPerMinute}`);
    
    next();
};

export const getRequestStats = () => ({
    totalRequests: requestCount,
    firstRequest: firstRequestTime,
    lastRequest: lastRequestTime,
    requestsRemaining: 1000 - requestCount,
    timeElapsed: firstRequestTime ? Math.floor((new Date() - firstRequestTime) / 1000) : 0
});

export const resetCounter = () => {
    requestCount = 0;
    firstRequestTime = null;
    lastRequestTime = null;
    console.log('Request counter completely reset');
};
