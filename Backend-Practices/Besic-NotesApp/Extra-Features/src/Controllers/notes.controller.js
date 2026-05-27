import { NotesModel } from '../Models/notes.models.js'

// create New Notes
export const CreateNotes = async(req,res)=>{
    try {
        const {title,description,category,priority} = req.body
        // check all the fields 

        if (!title || !description || !priority) {
            return res.status(400).json({
                massage:"All Fields Are Required"
            })
        }

        if (title.trim().length<3) {
            return res.status(400).json({
                massage:"Title must be at least 3 characters long"
            })
        }
        if (description.trim().length<10) {
            return res.status(400).json({
                massage:"Description must be at least 10 characters long"
            })
        }

        // create Notes 

        const NewNotes = await NotesModel.create({
            title,
            description,
            priority,
            category,
        })

        return res.status(201).json({
            massage:"Your Notes Created Successfully",
            notes:NewNotes,
        })

    } catch (error) {
        res.status(500).json({
            massage:"Internal Server Error",
            error,
        })
    }
}

// view Existing Notes 

export const ViewALLNotes = async(req,res)=>{
    const AllNotes = await NotesModel.find()
    return res.status(200).json({
        massage:"All Notes Are fetched are Successfully",
        AllNotes,
    })
}

// Update Existing Notes 

export const UpdateNotes = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id Coming from frontend---->", id);

    const { title, description, priority, category } = req.body;

    // validate required fields are filled or not
    if (!title || !description || !priority) {
      return res.status(400).json({
        massage: "Title , description & priority fields are mandatory",
      });
    }

    // Check and updated in this id  our database

 const UpdatedNotes = await NotesModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        priority,
        category,
      },
      {
        new: true,
      },
    );

    // Check if note existed
    if (!UpdatedNotes) {
      return res.status(404).json({
        massage: "Notes are Not Existed in this Id",
      });
    }
    
    return res.status(200).json({
      massage: "Notes Update Successfully",
      UpdatedNotes,
    });


  } catch (error) {
    return res.status(500).json({
      massage: "Internal Server Error",
      error,
    });
  }
}

// Delete Existing Notes 

export const DeleteNotes =  async (req, res) => {
  try {
    const { id } = req.params;

    const IsExisted = await NotesModel.findById(id);
    if (!IsExisted) {
      return res.status("Notes are not Found in this Id");
    }

    await NotesModel.findByIdAndDelete(id);

    return res.status(200).json({
      Massage: "Notes DELETED SUccessFully",
    });
  } catch (error) {
    return res.status(500).json({
      Massage: "Internal Server Error",
      error,
    });
  }
}