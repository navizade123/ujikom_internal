import React, { useState } from "react";
// import Project from "./ProjectsPage";

const ProjectForm = ({ project: initialProject, onSave, onCancel }) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    type: "",
    name: "",
    description: "",
    currency: "",
    price: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    let updatedValue = value;

    if (event.target.type === "number") {
      updatedValue = Number(updatedValue);
    }

    const updatedProject = {
      ...project,
      [name]: updatedValue,
    };

    setProject(updatedProject);
    setErrors(validate(updatedProject));
  };

  const validate = (project) => {
    let errors = {
      type: "",
      name: "",
      description: "",
      currency: "",
      price: "",
    };

    if (!project.type) {
      errors.type = "Type is required";
    }
    if (!project.name) {
      errors.name = "Name is required";
    } else if (project.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }
    if (!project.description) {
      errors.description = "Description is required";
    }
    if (!project.currency) {
      errors.currency = "Currency is required";
    }
    if (project.price <= 0) {
      errors.price = "Price must be more than 0";
    }

    return errors;
  };

  const isValid = () => {
    return (
      Object.values(errors).every((error) => error === "") &&
      Object.values(project).every((value) => value !== "")
    );
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="type">Project Type</label>
      <input
        type="text"
        name="type"
        placeholder="Enter Type"
        value={project.type}
        onChange={handleChange}
      />
      {errors.type && <p className="error">{errors.type}</p>}
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={project.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="Enter Description"
        cols="30"
        rows="10"
        value={project.description}
        onChange={handleChange}
      ></textarea>
      {errors.description && <p className="error">{errors.description}</p>}
      <label htmlFor="currency">Project Currency</label>
      <input
        type="text"
        name="currency"
        placeholder="Enter Currency"
        value={project.currency}
        onChange={handleChange}
      />
      {errors.currency && <p className="error">{errors.currency}</p>}
      <label htmlFor="price">Project Price</label>
      <input
        type="number"
        name="price"
        value={project.price}
        onChange={handleChange}
      />
      {errors.price && <p className="error">{errors.price}</p>}
      <div className="input-group">
        <button className="primary bordered medium" disabled={!isValid()}>
          Save
        </button>
        <span />
        <button
          type="button"
          className="danger bordered medium"
          onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
