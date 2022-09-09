import {DB_URL} from '../config/variables.js'
import mongoose from 'mongoose';
mongoose.connect(DB_URL, {
  useNewUrlParser:true,
  useUnifiedTopology:true
}, () => {
  console.log(DB_URL);
  console.log(`DB up and running`);
})