const multer = require('multer');
let upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => cb(null, 'uploads/'),
        filename: (req, file, cb) => cb(null, file.originalname)
    })
});

module.exports = upload;

