const server = require("./server");

const port = 4001;
server.listen(port, () => console.log(`Running on port ${port}`));
