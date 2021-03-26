import React from 'react';

const AuthorForm = props => {
    const {inputs,handleInputChange,handleSubmit,submitValue,errors} = props;


    return (
        <div>
            <form onSubmit={handleSubmit} className="col-3 mx-auto d-flex flex-column">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={handleInputChange}
                    value={inputs.name}
                />
                <span className="text-danger">
                    {errors.name ? errors.name.message: ""}
                </span>
                <label htmlFor="Type">type:</label>
                <input 
                    type="text" 
                    name="type" 
                    onChange={handleInputChange}
                    value={inputs.type}
                />
                <span className="text-danger">
                    {errors.type ? errors.type.message: ""}
                </span>
                <label htmlFor="name">description:</label>
                <input 
                    type="text" 
                    name="description" 
                    onChange={handleInputChange}
                    value={inputs.description}
                />
                <span className="text-danger">
                    {errors.description ? errors.description.message: ""}
                </span>
                <label htmlFor="name">skill 1:</label>
                <input 
                    type="text" 
                    name="skill_1" 
                    onChange={handleInputChange}
                    value={inputs.skill_1}
                />
                <label htmlFor="name">skill 2:</label>
                <input 
                    type="text" 
                    name="skill_2" 
                    onChange={handleInputChange}
                    value={inputs.skill_2}
                />
                <label htmlFor="name">skill 3:</label>
                <input 
                    type="text" 
                    name="skill_3" 
                    onChange={handleInputChange}
                    value={inputs.skill_3}
                />
                <input type="submit" value={submitValue} className="btn btn-info"/>
            </form>
        </div>
    );
};


export default AuthorForm;