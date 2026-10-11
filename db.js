const mongoose= require('mongoose')

async function main() {
    await mongoose.connect(process.env.ATLAS_URL)
}

module.exports=main;