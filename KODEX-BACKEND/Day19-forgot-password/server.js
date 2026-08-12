import "dotenv/config"
import app from "./src/app.js"
import connectDB from "./src/config/db.js"

const port = Number(process.env.PORT) || 5000

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running successfully on port`, port)
        })
    })
    .catch((error) => {
        console.error("Server failed to start:", error.message)
        process.exit(1)
    })
