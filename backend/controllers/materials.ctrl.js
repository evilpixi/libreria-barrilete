const materialController = {}

materialController.getAllMaterials = () => {

}

materialController.addMaterial = (material) => {
    if(material.stock < 0) {
        const error = new Error()
        error.message = "Stock cannot be negative!"
        error.status = 400
        throw error
    }

    return "Ok"
}

module.exports = materialController;