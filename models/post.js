const db = require('./db');

const bone = db.sequelize.define('bones', {
  imagemBone:{
    type: db.Sequelize.BLOB
  },
  marcaBone:{
    type: db.Sequelize.STRING
  },
  descricaoBone:{
    type: db.Sequelize.STRING
  },
  unidadesBone:{
    type: db.Sequelize.STRING
  }
})

const camisa = db.sequelize.define('camisas',{
  imagemCamisa:{
    type: db.Sequelize.BLOB
  },
  marcaCamisa:{
    type: db.Sequelize.STRING
  },
  descricaoBone:{
    type: db.Sequelize.STRING
  },
  unidadesCamisa:{
    type: db.Sequelize.STRING
  }
})

const carteira = db.sequelize.define('carteiras', {
  imagemCarteira:{
    type: db.Sequelize.BLOB
  },
  marcaCarteira:{
    type: db.Sequelize.STRING
  },
  descricaoCarteira:{
    type: db.Sequelize.STRING
  },
  unidadesCarteira:{
    type: db.Sequelize.STRING
  }
})

//bone.sync({force: true});
//carteira.sync({force: true});
//camisa.sync({force: true});


module.exports = bone;