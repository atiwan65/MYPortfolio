module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {   
            educations: String,
            firstname: String,
            lastname: String,
            school: String


        },  
        {
           
        }

    );

    const educationdata = mongoose.model("education_data",schema)
    return educationdata

}