const Menu = require('../model/Menu');
const Order = require('../model/Order');


exports.index = async (req, res) => {
    const orders = await Order.find({}).populate('menu'); 
    res.render('order/index', {title: "Orders" , orders})
     
}

exports.add = async (req, res) => {
    let id = req.params.order_id
    const menus = await Menu.findById(id); 

    res.render('order/add', {title: "Add Orders", menus})
     
}

exports.save = async (req, res) => {
    const id =req.params.menu_id
    const menus = await Menu.findById(id)
      const orders = new Order ({
    
        client:req.body.client,
        menu : req.body.menu_id,
          order_date:Date(),
          amount : req.body.price,
          paid : 0,
          status : 0,
      }) 
       await orders.save()
    res.render('order/add', {title: "Add Orders", })
     
}

exports.edit = async (req, res) => {
    let id = req.params.id
    const order = await Order.findById(id);
// console.log(order)
    res.render('order/edit', {title: "Edit orders" , order})
     
}

exports.update = async (req, res) => {
    let id = req.params.id 

    const order = await Order.updateOne({_id: id},
    {
  
        client:req.body.client,
        menu : req.body.menu_id,
          order_date:Date(),
          amount : req.body.price,
          paid : 0,
          status : 0,
      }) ;    
    res.redirect('/orders')
     
}

exports.confirm = async (req, res) => {
    let id = req.params.order_id

    const order = await Order.findById(id);
//   console.log(menu)        
    res.render('order/delete', {title: "Delete order" , order})
    
}

exports.delete = async (req, res) => {
    let id = req.params.menu_id 

const order = await Order.deleteOne({_id: id},
  
    {
  
        client:req.body.client,
        menu : req.body.menu_id,
          order_date:Date(),
          amount : req.body.price,
          paid : 0,
          status : 0,
      }) ;       
    res.render('order/delete', {title: "Delete order" , order})
    
};

