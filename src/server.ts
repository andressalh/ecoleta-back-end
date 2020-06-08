import express from 'express';
import path from 'path';
import routes from  './routes';
const app = express();
import { errors} from 'celebrate';

const cors = require("cors");
const PORT : string|number = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(PORT,() => console.log(`hosting @${PORT}`));