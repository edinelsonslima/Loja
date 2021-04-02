const db = require('./db');


//Criando Table Bone no database LOJA
  const bone = db.sequelize.define('bones', {
    imagemBone:{
      type: db.Sequelize.BLOB
    },
    marcaBone:{
      type: db.Sequelize.STRING
    },
    valorBone:{
      type: db.Sequelize.STRING
    }
  })

//bone.sync({force: true});

module.exports = bone;