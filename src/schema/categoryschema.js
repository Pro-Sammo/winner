import { Schema , model ,models} from "mongoose";


const categorySchema = new Schema({
    name:{
        type:String,
    }
})

const Category = models.Category || model("Category",categorySchema)

export default Category