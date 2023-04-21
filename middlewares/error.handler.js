function logErrors (err, req, res, next) {
    console.log('logErrors');
    console.error(err);
    next(err);
}

function errorHandlres (err, req, res, next) {
    console.log('errorHandlers');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
}

function boomerrorHandlres (err, req, res, next) {
    if (err.isBoom){
        const {output} = err;
        res.status(output.statusCode).json(output.payload);
    }  else{
    next(err);
    }
}

module.exports = { logErrors, errorHandlres, boomerrorHandlres }