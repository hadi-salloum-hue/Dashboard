import { Link } from "react-router-dom"
import { SlCloudUpload } from "react-icons/sl";
import './Form.css'
const Form = ({ title, info, inputs, submit, formFooter, setData }) => {
    let data = {}
    const dataHandel = (event) => {
        event.preventDefault()
        setData(data)
    }
    return (
        <div className="signs">
            <form onSubmit={dataHandel} className='sign'>
                <h1>{title}</h1>
                <p className="info">{info}</p>
                <div className="inputs">
                    {inputs.map((input, index) => {
                        return (
                            <div key={index}   className={`input-group ${input.name}`}>

                                {input.type === "file" ? (
                                    <div className="file-wrapper">

                                        <label htmlFor="file-upload" className="file-label">
                                            <SlCloudUpload className="upload-icon" />
                                            <span>Upload Image</span>
                                        </label>

                                        <input
                                            id="file-upload"
                                            type="file"
                                            onChange={(event) =>
                                                data = {
                                                    ...data,
                                                    [input.name]: event.target.files[0]
                                                }
                                            }
                                        />
                                    </div>
                                ) : (
                                    <input
                                        type={input.type}
                                        placeholder={input.Placeholder}
                                        onChange={(event) =>
                                            data = { ...data, [input.name]: event.target.value }
                                        }
                                    />
                                )}

                            </div>
                        )
                    })}
                </div>
                <input type="submit" value={submit} className="submit" />
                {formFooter ? <p>{formFooter?.content} <Link to={formFooter?.url}>{formFooter?.linkContent}</Link></p> : ""}

            </form>
        </div>
    )
}

export default Form
