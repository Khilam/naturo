// module.exports = isAdminOrIsArtist = function (req, res, next) {
// 	if (req.user.role == 'Admin' || 'User') {
// 		return next();
// 	}
// 	return res.status(400).send({ msg: 'you are not an admin...' });
// };