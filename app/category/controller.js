const Category = require('./model')

module.exports ={
    index: async(req,res) => {
        try {
            const alertMessage = req.flash("alertMessage")
            const alertStatus = req.flash("alertStatus")

            const alert ={ message : alertMessage , status:alertStatus}
            const category = await Category.find()
            console.log('alert >>>')
            console.log(alert)
            res.render('admin/category/view_category',{
                category,
                alert,
                name: req.session.user.name,
                title: 'EMR Page'
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    },
    viewCreate : async(req,res) =>{
        try {
            res.render('admin/category/create',{
                name: req.session.user.name,
                title: 'Add EMR Page'
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    },
    actionCreate : async(req,res)=>{
        try {
            const {name,age,address,religion,job} = req.body
            let category = await Category({name,age,address,religion,job})
            await category.save();
            req.flash('alertMessage',"added successfully")
            req.flash('alertStatus', "success")
            res.redirect('/category') 
        } catch (error) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    },
    viewEdit: async(req,res) =>{
        try {
            const{id}= req.params;
            const category = await Category.findOne({_id:id})
            
            res.render('admin/category/edit',{
                category,
                name: req.session.user.name,
                title: 'Edit EMR Page'
            });
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    },
    actionEdit : async(req,res)=>{
        try {
            const{id}= req.params;
            const{name,age,address,religion,job}=req.body
             await Category.findByIdAndUpdate({
                _id:id
            },{name,age,address,religion,job})
            req.flash('alertMessage',"edit successfully")
            req.flash('alertStatus', "success")
            res.redirect('/category')
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
            
        }
    },
    actionDelete : async(req,res) =>{
        try {
            const{id}= req.params;

            await Category.findOneAndRemove({
                _id:id
            })
            req.flash('alertMessage',"delete successfully")
            req.flash('alertStatus', "success")
            res.redirect('/category')

        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    }

}