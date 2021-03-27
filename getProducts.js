const products = require('./products.json')


const getProducts = (req, res) => {
    const item = products.find((val) => val.id === parseInt(req.params.id))
    if (!item) {
    return res.status(500).send('Item not in list')
    }
    else {
        // res.status(200)
    res.status(200).json(item)
    }
}

// const getProducts = (req, res, next) =>  {
//     const {id} = req.params;
//     res.status(200).send(products)
//     const item = products.find.parseInt((val)=>val.id)(res.params.id)
//     return {
//         if ( {item}) {
//             res.status(200).json(id)
//         }
//     }
    

// const getProducts = (req, res) => {
//         const {id} = req.params;
//         const filteredId = products.filter((item) => item === id) 
//         if (filteredId <= 8) {
//             res.status(200).json(id) 
//         }
//         else{
//             res.status(500).json('Item is not on the list')
//         }
//     }



module.exports = getProducts