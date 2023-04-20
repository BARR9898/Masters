import ItemModel from "../models/master"



const getOrders = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
}


export {getOrders}