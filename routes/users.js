const router = require('express').Router();
const users = require('./data/users.json');

router.get('/users', (req, res) => {
    res.send(users);
  })

  router.get('/users/8340d0ec33270a25f2413b69', (req, res) => {
    const {id} = req.params
    if(!users[id]){
      res.send({error: 'Pengguna ini tidak ada'})
      return;
    }
    res.send(users[id])
})

module.exports = router;