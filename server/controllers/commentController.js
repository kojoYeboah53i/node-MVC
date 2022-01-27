const router = require('express').Router();
const comment = require('../model/comment');





exports.create = async (req, res) => {
    
    
    const new_comments = new comment({
        name: req.body.name,
        recommend: req.body.recommend,
        email: req.body.email,
        comment: req.body.comment
    });
        await new_comments.save();
        // res.json(savedComment);
        const comments = await comment.find({});
        res.render('pages/about',  {title: "About us", comments : comments})

};

 

