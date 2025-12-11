import { useFormContext, useFieldArray } from "react-hook-form";
import { Inputs } from "../types";

export default function Education() {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<Inputs>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h2>Step 2: Education</h2>
      <p style={{ marginBottom: "1.5rem", color: "#666" }}>
        Add your educational background. You can add multiple entries.
      </p>

      {fields.map((field, index) => (
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
              Education Entry #{index + 1}
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
              htmlFor={`education.${index}.degreeLevel`}
              style={{
                color: "#333",
                display: "block",
                marginBottom: "0.25rem",
              }}
            >
              Degree Level: *
            </label>
            <select
              id={`education.${index}.degreeLevel`}
              {...register(`education.${index}.degreeLevel`, {
                required: "Degree level is required",
              })}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
            >
              <option value="">Select Degree Level</option>
              <option value="high-school">High School</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD</option>
              <option value="other">Other</option>
            </select>
            {errors.education?.[index]?.degreeLevel && (
              <span
                style={{ color: "red", display: "block", fontSize: "0.875rem" }}
              >
                {errors.education[index]?.degreeLevel?.message as string}
              </span>
            )}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor={`education.${index}.institutionName`}
              style={{
                color: "#333",
                display: "block",
                marginBottom: "0.25rem",
              }}
            >
              Institution Name: *
            </label>
            <input
              type="text"
              id={`education.${index}.institutionName`}
              {...register(`education.${index}.institutionName`, {
                required: "Institution name is required",
                minLength: {
                  value: 3,
                  message: "Institution name must be at least 3 characters",
                },
              })}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
            />
            {errors.education?.[index]?.institutionName && (
              <span
                style={{ color: "red", display: "block", fontSize: "0.875rem" }}
              >
                {errors.education[index]?.institutionName?.message as string}
              </span>
            )}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor={`education.${index}.fieldOfStudy`}
              style={{
                color: "#333",
                display: "block",
                marginBottom: "0.25rem",
              }}
            >
              Field of Study: *
            </label>
            <input
              type="text"
              id={`education.${index}.fieldOfStudy`}
              {...register(`education.${index}.fieldOfStudy`, {
                required: "Field of study is required",
                minLength: {
                  value: 2,
                  message: "Field of study must be at least 2 characters",
                },
              })}
              placeholder="e.g., Computer Science, Business Administration"
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
            />
            {errors.education?.[index]?.fieldOfStudy && (
              <span
                style={{ color: "red", display: "block", fontSize: "0.875rem" }}
              >
                {errors.education[index]?.fieldOfStudy?.message as string}
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
                htmlFor={`education.${index}.startDate`}
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
                id={`education.${index}.startDate`}
                {...register(`education.${index}.startDate`, {
                  required: "Start date is required",
                })}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
              {errors.education?.[index]?.startDate && (
                <span
                  style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.875rem",
                  }}
                >
                  {errors.education[index]?.startDate?.message as string}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor={`education.${index}.endDate`}
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
                id={`education.${index}.endDate`}
                {...register(`education.${index}.endDate`, {
                  required: "End date is required",
                })}
                disabled={false}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
              {errors.education?.[index]?.endDate && (
                <span
                  style={{
                    color: "red",
                    display: "block",
                    fontSize: "0.875rem",
                  }}
                >
                  {errors.education[index]?.endDate?.message as string}
                </span>
              )}
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor={`education.${index}.gpa`}
              style={{
                color: "#333",
                display: "block",
                marginBottom: "0.25rem",
              }}
            >
              GPA/Grade (Optional):
            </label>
            <input
              type="text"
              id={`education.${index}.gpa`}
              {...register(`education.${index}.gpa`)}
              placeholder="e.g., 3.8/4.0 or A+"
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor={`education.${index}.description`}
              style={{
                color: "#333",
                display: "block",
                marginBottom: "0.25rem",
              }}
            >
              Description: *
            </label>
            <textarea
              id={`education.${index}.description`}
              {...register(`education.${index}.description`, {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
              placeholder="Describe your achievements, courses, honors, etc."
              rows={4}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.25rem",
                resize: "vertical",
              }}
            />
            {errors.education?.[index]?.description && (
              <span
                style={{ color: "red", display: "block", fontSize: "0.875rem" }}
              >
                {errors.education[index]?.description?.message as string}
              </span>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            degreeLevel: "",
            institutionName: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            gpa: "",
            description: "",
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
        + Add Another Education Entry
      </button>
    </div>
  );
}
