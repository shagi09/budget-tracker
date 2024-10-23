const jwt=require('jsonwebtoken')
const authenticate = (req, res, next) => {
    const token = req.cookies.jwt; 
    console.log('token:',token)// Assuming you use cookies to store the token
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, 'shalom secret', (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
        req.userId = decoded.id; // Set user ID to request object
        next();
    });
};
module.exports=authenticate

