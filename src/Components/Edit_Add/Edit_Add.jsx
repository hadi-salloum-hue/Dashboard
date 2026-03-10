import { SlCloudUpload } from "react-icons/sl";
import './Edit_Add.css'

const Edit_Add = ({ title, inputs, submit, setData }) => {

  let data = {}

  const dataHandel = (event) => {
    event.preventDefault()
    setData(data)
  }

  const imageInput = inputs.find(input => input.type === "file")
  const otherInputs = inputs.filter(input => input.type !== "file")

  return (
    <form className='form-container' onSubmit={dataHandel}>

      <div className='left'>
        <h1>{title}</h1>

        {otherInputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.Placeholder}
            defaultValue={input?.oldValue}
            onChange={(event) =>
              data = { ...data, [input.name]: event.target.value }
            }
          />
        ))}

        <button type="submit" className="submit">{submit}</button>
      </div>


      <div className='right'>
        <label className='image-box'>
          
          {imageInput?.oldValue ? (
            <img src={imageInput.oldValue} alt="" />
          ) : (
            <SlCloudUpload className="upload-icon" />
          )}

          <input
            type="file"
            hidden
            onChange={(event) =>
              data = { ...data, [imageInput.name]: event.target.files[0] }
            }
          />
        </label>
      </div>

    </form>
  )
}

export default Edit_Add