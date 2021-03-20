const db = require('./db');

const post = db.sequelize.define('bone', {
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

//post.sync({force: true});

module.exports = post;