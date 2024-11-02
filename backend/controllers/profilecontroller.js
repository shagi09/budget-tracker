const User=require('../models/user')

module.exports.profile_Get= async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json({ username: user.name, email: user.email });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports.profile_Put = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Check if the user exists
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Update the user information
        user.name = name;
        user.email = email;

        const updatedUser = await user.save(); // Save the updated user

        res.status(200).json({ name: updatedUser.name, email: updatedUser.email });
    } catch (err) {
        console.error('Error updating user:', err); // Log the error for debugging
        res.status(500).json({ error: err.message });
    }
};