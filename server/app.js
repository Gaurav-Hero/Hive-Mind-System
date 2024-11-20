import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const server = http.createServer(app); // Use http.createServer properly
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serves static files
app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('views', './views'); // Set the views directory

// Ensure the upload directory exists
const uploadDir = './public/images';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup for profile pictures
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Set the destination folder
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/; // Allowed extensions
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if (extname && mimeType) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'));
        }
    }
});

// Routes
import userRouter from './routers/user.routes.js'
app.use('/api', userRouter)


app.get('/', (req, res) => {
    res.send('Hello, this is testing!');
});

// Route for uploading profile pictures
app.post('/upload', upload.single('profilePic'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload an image file!' });
    }
    res.status(200).send({
        message: 'Image uploaded successfully!',
        file: req.file
    });
});

// Error handler for file filter issues
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).send({ message: err.message });
    } else if (err) {
        return res.status(400).send({ message: err.message });
    }
    next();
});

// Start the server
server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is live @ http://localhost:${port}`);
});
