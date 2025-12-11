import { useFormContext, useFieldArray } from "react-hook-form";
import { Inputs } from "../types";

export default function Experience() {
  const {
    register,
    formState: { errors },
    control,
    watch,
  } = useFormContext<Inputs>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  // Watch all isCurrent values to handle disabled state
  const watchedExperience = watch("experience");

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h2>Step 3: Work Experience</h2>
      <p style={{ marginBottom: "1.5rem", color: "#666" }}>
        Add your work experience. You can add multiple entries.
      </p>

      {fields.map((field, index) => {
        const isCurrent = watchedExperience?.[index]?.isCurrent || false;

        return (
          <div
            key={field.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ margin: 0, color: "#333" }}>
                Experience Entry #{index + 1}
              </h3>
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              )}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor={`experience.${index}.jobTitle`}
                style={{
                  color: "#333",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                Job Title: *
              </label>
              <input
                type="text"
                id={`experience.${index}.jobTitle`}
                {...register(`experience.${index}.jobTitle`, {
                  required: "Job title is required",
                  minLength: {
                    value: 2,
                    message: "Job title must be at least 2 characters",
                  },
                })}
                placeholder="e.g., Software Developer, Marketing Manager"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
              {errors.experience?.[index]?.jobTitle && (
                <span
                  style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.875rem",
                  }}
                >
                  {errors.experience[index]?.jobTitle?.message as string}
                </span>
              )}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor={`experience.${index}.companyName`}
                style={{
                  color: "#333",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                Company Name: *
              </label>
              <input
                type="text"
                id={`experience.${index}.companyName`}
                {...register(`experience.${index}.companyName`, {
                  required: "Company name is required",
                  minLength: {
                    value: 2,
                    message: "Company name must be at least 2 characters",
                  },
                })}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
              {errors.experience?.[index]?.companyName && (
                <span
                  style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.875rem",
                  }}
                >
                  {errors.experience[index]?.companyName?.message as string}
                </span>
              )}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor={`experience.${index}.employmentType`}
                style={{
                  color: "#333",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                Employment Type: *
              </label>
              <select
                id={`experience.${index}.employmentType`}
                {...register(`experience.${index}.employmentType`, {
                  required: "Employment type is required",
                })}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              >
                <option value="">Select Employment Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
                <option value="freelance">Freelance</option>
              </select>
              {errors.experience?.[index]?.employmentType && (
                <span
                  style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.875rem",
                  }}
                >
                  {errors.experience[index]?.employmentType?.message as string}
                </span>
              )}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                <label
                  htmlFor={`experience.${index}.startDate`}
                  style={{
                    color: "#333",
                    display: "block",
                    marginBottom: "0.25rem",
                  }}
                >
                  Start Date: *
                </label>
                <input
                  type="date"
                  id={`experience.${index}.startDate`}
                  {...register(`experience.${index}.startDate`, {
                    required: "Start date is required",
                  })}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.25rem",
                  }}
                />
                {errors.experience?.[index]?.startDate && (
                  <span
                    style={{
                      color: "red",
                      display: "block",
                      fontSize: "0.875rem",
                    }}
                  >
                    {errors.experience[index]?.startDate?.message as string}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor={`experience.${index}.endDate`}
                  style={{
                    color: "#333",
                    display: "block",
                    marginBottom: "0.25rem",
                  }}
                >
                  End Date: *
                </label>
                <input
                  type="date"
                  id={`experience.${index}.endDate`}
                  {...register(`experience.${index}.endDate`, {
                    required: !isCurrent ? "End date is required" : false,
                  })}
                  disabled={isCurrent}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.25rem",
                    backgroundColor: isCurrent ? "#e9ecef" : "white",
                    cursor: isCurrent ? "not-allowed" : "text",
                  }}
                />
                {errors.experience?.[index]?.endDate && (
                  <span
                    style={{
                      color: "red",
                      display: "block",
                      fontSize: "0.875rem",
                    }}
                  >
                    {errors.experience[index]?.endDate?.message as string}
                  </span>
                )}
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  {...register(`experience.${index}.isCurrent`)}
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                />
                <span style={{ color: "#333" }}>I currently work here</span>
              </label>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor={`experience.${index}.location`}
                style={{
                  color: "#333",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                Location: *
              </label>
              <input
                type="text"
                id={`experience.${index}.location`}
                {...register(`experience.${index}.location`, {
                  required: "Location is required",
                })}
                placeholder="e.g., Tbilisi, Georgia"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
              {errors.experience?.[index]?.location && (
                <span
                  style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.875rem",
                  }}
                >
                  {errors.experience[index]?.location?.message as string}
                </span>
              )}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor={`experience.${index}.description`}
                style={{
                  color: "#333",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                Description: *
              </label>
              <textarea
                id={`experience.${index}.description`}
                {...register(`experience.${index}.description`, {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
                placeholder="Describe your responsibilities, achievements, projects, etc."
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                  resize: "vertical",
                }}
              />
              {errors.experience?.[index]?.description && (
                <span
                  style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.875rem",
                  }}
                >
                  {errors.experience[index]?.description?.message as string}
                </span>
              )}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor={`experience.${index}.skillsUsed`}
                style={{
                  color: "#333",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                Skills Used: *
              </label>
              <input
                type="text"
                id={`experience.${index}.skillsUsed`}
                {...register(`experience.${index}.skillsUsed`, {
                  required: "Skills used is required",
                })}
                placeholder="e.g., React, TypeScript, Node.js, Python"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
              {errors.experience?.[index]?.skillsUsed && (
                <span
                  style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.875rem",
                  }}
                >
                  {errors.experience[index]?.skillsUsed?.message as string}
                </span>
              )}
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() =>
          append({
            jobTitle: "",
            companyName: "",
            employmentType: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            location: "",
            description: "",
            skillsUsed: "",
          })
        }
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        + Add Another Experience Entry
      </button>
    </div>
  );
}
