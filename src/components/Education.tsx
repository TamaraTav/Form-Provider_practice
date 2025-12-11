import { useFormContext, useFieldArray } from "react-hook-form";
import { Inputs } from "../types";
import styles from "../styles/Education.module.css";

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
    <div className={styles.container}>
      <h2 className={styles.title}>Step 2: Education</h2>
      <p className={styles.subtitle}>
        Add your educational background. You can add multiple entries.
      </p>

      {fields.map((field, index) => (
        <div key={field.id} className={styles.entryCard}>
          <div className={styles.entryHeader}>
            <h3 className={styles.entryTitle}>Education Entry #{index + 1}</h3>
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className={styles.removeButton}
              >
                Remove
              </button>
            )}
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor={`education.${index}.degreeLevel`}
              className={styles.label}
            >
              Degree Level: <span className={styles.required}>*</span>
            </label>
            <select
              id={`education.${index}.degreeLevel`}
              {...register(`education.${index}.degreeLevel`, {
                required: "Degree level is required",
              })}
              className={styles.select}
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
              <span className={styles.error}>
                {errors.education[index]?.degreeLevel?.message as string}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor={`education.${index}.institutionName`}
              className={styles.label}
            >
              Institution Name: <span className={styles.required}>*</span>
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
              className={styles.input}
            />
            {errors.education?.[index]?.institutionName && (
              <span className={styles.error}>
                {errors.education[index]?.institutionName?.message as string}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor={`education.${index}.fieldOfStudy`}
              className={styles.label}
            >
              Field of Study: <span className={styles.required}>*</span>
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
              className={styles.input}
            />
            {errors.education?.[index]?.fieldOfStudy && (
              <span className={styles.error}>
                {errors.education[index]?.fieldOfStudy?.message as string}
              </span>
            )}
          </div>

          <div className={styles.dateGrid}>
            <div className={styles.dateGridItem}>
              <label
                htmlFor={`education.${index}.startDate`}
                className={styles.label}
              >
                Start Date: <span className={styles.required}>*</span>
              </label>
              <input
                type="date"
                id={`education.${index}.startDate`}
                {...register(`education.${index}.startDate`, {
                  required: "Start date is required",
                })}
                className={styles.input}
              />
              {errors.education?.[index]?.startDate && (
                <span className={styles.error}>
                  {errors.education[index]?.startDate?.message as string}
                </span>
              )}
            </div>

            <div className={styles.dateGridItem}>
              <label
                htmlFor={`education.${index}.endDate`}
                className={styles.label}
              >
                End Date: <span className={styles.required}>*</span>
              </label>
              <input
                type="date"
                id={`education.${index}.endDate`}
                {...register(`education.${index}.endDate`, {
                  required: "End date is required",
                })}
                className={styles.input}
              />
              {errors.education?.[index]?.endDate && (
                <span className={styles.error}>
                  {errors.education[index]?.endDate?.message as string}
                </span>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor={`education.${index}.gpa`} className={styles.label}>
              GPA/Grade (Optional):
            </label>
            <input
              type="text"
              id={`education.${index}.gpa`}
              {...register(`education.${index}.gpa`)}
              placeholder="e.g., 3.8/4.0 or A+"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor={`education.${index}.description`}
              className={styles.label}
            >
              Description: <span className={styles.required}>*</span>
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
              className={styles.textarea}
            />
            {errors.education?.[index]?.description && (
              <span className={styles.error}>
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
        className={styles.addButton}
      >
        + Add Another Education Entry
      </button>
    </div>
  );
}
