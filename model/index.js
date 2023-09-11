const mongoose = require ('mongoose');
const dataSchema =  mongoose.Schema(
   {

    imdbID:{
        required:true,
        type : String ,
    },
    title:{
        
        required:true,
        type : String ,
    
    },
    year:{
        required:true,
        type : String ,
    },

    runtTime:{
        required:true,
        type : String ,
    },
    genere:{
        required:true,
        type : String ,
    },
    writer:{
        required:true,
        type : String ,
    },
    actors:{
        required:true,
        type : String ,
    },
    plot:{
        required:true,
        type : String ,
    },
    images:{
        required:true,
        type : Array ,
    },
    imdbRating:{
     
        type : String ,
    },
   }
);
module.exports = mongoose.model('imdb',dataSchema);