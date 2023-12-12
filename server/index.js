const app = require("./src/app.js");

const PORT = 3001;

try {
    app.listen(PORT, () => {
        console.log(`Server listening on port`, PORT);
    });
} catch (error) {
    console.error(error);
}
