const notFoundMiddleware = (req,res) => {
    res.status(404).send('ROute does not exist ')

}

export default notFoundMiddleware