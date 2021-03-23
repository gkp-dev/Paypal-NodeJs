const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json('cancel')
})

module.exports = router