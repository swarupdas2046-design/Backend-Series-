import TodoModel from "../Models/todo.models.js";
// create
export const RegisterData = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        massage: "All fields are Require",
      });
    }
    const NewList = await TodoModel.create({
      name,
      description,
    });
    return res.status(201).json({
      massage: "Todo list crated Successfully",
      List: NewList,
    });
  } catch (error) {
    res.status(5000).json({
      massage: "Internal server Error",
    });
  }
};
// read
export const ReadData = async (req, res) => {
  try {
    const NewList = await TodoModel.find();

    if (!NewList.length) {
      return res.status(204).json({
        massage: "List fetched Successfully",
        List: NewList,
      });
    }

    return res.status(200).json({
      massage: "List Fetched Successfully",
      List: NewList,
    });
  } catch (error) {
    res.status(5000).json({
      massage: "Internal server Error",
    });
  }
};
//update
export const UpdateData = async (req, res) => {
  try {
    const ListId = req.params.id;
    if (!ListId) {
      return res.status(404).json({
        massage: "Id Not Found",
      });
    }
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        massage: "All fields are Require",
      });
    }
    const UpdatedList = await TodoModel.findByIdAndUpdate(
      ListId,
      {
        name,
        description,
      },
      {
        new: true,
      },
    );
    return res.status(200).json({
      massage: "Todo list Updated Successfully",
      List: UpdatedList,
    });
  } catch (error) {
    res.status(5000).json({
      massage: "Internal server Error",
    });
  }
};
// delete
export const DeleteData = async (req, res) => {
  try {
    const ListId = req.params.id;
    if (!ListId) {
      return res.status(404).json({
        massage: "Id Not Found",
      });
    }
    await TodoModel.findByIdAndDelete(ListId);
    return res.status(200).json({
      massage: "List Deleted Successfully",
    });
  } catch (error) {
    res.status(5000).json({
      massage: "Internal server Error",
    });
  }
};
